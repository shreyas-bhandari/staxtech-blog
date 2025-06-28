const express = require('express');
const router = express.Router();
const articleModels = require('../models/articleModel');

 router.get('/',async (req,res)=>{

    try {
      const articles = await articleModels.find();
       return res.json(articles);
      
    } catch (error) {
      console.error(error);
      return res.json(error);
   }

    });


 router.get('/:articleId', async (req,res)=>{
   try {
      const articleId = req.params.articleId;
      const article = await articleModels.findById(articleId);
      return res.json(article);

      
   } catch (error) {
      console.error(error);
      return res.json(error);
    }
    
 });



 router.post('/', async (req,res)=>{

    try {
        const article = await articleModels.create(req.body);
        return res.json({article});
        
    } catch (error) {
        console.error(error);
        return res.json(error);
      }
   });




 router.put('/:articleId',async (req,res)=>{
   try {
      const articleId = req.params.articleId;
      const article = await articleModels.findByIdAndUpdate(articleId, req.body, {new: true});
      return res.json(article);
      
   } catch (error) {
      console.error(error);
      return res.json(error);
   }
 });




 router.delete('/:articleId',async (req,res)=>{
   try {
      const articleId = req.params.articleId;
      await articleModels.findByIdAndDelete(articleId);
      return res.json({message: 'Article deleted'});

      
   } catch (error) {
      console.error(error);
      return res.json(error);
   }
 });



module.exports = router;