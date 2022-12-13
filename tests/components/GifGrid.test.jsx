import { fireEvent, render, screen } from "@testing-library/react";

import GifGrid from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid>', () => {

    const category = 'Dragon Ball';

    const gifs = [
        {
            id: 'sait',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: 'gok',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        },
        {
            id: 'narut',
            title: 'Naruto',
            url: 'https://localhost/naruto.jpg'
        }
    ]


    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
      
        render( <GifGrid category={ category }/> );

        expect(screen.getByText('Cargando...')).toBeTruthy();
    })

    test('Debe de mostrar el título del agrupado de gifs', () => {
      
        render( <GifGrid category={ category }/> );

        expect(screen.getByText( category )).toBeTruthy();
    })

    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render( <GifGrid category={ category }/> );

        expect ( screen.getAllByRole('img').length ).toBe( 3 );

    })
    
})