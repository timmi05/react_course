import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../src/component/Button';

describe('Button rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<Button/>);
        expect(component).toMatchSnapshot();
    });
});
