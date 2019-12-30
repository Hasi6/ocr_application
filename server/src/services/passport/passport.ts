import passport from "passport";
import Strategy from "passport-local";

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const LocalStrategy = Strategy.Strategy


// get user model
const User = mongoose.model("users");

// serialize user
passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

// deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

export default function (passport: any) {
  // Passport
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email"
      },
      (email, password, done) => {
        User.findOne({ email }).then((user: any) => {
          if (!user) {
            return done(null, false);
          }
          //Match Password
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          });
        });
      }
    )
  );
};
