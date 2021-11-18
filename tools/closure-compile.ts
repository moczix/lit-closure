import { compiler as ClosureCompiler} from 'google-closure-compiler';
import { join, resolve } from 'path';
import { exec } from 'child_process';
import { chunksChunk, chunksJs } from './chunks-data';

type ChunksData = {
  chunk: string[],
  js: string[]
}

function getChunksData(entryPoint: string): Promise<ChunksData> {
  return new Promise((resolve, reject) => {
    exec(`node ../node_modules/closure-calculate-chunks/cli.js --entrypoint ${entryPoint}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
          reject(stderr);
          return;
      }
      resolve(JSON.parse(stdout))
    })
  })
}

function normalizeChunksData(chunksData: ChunksData): ChunksData {
  const rootDir = join(__dirname, '../');
  return {
    js: chunksData.js.map((path: string) => path.replace(rootDir, '../')),
    chunk: chunksData.chunk
  };
}

function normalizeChunksData2(): ChunksData {
  return {
    js: chunksJs.map(js => resolve(join('../', js))),
    chunk: chunksChunk
  }
}

/** */

export function closureCompileProd(isProduction: boolean) {
  return async (done: (error?: Error | null) => void) => {
    const entryJs: string = resolve(join('../', 'tsc-out/apps/main.js'));
    //const data = normalizeChunksData(await getChunksData(entryJs));
    const data = normalizeChunksData2();
    const compiler = new ClosureCompiler({
      entry_point: entryJs,
      js: data.js,
      chunk: data.chunk,
      language_in: 'ECMASCRIPT_2020',
      language_out: 'ECMASCRIPT_2020',
      compilation_level: isProduction ? 'ADVANCED' : 'SIMPLE_OPTIMIZATIONS',
      warning_level: 'QUIET',
      dependency_mode: 'PRUNE',
      rewrite_polyfills: false,
      module_resolution: 'NODE',
      package_json_entry_names: 'es2020,module',
      chunk_output_path_prefix: resolve(join('../', 'dist/js/')) + '/',
      chunk_output_type: 'ES_MODULES'
    });
    
    compiler.run((exitCode, stdOut, stdErr) => {
      if (stdErr) {
        console.error(stdErr)
        done(new Error(stdErr))
      }
      done();
    });
  }

}