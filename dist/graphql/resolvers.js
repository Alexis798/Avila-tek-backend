import { books } from "../models/books.js";
import Usuario from "../models/usuario.js";
export const resolvers = {
    Query: {
        user: async (_, { email, password }) => {
            return await Usuario.findOne({ email: email, password: password });
        },
        users: async () => {
            return await Usuario.find();
        }
    },
    Mutation: {
        createUser: async (_, { name, lastName, email, password }) => {
            const user = new Usuario({
                name,
                lastName,
                email,
                password
            });
            const saveUser = await user.save();
            return saveUser;
        }
    }
};
