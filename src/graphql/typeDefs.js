import gql from "graphql-tag";

export const typeDefs = gql`
    type Query {
        user(email: String!, password: String!): Usuario 
        users: [Usuario]
    }

    type Mutation {
        createUser(name: String, lastName: String, email: String!, password: String!): Usuario
    }

    type Usuario {
        _id: ID
        name: String
        lastName: String
        email: String
        password: String
        created_at: String
        updated_at: String
    }
    
`;