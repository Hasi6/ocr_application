import express from 'express';
import connectDB from './config/db';
import cookieSession from 'cookie-session';

// MODELS
import './models/Users';
import './models/Images';

// ROUTES
import LoginRoute from './routes/auth/LoginRoute';
import RegisterRoute from './routes/auth/RegisterRoute';
import CheckAuthState from './routes/auth/AuthRoutes';
import AddImage from './routes/tesseract/addImage';
import cors from 'cors';





import databaseData from './config/default';
import passport from 'passport';

import passportService from './services/passport/passport';

const app = express();
const { cookieSecret }: any = databaseData;

// INIT MIDDLEWARE BODY PARSER
app.use(
    express.json()
);

// start Session
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [cookieSecret]
    })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


// passport
passportService(passport);


// DATABASE CONNECTION
connectDB();



app.use(express.static("public"));


const PORT: any = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App Started at port ${PORT}`)
})

// ROUTES

// GET
app.use(LoginRoute);
app.use(RegisterRoute);
app.use(CheckAuthState);

// POST
app.use(AddImage)