
var databaseData: Object;
if (process.env.NODE_ENV === 'production') {
    databaseData = {
        mongoURI: "mongodb+srv://hasitha:Freedom6@cluster0-zcrw6.gcp.mongodb.net/test?retryWrites=true&w=majority",
        googleClientID: "384211523476-o1uhkv13gp9p52hfej6pmhrj1tu93l1e.apps.googleusercontent.com",
        googleClientSecret: "EXokeWOrg744NQiHgRS-PWTp",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
} else {
    databaseData = {
        mongoURI: "mongodb+srv://hasitha:Freedom6@cluster0-zcrw6.gcp.mongodb.net/test?retryWrites=true&w=majority",
        googleClientID: "384211523476-o1uhkv13gp9p52hfej6pmhrj1tu93l1e.apps.googleusercontent.com",
        googleClientSecret: "EXokeWOrg744NQiHgRS-PWTp",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
}

export default databaseData;
// mongodb://localhost:27017/stack-over-flow
// mongodb+srv://hasitha:Freedom6@cluster0-zcrw6.gcp.mongodb.net/test?retryWrites=true&w=majority