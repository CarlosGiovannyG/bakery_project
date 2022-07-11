import lodash from 'lodash'
import productsResolvers from './products'
import usersResolvers from './users'

const resolvers = lodash.merge(
productsResolvers,
usersResolvers
)

export default resolvers