const { error } = require('console')
const express = require('express')
const app = express()
const fs = require('fs')
app.use(express.json())
   //get req
app.get('/todos', function (req, res) {
// Read the JSON file synchronously
const data = fs.readFileSync('todos.json', 'utf-8');
const todos = JSON.parse(data);  // Parse the JSON data

// Send the todos as a response
res.json(todos);
});
app.post('/todos',function(req,res){
    const data = fs.readFileSync('todos.json','utf-8');
    const todos = JSON.parse(data);

    const newTask = {
        id:todos.length + 1,
        task:req.body.taskDesc,
        completed:req.body.taskStatus
    }
    todos.push(newTask)
    fs.writeFile('todos.json',JSON.stringify(todos, null, 2),function(){
        res.json({
            msg:"task added successfully"
        })
    })
   
})
app.put('/todos',function(req,res){
    const data = fs.readFileSync('todos.json','utf-8');
    const todos = JSON.parse(data);
    const todoID = req.body.id;

    todos.forEach(todo => {
        // desc update
        if (todo.id == todoID) {
            // Update the task description if provided
            if (typeof req.body.taskDesc !== 'undefined') {
                todo.task = req.body.taskDesc;
            }

            // Update the task status if provided
            if (typeof req.body.taskStatus !== 'undefined') {
                todo.completed = req.body.taskStatus;
            }
        }
    });
    
    fs.writeFile('todos.json',JSON.stringify(todos, null, 2),function(){
        res.json({
            msg:"task updated successfully"
        })
    })
   
})

app.delete('/todos',function(req,res){
    const data = fs.readFileSync('todos.json','utf-8');
    let todos = JSON.parse(data);
    const taskID = req.body.id;
    todos = todos.filter((task)=> task.id != taskID)
    for(let i = 0;i<todos.length;i++){
        todos[i].id = i+1;
    }
    fs.writeFile('todos.json',JSON.stringify(todos, null, 2),function(){
        res.json({
            msg:"task deleted successfully"
        })
    })
   
})


app.listen(3000)