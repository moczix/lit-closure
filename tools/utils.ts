import rimraf from 'rimraf';
import { copyFileSync } from 'fs';

export function clearTsickle(done: (error?: Error | null) => void) {
  rimraf('../tsc-out', done)
}

export function clearDistDev(done: (error?: Error | null) => void) {
  rimraf('../dist/js/*', done)
}

export function clearDist(done: (error?: Error | null) => void) {
  rimraf('../dist/*', done)
}

export function copyIndex(done: (error?: Error | null) => void) {
  copyFileSync('../apps/index.html', '../dist/index.html')
  done();
}