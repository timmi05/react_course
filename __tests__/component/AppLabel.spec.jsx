import React from 'react';
import { shallow } from 'enzyme';
import { AppLabel } from '../../src/component/AppLabel';

describe('AppLabel rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<AppLabel/>);
        expect(component).toMatchSnapshot();
    });
});
