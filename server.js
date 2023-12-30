const express =require('express');
const mongoose =require('mongoose');
const BrandName = require('./model')
const app = express();


//middleware
app.use(express.json())


mongoose.connect('mongodb+srv://pavan:pavan@pavan.wefhnzm.mongodb.net/?retryWrites=true&w=majority',{
useUnifiedTopology: true,
useNewUrlParser: true
}).then(
    ()=>console.log('DB connected...')
).catch(err => console.log(err))


app.post('/addbrands',async (req,res)=>{
    const  {brandname} =req.body;
    try{
        const newData = new BrandName({brandname});
        await newData.save()
        return res.json( await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello world</h1>')
// })

app.listen(3000,()=>console.log('Server is running...'))