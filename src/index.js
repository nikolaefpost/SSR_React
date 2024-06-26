import 'babel-polyfill'
import express from "express";
import renderer from "./helpers/renderer";
import {matchRoutes} from "react-router-config";
import Routes from "./client/Routes";
import createStore from "./helpers/createStore"


const app = express();
app.use(express.static('public'))

app.get("*", (req, res) => {
    const store = createStore(req);
    const promises =  matchRoutes(Routes, req.path).map(({route}) => route.loadData? route.loadData(store): null);

    Promise.all(promises).then(()=>{
        res.send(renderer(req, store));
    })
})

app.listen(3001, () => {
    console.log("listening on  port 3001")
})