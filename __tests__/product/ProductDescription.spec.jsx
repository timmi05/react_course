import React from 'react';
import { shallow } from 'enzyme';
import { ProductDescription } from '../../src/product/ProductDescription';

describe('ProductDescription rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ProductDescription/>);
        expect(component).toMatchSnapshot();
    });
});