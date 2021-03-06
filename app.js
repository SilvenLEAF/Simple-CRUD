const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.set('view engine', 'ejs');
app.use('/stylesURL', express.static('./client/stylesFOL'));
app.use('/scriptsURL', express.static('./client/scriptsFOL'));



/* -------------------------
.        database
------------------------- */
mongoose.connect('mongodb+srv://SilvenLEAF:shenl0ng@simple-crud-orox4.mongodb.net/SimpleCrudDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, ()=>{
    console.log(`Connected to MongoDB`);
});





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
app.use((err, req, res, next)=>{
    console.log(err);
    return res.status(422).send({alert: `There's an ERROR!!!`});
});





// -------------------Listen-----------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})