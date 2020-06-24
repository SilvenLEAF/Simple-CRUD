const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.use('/stylesURL', express.static('./client/stylesFOL'));
app.use('/scriptsURL', express.static('./client/scriptsFOL'));



/* -------------------------
.        middlewares
------------------------- */
//------body-parser
app.use(bodyParser.json());

//------routes handling
app.use('/api', require('./routes/api-routes'));

app.get('/', (req, res, next)=>{
    res.redirect('/api');
});

//--------errors handling
app.use((err, req, res)=>{
    console.log(err);
    res.send({alert: `There's an ERROR!!!`});
})





// -------------------Listen-----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})