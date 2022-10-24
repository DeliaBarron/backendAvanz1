import Restaurant from "../api/models/Restaurant.js";
import connect from "./database.js";

connect()
//1ros 5 restaurantes de BRONX
async function run(){
    const restaurants= await Restaurant.find({
        borough:'Bronx'
    }).limit(5)
    console.log(restaurants)
}
run()
