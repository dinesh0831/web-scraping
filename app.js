const axios=require("axios")
const { Puppeteer } = require("puppeteer");
const {parse}=require("node-html-parser")
async function data (){
    const page=await axios.get("https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_1_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_1_0_na_na_na&as-pos=1&as-type=TRENDING&suggestionId=mobiles&requestId=f2a5dc8a-f746-4433-9bec-ab8bbf11b04c");
    const data= page.data;
    
    const dom=parse(data)
    
    
    
    const div=dom.querySelector("_396cs4 ")
    
    
        
    const name=dom.querySelector("._4rR01T")
    const star_rating=dom.querySelector("._3LWZlK")
    const image_star=dom.querySelector("._1wB99o")
    const review=dom.querySelector("._2_R_DZ")
    const detail=dom.querySelector(".fMghEO")
    const price=dom.querySelector("._25b18c")
    console.log(image_star.getAttribute("src"));
    console.log(review.text);
    console.log(detail.text);
    console.log(price.text);
    
    console.log(star_rating.text)
    console.log(name.text)

    console.log(div.getAttribute("src"))
        

    
}
module.exports=data()