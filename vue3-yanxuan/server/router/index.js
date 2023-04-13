const express=require('express'); 
//引入轮播图数据
const bannerData=require('../data/banner.json');
const router=express.Router();

router.get('/test', (req, res) => {
    res.send('test');
});

//首页轮播图
router.get('/home/banner', (req, res) => {
    res.send(bannerData);
});

module.exports=router;