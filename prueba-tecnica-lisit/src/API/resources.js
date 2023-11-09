import axios from 'axios';

const resources = axios.create({
    baseURL: 'https://swapi.dev/api',
    headers: {
        accept: 'application/json',
    }
});

export const getAllResources = async () => {

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

export const getPersonasPaginadas = async (pagina) => {
    const response = await resources.get(`/people/?page=${pagina}`)
    return response
}
/* export const getPaginas = async (pagina, categoria) => {
    const response = await resources.get(`/${categoria}/?page=${pagina}`)
    return response
} */