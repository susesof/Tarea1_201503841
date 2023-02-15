const express = require ('express');
const app= express();
const morgan = require('morgan');

app.set ('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.get('/', (req,res)=> {
    res.send('Hello');
    
});

app.get('/info', (req,res)=> {
    res.send('Josseline Suseth Godinez Garcia 201503841 ayd1');
});


app.post('/calculadora', (req,res) => {

    let num1= req.body.num1;
    let num2= req.body.num2;
    const result = {
        "resultado": num1+num2
    }
    res.send(result);
});





app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


