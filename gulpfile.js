//这句话就相当于:<script src="gulp.js"></script>
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

//定义一个复制文件的任务
gulp.task("copy-index",function(){
	//此函数的代码是任务copy-index对应的代码，
	//这句话的意思是，把当前文件夹下的index.html文件拷贝到当前文件夹下的dist文件夹下
//	gulp.src("index.html").pipe(gulp.dest("./dist"));
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject"));
});

//复制所有的html文件
gulp.task("copy-html",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject"));
});

//复制所有的img文件
gulp.task("copy-img",function(){
});
	gulp.src("img/*.jpg").pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\img"));

//复制所有的css文件
gulp.task("copy-css",function(){
});
	gulp.src("css/*.css").pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\css"));

//复制所有的js文件
gulp.task("copy-js",function(){
});
	gulp.src("js/*.js").pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\js"));

//合并js文件
gulp.task("concatjs",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\js"));
})

//压缩：
/*
gulp.task("uglifyjs",function(){
	gulp.src("js/index.js")
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\gulp1803\\js"));
})
*/

//合并并压缩js文件
gulp.task("concat-uglify-js",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\js"));
})

//合并,压缩,重命名js文件
gulp.task("concat-uglify-rename-js",function(){
	gulp.src(["js/index.js","js/goodslist.js"])
	.pipe(concat("common.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\js"))
	.pipe(uglify())
	.pipe(rename("common.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\guolehuiProject\\js"));
})

//监听任务
gulp.task("watchall",function(){
	//gulp.watch("index.html",["copy-index"]);
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("img/*.jpg",["copy-img"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concatjs"]);
	//gulp.watch("js/index.js",["uglifyjs"]);
	//gulp.watch(["js/index.js","js/goodslist.js"],["concat-uglify-js"]);
	gulp.watch(["js/index.js","js/goodslist.js"],["concat-uglify-rename-js"]);
})
