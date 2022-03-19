const express=require('express');
const router=express.Router();
const data=require('../models');


//get all questions
router.get('/',async (req,res)=>{
    try{
        const questions=await data.Question.find();
        res.send(questions);
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
});


//Search by Topic(annotation) text
router.get('/search',async (req,res)=>{
    try{
        const searchText= req.query.q;
        var questions=[];
        if(searchText && searchText!=""){
          questions=await data.Question.find({}).where({
            'annotations.title': searchText.trim()
        });
        }else{
          questions=await data.Question.find();
        }
        res.send(questions);
    }
    catch(err){
        res.status(500).json({ message: err.message })
    }
});


//Add question
router.post('/addQuestion',async (req,res)=>{
    const quest =  {title: req.body.title};
      try {
       await data.Question.create(quest).then(obj => {
           console.log("\n>> Created Question:\n", obj);
            res.status(201).json(obj)
        });
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})


//Add annotation(topic)
router.post('/addAnnotation',async (req,res)=>{
  const questionId= req.body.questionId;
  const annotation={
    title: req.body.title
  };

 await data.Annotation.create(annotation).then(docAnnotation => {
     console.log("\n>> Created Annotation:\n", docAnnotation);
     res.status(201).send(docAnnotation);
      return data.Question.findByIdAndUpdate(
      questionId,
      {
        $push: {
          annotations: {
            _id: docAnnotation._id,
             title: docAnnotation.title,
          }
        }
      },
      { new: true, useFindAndModify: false }
    );
  });
});



//Delete question
router.delete('/:id',async (req,res)=>{
    try{
         const quest=await data.Question.findById(req.params.id);
         if(quest!=null){
            await data.Question.findByIdAndRemove(quest);
             res.status(200).json('Removed successfully');
         }else{
             res.status(404).json('Not found');
         }

    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})


module.exports=router;
