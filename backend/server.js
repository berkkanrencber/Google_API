const express = require('express');
const bodyParser = require('body-parser');

 const app = express();

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Merhaba');
})

app.post('/', (req,res) => {
    var isim = req.body.isim;
    var soyisim = req.body.soyisim;
    res.json({
        isim: isim,
        soyisim: soyisim,
        yas: 22,
        universite: 'Marmara Universitesi',
        bolum: 'Bilgisayar Muhendisligi',
        message: 'Post alindi'
    })
    console.log(`İsim: ${isim} Soyisim: ${soyisim}`);
});

app.listen(8080,() => {
    console.log('8080 listening...');
});