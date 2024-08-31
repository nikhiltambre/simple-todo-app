const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
   //get req
app.get('/todos',function(req,res){
    
    res.json(
        {
           
        }
    )
})
app.post()