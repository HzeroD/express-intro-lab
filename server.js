

import express from 'express'
import * as studentDB from './data/student-db.js'

const app = express()

app.set('view engine','ejs')

app.get('/', function(req,res) {
    res.render('home')
})

app.get('/students', function(req,res){
    studentDB.find({},function(error,students){
        res.render('students/index', {
            students: students,
            error: error
        })
    })
})

app.listen(3000,function(){
    console.log('Listening at port 3000')
})






