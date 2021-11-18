import * as gulp from 'gulp';
import { closureCompileProd } from './closure-compile';
import { compileTsickle } from './tsickle-compile';
import { clearDist, clearDistDev, clearTsickle, copyIndex } from './utils';
import { create } from 'browser-sync';

gulp.task('prod', gulp.series(clearTsickle, compileTsickle, clearDist, closureCompileProd(true), copyIndex))


gulp.task('dev', () => {
  const browserSync = create();
  gulp.watch('../apps/**/*.ts', {ignoreInitial: false}, gulp.series(clearTsickle, compileTsickle, clearDistDev, closureCompileProd(false), copyIndex));
  gulp.watch('../dist/*.html').on('change', browserSync.reload)
  gulp.watch('../dist/**/*.js').on('change', browserSync.reload)
  browserSync.init({
    server: '../dist'
  });
})