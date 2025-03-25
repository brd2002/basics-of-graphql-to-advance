const {UserList } = require('../FakeData');
const resolvers = {
    // * in this query we will write the the data we want to fetch

    Query:{
        users(){
            return UserList;
        }
    }
}
module.exports = {
    resolvers
}