//Resolver(해결)이란 query를 해결하는것이다. query는 database에게 문제와 같은것이다.
//그래서 우리는 이 query를 어떤 방식으로든 resolve(해결) 해야 한다.(query를 위한 해결!)
import { getMovies } from '../db/db';

const resolvers = {
    Query : {
        movies: (_, {limit, rating}) => getMovies(limit, rating) // '_'는 그냥 variable 이름이다.
    }
    
};

export default resolvers;