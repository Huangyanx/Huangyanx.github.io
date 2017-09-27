var router=express.Router();
var projectServer=require(rootPath+"/servers/projectServer");
var aboutMeServer=require(rootPath+"/servers/aboutMeServer");
var articleServer=require(rootPath+"/servers/articleServer");
var bookServer=require(rootPath+"/servers/bookServer");
var noteServer=require(rootPath+"/servers/noteServer");
var indexServer=require(rootPath+"/servers/indexServer");

router.get('/',function(req,res){
	res.render('index');
	
});
router.get('/hcj',function (req,res) {
	res.render('project/hcj');
})
module.exports=router;