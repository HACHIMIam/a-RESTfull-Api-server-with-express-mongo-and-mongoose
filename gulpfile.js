var gulp = require('gulp');
var jshint=require('gulp-jshint');
gulp.task('default',function(){
	
});
gulp.task('jshint',function(){
	gulp.src('./routes/*.js').pipe(jshint()).pipe(jshint.reporter('default'));
});