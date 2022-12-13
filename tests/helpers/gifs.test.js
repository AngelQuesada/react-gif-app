import { getGifs } from "../../src/helpers/gifs";

describe('Pruebas en helpers/gifs.js', () => {

    const category = 'dragon ball';

    test('La función getGifs debe devolver un array de gifs', async () => {
        
        const result = await getGifs(category);

        // Evaluamos si el array tiene algo
        expect( result.length ).toBeGreaterThan(0);

        // Evaluamos si las propiedades de los elementos del aray son correctas
        expect( result[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
})