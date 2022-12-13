import { render, screen } from "@testing-library/react";

import GifItem from "../../src/components/GifItem";

describe('Pruebas en <GifItem>', () => {

    const title = 'titulo';
    const url = 'https://gifurl.com/';


    test('Snapshot debe coincidir', () => {
        
        const container = render( <GifItem 
            url={url}
            title={title}
            /> 
        );

        expect( container ).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        
        render( <GifItem url={url} title={title}/> );

        const { src, alt } = screen.getByRole( 'img' );
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        
        render( <GifItem url={url} title={title}/> );

        expect(screen.getByText(title)).toBeTruthy();
    })
})