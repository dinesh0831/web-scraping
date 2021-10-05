const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017"
const db_name="hackathon"

const client = new MongoClient(uri);
module.exports={
    db:null,
    posts_flipkart:null,
    posts_amazon:null,
    async connect(){
        await client.connect();
        this.db=client.db(db_name)
        this.posts_flipkart=this.db.collection("posts_flipkart")
        this.posts_amazon=this.db.collection("posts_amazon")
    }
}