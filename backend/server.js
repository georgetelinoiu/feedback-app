import express, { json } from "express";
import router from './router.js';
import {syncDB} from './model.js';


const PORT = 8080;
express()
    .use(json())
    .use('/api', router)
    .listen(8080, async () =>{
        try{
            await syncDB();
        }
        catch(err){
            console.log(err);
        }
    });