import Restaurant from "../api/models/Restaurant.js";
import connect from "./database.js";

connect()
//todos los restaurantes que no sean de cuisine:'American ' (con todo y el espacio porque asi esta escrito es un type-o)
//y que tengan una calificación mayor a 70
async function run(){
    const restaurants=await Restaurant.find({
       cuisine:{
        $ne:'American '
       },
       'grades.score':{
        $gt:70
    }
    })
    console.log(restaurants)
}
run()