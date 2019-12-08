import React from 'react';
import {shallow} from 'enzyme';
import {ResultPanel} from '../../../src/result/panel/ResultPanel';

describe('ResultPanel rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ResultPanel/>);
        expect(component).toMatchSnapshot();
    });
});
