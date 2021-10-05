

const db = require("../mongo");
const axios = require("axios")
const { Puppeteer } = require("puppeteer");
const { parse } = require("node-html-parser")



const PostService = {
    async findPosts(req, res) {
        try {
            const data=await db.posts_flipkart.find().toArray();
            res.send(data)


        }
        catch (error) {
            res.sendStatus(500)
        }
    },
    async insertPosts(req, res) {
        try {
            const page = await axios.get("https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_1_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_1_0_na_na_na&as-pos=1&as-type=TRENDING&suggestionId=mobiles&requestId=f2a5dc8a-f746-4433-9bec-ab8bbf11b04c");
            const data = page.data;
            const dom = parse(data)
            const image = dom.querySelector("._396cs4 ")
            const name = dom.querySelector("._4rR01T")
            const star_rating = dom.querySelector("._3LWZlK")
            
            const review = dom.querySelector("._2_R_DZ")
            const detail = dom.querySelector(".fMghEO")
            const price = dom.querySelector("._25b18c")
            console.log("calling post method")
            await db.posts_flipkart.insertOne({...req.body,name:name.text,star_rating:star_rating.text,
            review:review.text,price:price.text,detail:detail.text,})
            

        }
        catch (error) {
            console.log("Error", error)
            res.sendStatus(500)
        }
    }


}
module.exports = PostService;