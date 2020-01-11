
var databaseData: Object;
if (process.env.NODE_ENV === 'production') {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:F453RhXHvfKW9xqq@cluster0-hcdmm.azure.mongodb.net/test?retryWrites=true&w=majority",
        googleClientID: "384211523476-o1uhkv13gp9p52hfej6pmhrj1tu93l1e.apps.googleusercontent.com",
        googleClientSecret: "EXokeWOrg744NQiHgRS-PWTp",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
} else {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:F453RhXHvfKW9xqq@cluster0-hcdmm.azure.mongodb.net/test?retryWrites=true&w=majority",
        googleClientID: "384211523476-o1uhkv13gp9p52hfej6pmhrj1tu93l1e.apps.googleusercontent.com",
        googleClientSecret: "EXokeWOrg744NQiHgRS-PWTp",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
}

export default databaseData;