import { ApolloServer } from "@apollo/server"; //server that handles the various requests
import { startStandaloneServer } from "@apollo/server/standalone"; // where our data will run or start
// import schema to use type in the server
import { typeDefs } from "./schema.js";

// import types
import db from "./_db.js";

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Game: {
    reviews(parent) {
      returndb.reviews.filter((r) => r.game_id === parent.id);
    },
  },
  Author: {
    reviews(parent) {
      returndb.reviews.filter((r) => r.author_id === parent.id);
    },
  },
  Review: {
    games(parent) {
      returndb.games.find((g) => g.id === parent.id);
    },
    authors(parent) {
      returndb.authors.find((a) => a.id === parent.id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id)
      return db.games
    },
    addGame(_, args){ 
        let game = {
            ...args.game,
            id: Math.floor(Math.random() *10000).toString()
        }
        db.games.push(game)
        return game
    }
  },

};

// server setup

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log("server ready to run at port", 4000);
