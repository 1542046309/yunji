var gulp = require("gulp");
var sass = require("gulp-sass");

//复制html文件
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji"));
});

//复制php文件
gulp.task("copy-php",function(){
	gulp.src("*.php").pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji"));
});

//复制img文件
gulp.task("copy-img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji\\img"));
});

//复制js文件
gulp.task("copy-js",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji\\js"));
});


//sass编译
   gulp.task("sassfile",function(){
   	gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji\\css"));
   });

//复制css文件
gulp.task("copy-css",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\yunji\\css"));
});

//监听
gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("*.php",["copy-php"]);
	gulp.watch("scss/*.scss",["sassfile"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("css/**/*",["copy-css"]);
})
