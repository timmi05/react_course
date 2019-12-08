import React from 'react';
import {shallow} from 'enzyme';
import {EmptyBody} from '../../../src/result/body/EmptyBody';

describe('EmptyBody rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<EmptyBody/>);
        expect(component).toMatchSnapshot();
    });
});
