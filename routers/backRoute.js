var router=express.Router();
router.get('/back',function(req,res,next){
	res.head()
	res.send("<h2>��̨</h2>");
	
});
module.exports=router;