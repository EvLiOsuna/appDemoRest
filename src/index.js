import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import {ENVIRONMENT} from './ENV';

const app = express();

app.listen(ENVIRONMENT.SERVER_PORT, async () => {
    try{
        console.log("¡Conectado a Express!");
        mongoose.connect(ENVIRONMENT.BD_URL_CONNECTION.DEVELOPING, {useNewUrlParser: true})
        .then(() => {
            console.log('Conectado a MongoDB!');
            app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
                res.status(200);
                res.send('Hola mundo! :D ');
                res.end();
            });

        }).catch(err => {
            app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
                res.status(500);
                res.send('error', { error: err});
                res.end();
            });
        })
    }
    catch (err) {
        app.get(ENVIRONMENT.ROUTES_MAIN_MODULES.INDEX, (req, res) => {
            res.status(500);
            res.send('error',{error: err});
            res.end();
        });
    }
});