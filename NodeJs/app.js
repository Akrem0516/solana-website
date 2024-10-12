const express = require('express');
const path = require('path');



const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`app is running on PORT ${PORT}`);
});



//serve static files
app.use(express.static(path.join(__dirname , '../CSS')));
app.use(express.static(path.join(__dirname , '../JS')));
app.use(express.static(path.join(__dirname , '../Pics')));

//redirections
app.get('/acceuil', (req, res) => {
    res.redirect('/');
  });


//serve HTML pages
app.get('/', (req , res) => {
    res.sendFile('./HTML/acceuil.html',{root : path.resolve(__dirname, '..')});
});