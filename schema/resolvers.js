const {UserList } = require('../FakeData');
const _= require('lodash');
const resolvers = {
    // * in this query we will write the the data we want to fetch

    Query:{
        users(){
            return UserList;
        },
        user : (parent , args) =>{
           const id = args.id ; 
           const user = _.find(UserList , {id:Number(id)});
           return user
        }
    }
}
module.exports = {
    resolvers
}