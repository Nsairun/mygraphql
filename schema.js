// where will define all the different types of data
export const typedefs =`#graphql 
type Game {
 id: ID!
 title: String!
 platform: String!
}

type Review {
    id: ID!
    rating: Int!
    content: string!
}
type Author {
    id: ID!
    name: string!
    verified: Boolean!
}
type Query {
    reviews: [Review]
    games: [Game]
    authors:[Author]
}
`