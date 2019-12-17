import React from 'react';
import {shallow} from 'enzyme';
import {ResultItem} from '../../../src/result/body/ResultItem';

describe('ResultItem rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ResultItem/>);
        expect(component).toMatchSnapshot();
    });

    it('simulate click on image', () => {
        const openMovie = jest.fn();
        const component = shallow(<ResultItem
            openMovie={openMovie}
        />);
        component.find('img').simulate('click');
        expect(openMovie).toHaveBeenCalledTimes(1);
    });
});
