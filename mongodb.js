import { MongoClient,ObjectId } from 'mongodb'

import { uri } from "./credentials.js"

const client = new MongoClient(uri)//how to connect to database server 
//proves that we're in the database
const db = client.db('sample_mflix')
const moviesCollection = db.collection('movies')


//console.log (await  moviesCollection.findOne({}))
// let query = {title:{$regex: /legion/i}}//sonjer sa oui l'ami! itsearches for "terminator anywhere in the title and ignores case "
// let movieArray = await  moviesCollection
// .find(query)
// //.limit(3)
// .toArray()//That's an array

// for (let i=0; i < movieArray.length; i++){
//    console.log( movieArray[i].title)
// }
// // console.log(movieArray[0])
// // console.log
// console.log(`there are ${movieArray.length} movies.`)

// add a new movie 
const newMovie = {
    title: "The Boca Code story",
    rating: "R",
    genre: "Comedy",
    releasedDate: "2022/12/16"
}

// const results = await moviesCollection.insertOne(newMovie)//this tells it to wait until new  movie is inserted inside the moviesCollection database
// console.log("Results of insert", results)//This console.log the variable results
const updatequery = { _id: new ObjectId("6345ca6e73a974f50e3bca60") }
const update = {$set: {title:"The New Boca Code Story"}}
const results = await moviesCollection.findOneAndUpdate(updatequery,update);
console.log(results)




