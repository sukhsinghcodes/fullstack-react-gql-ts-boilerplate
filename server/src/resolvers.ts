export const resolvers = {
  Query: {
    hello: (_, { name }) => {
      return `Hello ${name || 'World!'}`
    },
  },
}
