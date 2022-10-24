import Restaurant from "../api/models/Restaurant.js";
import connect from "./database.js";

connect()

//Enlistar restaurantes que hayan tenido un score mayor o = a 90
async function run(){
    const restaurants=await Restaurant.find({
        'grades.score':{
            $gte:90
        }
    })
    console.log(restaurants)
}
run()