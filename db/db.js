export let movies = [
    {
        id: 0,
        name: "sean",
        age: 29,
        gender: "Male",
        score: 0.1
    },
    {
        id: 1,
        name: "Rebekah",
        age: 27,
        gender: "Female",
        score: 0.3
    },
    {
        id: 2,
        name: "Nam",
        age: 19,
        gender: "Male",
        score: 0.4
    },
    {
        id: 3,
        name: "Eun",
        age: 29,
        gender: "Female",
        score: 0.2
    },
    {
        id: 4,
        name: "Jin",
        age: 26,
        gender: "Tae",
        score: 0.6
    },
    {
        id: 5,
        name: "Gi",
        age: 30,
        gender: "Male",
        score: 0.9
    },
    {
        id: 6,
        name: "Tae",
        age: 31,
        gender: "Male",
        score: 1.2
    },
    {
        id: 7,
        name: "Ho",
        age: 66,
        gender: "Male",
        score: 2.5
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
}   

export const deleteMovie = id => {
    const cleanMovies = movies.filter(movie => movie.id != id)
    if(movies.length > cleanMovies.length){ // 현재 movie의 배열의 길이가 clenaMovie 배열의 길이보다 길다면
        movies = cleanMovies; // movie를 cleanMovies로 지정한다.
        return true;
    } else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${ movies.length + 1 }`, // 자동으로 이 길이에 + 1을 한 값이 Id가 된다.
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};