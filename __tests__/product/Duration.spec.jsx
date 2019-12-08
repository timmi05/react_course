import React from 'react';
import {shallow} from 'enzyme';
import {Duration} from '../../src/product/Duration';

describe('Product rendering', () => {
    it('renders empty', () => {
        const component = shallow(<Duration
            runtime={0}
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const component = shallow(<Duration
            runtime={1}
        />);
        expect(component).toMatchSnapshot();
    });
});
