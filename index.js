const {MongoClient} = require("mongodb")

const client = new MongoClient('mongodb+srv://qwerty:qwerty123qc')

const start = async () => {
try {

    await client.connect();

    await client.db().createCollection("users");

    const users = client.db().collection(`users`)

    await users.insertOne({name: "Ronaldo", age:37})
    
    console.log("Database Connected")
    
} catch (error) {
    console.log(error);
}}