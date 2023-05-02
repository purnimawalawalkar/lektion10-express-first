const dbDriver = require('better-sqlite3');
const db =dbDriver('bands.sqlite3');
const express = require('express');
const app = express();
app.use(express.static('frontend'));
app.use(express.json());

app.get('/bands', (req,  res)  => {
// req = request
// res=response

const bands =db.prepare(`
SELECT * FROM bands
`).all();
res.json(bands);
});

app.get(`/bands/:id`, (req,  res) =>  {
    //get the url id
    const id =req.params.id;
 console.log(req);
    let statement =db.prepare('SELECT * FROM bands WHERE id =  :id');
    let result = statement.all({
        id,
    
});
res.json(result[0] || { error:"No band matching id"});

});
app.listen(3000, () => {
    console.log(' server started on port 3000.'); 
});