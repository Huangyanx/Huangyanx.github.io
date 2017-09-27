global.express=require('express');
global.rootPath=__dirname;

var ejs=require('ejs');
var app=express();

app.use('/',require(rootPath+'/routers/mainRoute'));
app.use('/back',require(rootPath+'/routers/backRoute'));

//模板引擎
app.set('view engine','html');
app.set('views',rootPath+'/views');
app.engine('.html',ejs.__express);

//设置静态文件目录

app.use(express.static(rootPath+'/public'));

app.listen(3000);