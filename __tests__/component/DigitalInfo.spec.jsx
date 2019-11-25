import React from 'react';
import { shallow } from 'enzyme';
import { DigitalInfo } from '../../src/component/DigitalInfo';

describe('DigitalInfo rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<DigitalInfo/>);
        expect(component).toMatchSnapshot();
    });
});
