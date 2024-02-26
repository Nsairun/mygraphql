// where we define all the different types of data
export const typeDefs = `#graphql 
type Game {
  id: ID!
  title: String!
  platform: [String!]!
  reviews: [Review!]
}
type Review {
  id: ID!
  rating: Int!
  content: String!
  games: Game!
  authors: [Author!]
}
type Author {
  id: ID!
  name: String!
  verified: Boolean!
  reviews: [Review!]
}
type Query {
  reviews: [Review]
  review(id:ID): Review
  games: [Game]
  game(id:ID): Game
  authors: [Author]
  author(id: ID): Author
}
type Mutation {
  deleteGame(id:ID!): [Game]
  addGame(game: AddGameInput!): Game
}
input AddGameInput {
  title: String!,
  platform: [String!]!
}
`