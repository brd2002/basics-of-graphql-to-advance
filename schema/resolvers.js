const {UserList  , MovieList} = require('../FakeData');
// this is help me for take data from user input this is a package need to install
const _= require('lodash');
const resolvers = {
    // * in this query we will write the the data we want to fetch

    Query:{
        users(){
            return UserList;
        },
        // in this user we will send thd id of user from query then it will get from args and also find using lodash
        user : (parent , args) =>{
           const id = args.id ; 
           const user = _.find(UserList , {id:Number(id)});
           return user
        },
        movies(){
            return MovieList;
        },
        movie(parent , args){
            const id = args.id; // by default it will be string so you need to convert into number
            const movie = _.find(MovieList , {id : Number(id)});
            return movie
        }
    },
    Mutation:{
        createUser: (parent , args)=>{
            const user = args.input;
            // console.log(user);
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user
        },
        updateUsername: (parent , args)=>{
            const user = args.input;
            const id = user.id;
            const updatedUser = _.find(UserList , {id : Number(id)});
            updatedUser.username = user.username;
            console.log(updatedUser)
            return updatedUser
        }
    }
}
module.exports = {
    resolvers
}