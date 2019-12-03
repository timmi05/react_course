import React from 'react';
import { shallow } from 'enzyme';
import { Result } from '../../src/result/Result';

describe('Result rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<Result/>);
        expect(component).toMatchSnapshot();
    });
});
