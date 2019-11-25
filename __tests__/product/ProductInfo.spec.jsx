import React from 'react';
import { shallow } from 'enzyme';
import { ProductInfo } from '../../src/product/ProductInfo';

describe('ProductInfo rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ProductInfo/>);
        expect(component).toMatchSnapshot();
    });
});
