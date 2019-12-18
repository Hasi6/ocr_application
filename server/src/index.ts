import express, {Response, Request} from 'express';

const app = express();

const PORT: any = process.env.PORT || 5000;

console.log(process.env);

app.listen(PORT, ()=> {
    console.log(`App Started at port ${PORT}`)
})