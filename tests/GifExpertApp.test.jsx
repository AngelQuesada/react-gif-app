import { render, screen } from "@testing-library/react";

import GifExpertApp from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp>', () => {

    test('El título se muestra ', () => {
        
        render( <GifExpertApp /> );

        expect( screen.getByText('Cheese Gif App') ).toMatchSnapshot();
    })

    test('El Snapshot debe coincidir ', () => {
        
        const container = render( <GifExpertApp /> );

        expect( container ).toMatchSnapshot();
    })
    
})