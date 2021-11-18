import { compiler as ClosureCompiler} from 'google-closure-compiler';
import { join, resolve } from 'path';
import { exec } from 'child_process';

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



export function closureCompileProd(isProduction: boolean) {
  return async (done: (error?: Error | null) => void) => {
    const entryJs: string = resolve(join('../', 'tsc-out/apps/main.js'));
    const chunksDataFromPlugin: ChunksData = await getChunksData(entryJs);
    const compiler = new ClosureCompiler({
      entry_point: entryJs,
      js: chunksDataFromPlugin.js,
      chunk: chunksDataFromPlugin.chunk,
      language_in: 'ECMASCRIPT_2020',
      language_out: 'ECMASCRIPT_2020',
      compilation_level: isProduction ? 'ADVANCED' : 'SIMPLE_OPTIMIZATIONS',
      warning_level: 'QUIET',
      dependency_mode: 'PRUNE',
      rewrite_polyfills: false,
      module_resolution: 'NODE',
      package_json_entry_names: 'es2020,module',
      chunk_output_path_prefix: resolve(join('../', 'dist/js/')) + '/',
      chunk_output_type: 'ES_MODULES',
      ...(isProduction ? {} : {
        debug: true,
        formatting: 'PRETTY_PRINT'
      })
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