import React from 'react';
import { shallow } from 'enzyme'
import { AppContainer } from "../src/AppContainer";

describe('AppContainer rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<AppContainer/>);
        expect(component).toMatchSnapshot();
    });
});
