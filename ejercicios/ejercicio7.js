import Restaurant from "../api/models/Restaurant.js"
import connect from "./database.js"
connect()
//encontrar el _id, nombre, ciudad de los restaurantes de 'Bronx Brooklyn' O de 'Staten Island'

async function run(){
    const restaurants= await Restaurant.find(
    {
        $or:[
            {
                borough:'Staten Island'
            },
            {
                borough:'Bronx Brooklyn'
            }
        ]
    },
    {_id:1, name:1, borough:1}
    )
    console.log(restaurants)
}
run()