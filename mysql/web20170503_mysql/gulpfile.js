var gulp  = require("gulp");

//写个copy的任务
gulp.task("copytosever",function(){
	gulp.src(["*.php","*.html"]).pipe(gulp.dest("D:/phpStudy/WWW/web20170503_mysql"));
});

gulp.task("copytoseverjs",function(){
	gulp.src(["js/*.js"]).pipe(gulp.dest("D:/phpStudy/WWW/web20170503_mysql/js"));
});

gulp.task("watchall",function(){
	gulp.watch(["*.php","*.html"],["copytosever"]);
	gulp.watch(["js/*.js"],["copytoseverjs"]);	
});
