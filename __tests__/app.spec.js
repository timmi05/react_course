import React from 'react';
import {shallow} from 'enzyme'
import {App} from "../src/App";

describe('App rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<App/>);
        expect(component).toMatchSnapshot();
    });
});
