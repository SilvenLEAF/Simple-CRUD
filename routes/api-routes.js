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

        Comments.findOne({name: req.body.name})
        .then((foundItem)=>{
            if(foundItem){
                res.status(422).send({alert: 'Name already exists!'});
            }else{
                Comments.create(req.body)
            .then((savedItem)=>{
                    res.send(savedItem);
            });
            }
        });





        Comments.create(req.body)
            .then((savedItem)=>{
                    res.send(savedItem);
            });
    }catch(next){
        next();
    }
})

module.exports = router;