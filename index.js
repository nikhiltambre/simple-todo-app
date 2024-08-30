//     //callbacks
// const fs = require('fs');
// function fileReading(path){
//   return new Promise((resolve,reject)=> {
//     fs.readFile(path,'utf-8',(err,data)=> {
//       if(err){
//         reject(err)
//       }
//       else{
//         resolve(data)
//       }
//     })
//   })
// }
// function ok(data){
//   console.log(data);
// }
// function notOk(err){
//   console.error(err);
// }
// fileReading('t2.txt').then(ok).catch(notOk)
// fileReading('t1.txt').then(ok).catch(notOk)

// class Car{
//   constructor(brand){
//     this.carName = brand
//   }
//   present(){
//     return `I have a ${this.carName} `
//   }
// }
// class Model extends Car{
//   constructor(brand,model){
//     super(brand)
//     this.model = model
//   }
//   show(){
//     console.log(`${this.present()} of model ${this.model}`)
//   }
// }
// const mc = new Model("ferrari","mustang");
// mc.show();
// getter setters
// class Cars{
//   constructor(brand){
//     this._carName = brand
//   }
//   get carname(){
//     return this._carName
//   }
//   set carname(x){
//     this._carName = x
//   }
// }
// const myCars = new Cars("ferrari")
// myCars.carname = "gtr"
// console.log(myCars.carname)

// const user = new Map()
// user.set('name','nikhil')
// user.set('age',20)
// console.log(user.get('name'))
// console.log(user)
// console.log(user.size)
// let val  = {
//   name:"akhil"
// }
// console.log(Object.keys(val).length)
// function rand(resolve){
//  setTimeout(resolve,4000)
// }
// let p = new Promise(rand);
// p.then(()=>{console.log("sdf")})
// console.log(p)
// setTimeout(()=>{console.log(p)},7000)
// const arr = ['one','two']
// const str ='hello'
// const ans = str.includes('ll')
// console.log(ans)
// class cars{
//     constructor(brand){
//         this.c_name = brand
//     }
//     get cname(){
//         return this.c_name
//     }
//     set cname(x){
//         this.c_name = x
//     }
// }

// const myCAR = new cars("buggati")
// myCAR.cname = "mmmm"
// console.log(myCAR.cname)
// function random(resolve){
//     resolve()
// }
// let p = new Promise(random)
// console.log(p)
    //using path lib/package
// const path  = require('path')
// console.log("printing path")
// console.log(__dirname)
// console.log("printing new path")
// console.log(path.join(__dirname,"../../index.js"))
   //making command
// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of words in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf-8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const trimmed = data.trim()
//         const lines = trimmed.split(' ').length;
//         console.log(`There are ${lines} words in ${file}`);
//       }
//     });
//   });

// program.parse();
function sumofVar(n,m){
  return n+m;
}
const express = require('express')
const app = express()
app.use(express.json())
const user = [
  {
    name:"john",
    kidneys:[
      {
        healthy:false
      },
      {
        healthy:true
      },
      {
        healthy:false
      }
   ]
  }
]
app.get('/',function(req,res){
  // const johnKidneys = user[0].kidneys;
  // const lengthofKidneys = johnKidneys.length
  // let noOFhealthyKidneys = 0;
  // for(let i = 0;i<lengthofKidneys;i++){
  //   if(johnKidneys[i].healthy){
  //     noOFhealthyKidneys=noOFhealthyKidneys+1;
  //   }
  // }
  const johnKidneys = user[0].kidneys
  const initiallen = johnKidneys.length

  const healthy = johnKidneys.filter((kidney) =>
    kidney.healthy === true
  )
  const healthylen = healthy.length
  const noOFunhealthyKidneys = initiallen-healthylen;
  res.json({
    initiallen,
    healthylen,
    noOFunhealthyKidneys
  })

})
app.post('/',function(req,res){
  const isHealthy = req.body.isHealthy;
   user[0].kidneys.push(
     {
      healthy:isHealthy
     }
   )
   res.json({
    msg:"successfully posted"
   })
})
app.put('/',function(req,res){
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.filter((kidney)=> kidney.healthy = isHealthy)
  res.json({
    msg:`successfully replaced with ${isHealthy?"healthy":"unhealthy"}  kidneys`
  })
})
app.delete('/',function(req,res){
  const isHealthy = req.body.isHealthy;
  user[0].kidneys = user[0].kidneys.filter((kidney)=> kidney.healthy !== isHealthy)
  res.json({
    msg:`successfully replaced with ${isHealthy?"healthy":"unhealthy"}  kidneys`
  })
})
app.listen(3000)