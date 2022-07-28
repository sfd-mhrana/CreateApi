const express=require('express')
const router=express.Router()
const Subscriber=require('../models/subcriber')

//Getting All
router.get('/',async(req,res)=>{
    try{
        const subscriber=await Subscriber.find()
        res.json(subscriber)
    }catch(err){
    res.status(500).json({message:err.message})    }
})

//Getting One

router.get('/:id',getSubscriber,(req,res)=>{
    res.json(res.subscriber)
})

//Creating One
router.post('/',async (req,res)=>{
    const subscriber=new Subscriber({
        name:req.body.name,
        Rool_NO:req.body.Rool_NO
    })

    try{
        const newSubscriver=await subscriber.save()
        res.status(201).json(newSubscriver)
    }catch(err){
        res.status(400).json({message:err.message})  
    }
    
})

//Updaitng One
router.patch('/:id',getSubscriber,async(req,res)=>{
    if(req.body.name!=null){
       res.subscriber.name=req.body.name 
    }
    if(req.body.Rool_NO!=null){
        res.subscriber.Rool_NO=req.body.Rool_NO 
     }

     try{
        const updatedSubscriver=await res.subscriber.save()
        res.json(updatedSubscriver)
    }catch(err){
        res.status(400).json({message:err.message})  
    }
})


//Deleting One
router.delete('/:id',getSubscriber,async(req,res)=>{

    try{
        await res.subscriber.remove()
        res.json({message:'Deleted Success'})
    }catch(err){
        res.status(500).json({message:err.message})
    }

})

async function getSubscriber(req,res,next){
    let subscriber;
    try{
        subscriber=await Subscriber.findById(req.params.id)
        if(subscriber==null){
            return res.status(404).json({message:'Cannot Find'})
        }
    }catch(err){
        res.status(500).json({message:err.message})  
    }

    res.subscriber=subscriber;
    next()
}

module.exports=router