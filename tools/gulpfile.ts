import * as gulp from 'gulp';
import { closureCompileProd } from './closure-compile';
import { compileTsickle } from './tsickle-compile';




function defaultTask(cb: () => void) {
  console.log('default')
  cb();
}

gulp.task('default', closureCompileProd(false))