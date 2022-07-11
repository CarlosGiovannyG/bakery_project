import {gql} from 'apollo-server-micro'


const usersTypes = gql`
type User{
  name:String
}


type Query{
  oneUser:User
}

`

export default usersTypes