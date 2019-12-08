import React from 'react';
import {shallow} from 'enzyme';
import {Product} from '../../src/product/Product';

describe('Product rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<Product
            movie={[]}
        />);
        expect(component).toMatchSnapshot();
    });
});
