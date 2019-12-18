import express from 'express';
import connectDB from './config/db';

// ROUTES
import Login from './routes/auth/Login';


const app = express();

// DATABASE CONNECTION
connectDB();

// INIT MIDDLEWARE BODY PARSER
app.use(
    express.json()
);

const PORT: any = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Started at port ${PORT}`)
})

// ROUTES

// GET
app.use(Login);