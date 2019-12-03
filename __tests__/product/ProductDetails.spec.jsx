import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetails } from '../../src/product/ProductDetails';

describe('ProductDetails rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ProductDetails/>);
        expect(component).toMatchSnapshot();
    });
});
