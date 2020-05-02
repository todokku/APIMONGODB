'use strict'
let mongoose=require("mongoose");
let app=require('./app');

//importando las variables de entorno locales
require('dotenv').config({path:'variables.env'});

mongoose.Promise=global.Promise;
//el puerto 27017 es el que ocupa por default mongodb, pero ya en heroku el nos proporcionara
//la conexion a la db
mongoose.connect(process.env.URL_DBCONECCTION,{useNewUrlParser:true,useUnifiedTopology:true})
    .then((result) => {
     console.log("mongodb is connected");  
     //creacion del servidor
     let host=process.env.HOST || '0.0.0.0';
     let port=process.env.PORT || 3700;
     app.listen(port,host,()=>{
         console.log("server success");
     });
    }).catch((err) => {
        console.log("Error: "+err);
    });