const router = require('express').Router();
const Comments = require('../models/Comments-model');

router.get('/', (req, res, next)=>{
   try{
       console.log(req.query);

       Comments.findOne({name: req.query.getName})
            .then((foundItem)=>{
                // res.send(foundItem);
                res.render('index', { data: foundItem });
            });
   }catch(next){
       next();
   }
});

router.post('/', (req, res, next)=>{
    try{
        console.log(req.body);

        Comments.create(req.body)
            .then((savedItem)=>{
                res.send(savedItem);
            });
    }catch(next){
        next();
    }
})

module.exports = router;