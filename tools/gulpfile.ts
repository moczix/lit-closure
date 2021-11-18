import * as gulp from 'gulp';
import { closureCompileProd } from './closure-compile';
import { compileTsickle } from './tsickle-compile';
import { clearDist, clearTsickle, copyIndex } from './utils';
import { create } from 'browser-sync';

gulp.task('dev', () => {
  const browserSync = create();
  gulp.watch('../apps/**/*.ts', gulp.series(clearTsickle, compileTsickle, clearDist, closureCompileProd(false), copyIndex));
  gulp.watch('../dist/*.html').on('change', browserSync.reload)
  gulp.watch('../dist/**/*.js').on('change', browserSync.reload)
  browserSync.init({
    server: '../dist'
  });
})