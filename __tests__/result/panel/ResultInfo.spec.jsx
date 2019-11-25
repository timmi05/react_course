import React from 'react';
import { shallow } from 'enzyme';
import { ResultInfo } from '../../../src/result/panel/ResultInfo';

describe('ResultInfo rendering', () => {
    it('renders if productSelected is true', () => {
        const component = shallow(<ResultInfo
        data = { [] }
        productSelected = { true }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data empty', () => {
        const component = shallow(<ResultInfo
            data = { [] }
            productSelected = { false }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data empty, genre not empty', () => {
        const component = shallow(<ResultInfo
            data = { [] }
            productSelected = { false }
            genre = { 'genre' }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data not empty', () => {
        const data = [
            {object: 'object'}
        ];
        const component = shallow(<ResultInfo
            data = { data }
            productSelected = { false }
        />);
        expect(component).toMatchSnapshot();
    });
});
