//Resolver(해결)이란 query를 해결하는것이다. query는 database에게 문제와 같은것이다.
//그래서 우리는 이 query를 어떤 방식으로든 resolve(해결) 해야 한다.(query를 위한 해결!)
import { getMovies, getById, addMovie, deleteMovie } from '../db/db';

const resolvers = {
    Query : {
        movies: () => getMovies(),
        movie: ( _, { id }) => getById(id)
    },
    Mutation: {
        addMovie: ( _, { name, score } ) => addMovie(name, score),
        deleteMovie: ( _, { id }) => deleteMovie(id)
    }
};

export default resolvers;