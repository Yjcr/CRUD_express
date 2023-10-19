//requerimos  express
const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes/index_routes.js')


//config and init---------------------------------
const app =  express ()
app.set('port', process.env.PORT || 9000)

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootpass',
    database: 'library',
}



//middleware------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())


//Routes--------

app.use(routes)
app.use('/api', routes)



//server runing----------------------------
app.listen(app.get('port'), ()=> {
    console.log('Runing in port:', app.get('port'))
})