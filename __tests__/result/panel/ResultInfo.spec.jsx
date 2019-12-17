import React from 'react';
import {shallow} from 'enzyme';
import {ResultInfo} from '../../../src/result/panel/ResultInfo';

describe('ResultInfo rendering', () => {
    it('renders if productSelected is true', () => {
        const component = shallow(<ResultInfo
            data={[]}
            isProductSelected={true}
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data empty', () => {
        const component = shallow(<ResultInfo
            data={[]}
            isProductSelected={false}
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data empty, genre not empty', () => {
        const component = shallow(<ResultInfo
            length={0}
            isProductSelected={false}
            genre={'genre'}
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is false, data not empty', () => {
        const component = shallow(<ResultInfo
            length={1}
            isProductSelected={false}
        />);
        expect(component).toMatchSnapshot();
    });
});
