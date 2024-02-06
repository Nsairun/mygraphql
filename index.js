import { ApolloServer } from "@apollo/server"; //server that handles the various requests
import {startStandaloneServer} from "@apollo/server/standalone";// where our data will run or start

// server setup

const server = new ApolloServer({
//typedefs
//resolvers
})

const {url} = await startStandaloneServer(server, {listen: {port:4000}})

console.log('server ready to run at port', 4000)