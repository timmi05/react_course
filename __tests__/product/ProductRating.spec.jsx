import React from 'react';
import {shallow} from 'enzyme';
import {ProductRating} from '../../src/product/ProductRating';

describe('ProductRating rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ProductRating/>);
        expect(component).toMatchSnapshot();
    });
});