import axios from 'axios';

const resources = axios.create({
    baseURL: 'https://swapi.dev/api',
    headers: {
        accept: 'application/json',
    }
});

const getResources = async () => {

    const personasPromise = resources.get('/people/');
    const planetasPromise = resources.get('/planets/');
    const navesPromise = resources.get('/starships/');

    const response = await Promise.all([
        personasPromise,
        planetasPromise,
        navesPromise,
    ]);

    return response
};

export default getResources;