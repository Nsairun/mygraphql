import { ApolloServer } from "@apollo/server"; //server that handles the various requests
import {startStandaloneServer} from "@apollo/server/standalone";// where our data will run or start

// import schema to use type in the server
import { typedefs } from "./schema";

// import types
import db from './_db';

const resolvers = {
    Query:{
        games(){
            return db.games
        },
        reviews(){
            return db.games
        },
        authors(){
            return db.authors
        }
    }
}

// server setup

const server = new ApolloServer({
typedefs,
resolvers
})

const {url} = await startStandaloneServer(server, {listen: {port:4000}})

console.log('server ready to run at port', 4000)