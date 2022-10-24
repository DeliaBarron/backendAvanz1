import Restaurant from "../api/models/Restaurant.js";
import connect from "./database.js";

connect()
//Los siguientes 5 restaurantes de la ciudad Bronx
async function run(){
    const restaurants=await Restaurant.find({
        borough:'Bronx'
    }).limit(5)
    .skip(5)
    console.log(restaurants)
}
run()