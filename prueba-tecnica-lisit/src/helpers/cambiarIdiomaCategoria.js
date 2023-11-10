export const cambiarIdiomaCategoria = (categoria) => {
    const category = {
        planetas: "planets",
        naves: "starships",
        personas: "people",
    }

    return category[categoria]
}