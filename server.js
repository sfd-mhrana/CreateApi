const  express=require('express')
const app=express();
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost/school',{ useNewUrlParser: true ,useUnifiedTopology: true})

const db=mongoose.connection
db.on('error',(error)=>{console.log(error)})
db.once('open',()=>console.log('Connected'))


app.use(express.json())

const subscribersroute=require('./routers/subscribers')
app.use('/subscribers',subscribersroute)


app.listen(4000,(req,res)=>{
    console.log('Server Started')

})
