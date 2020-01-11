
var databaseData: Object;
if (process.env.NODE_ENV === 'production') {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:F453RhXHvfKW9xqq@cluster0-hcdmm.azure.mongodb.net/test?retryWrites=true&w=majority",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
} else {
    databaseData = {
        mongoURI: "mongodb+srv://Hasitha:F453RhXHvfKW9xqq@cluster0-hcdmm.azure.mongodb.net/test?retryWrites=true&w=majority",
        cookieSecret: "mysecret",
        emailPassword: "freedom6@"
    }
}

export default databaseData;