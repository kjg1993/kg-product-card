import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle } from '../../../react-app/src/02-components-patterns/components/ProductTitle';

describe('ProductTitle', () => {
    test('Debe mostrar el componente con el titulo personalizado', () => {
        const tree = renderer.create(
            <ProductTitle title='Custom Product' />
        ).toJSON();

        console.log(tree);
        expect(tree).toMatchSnapshot();
    });
});
