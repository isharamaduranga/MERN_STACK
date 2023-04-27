const express = require('express');

const Posts = require('../models/posts')

const router = express.Router();

// SAVE Posts

router.post('/post/save', (req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save()
    .then(() => {
      return res.status(200).json({
        success: "Posts saved successfully ...",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
  
      
});

//get Posts
router.get('/posts/',(req,res) =>{
    Posts.find()
      .then(posts => {
        return res.status(200).json({
          success: true,
          existingPosts:posts
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err,
        });  
      });
});


//update Posts

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
      req.params.id,
      {$set:req.body})
      .then(post => {
        return res.status(200).json({
          success: "Update Successfully ...",
        });
      })
      .catch(err => {
        return res.status(400).json({
          error: err,
        });  
      });
});


//delete Posts

router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id)
      .then(deletedPost => {
        return res.status(200).json({
          success: "Delete Successfully ...",
          deletedPost,
        }); 
      })
      .catch(err => {
        return res.status(400).json({
          error: err,
        });  
      });
})

//get specific posts
router.get("/post/:id",(req,res) =>{
  let postId = req.params.id;
  Posts.findById(postId)
    .then(post => {
      return res.status(200).json({
        success: true,
        post
      });
    })
    .catch(err => {
      return res.status(400).json({
        success: false,
        err
      });
    });
});


module.exports = router;
