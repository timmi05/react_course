import React from 'react';
import { shallow } from 'enzyme'
import { AppContainer } from "../src/AppContainer";

describe('AppContainer rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<AppContainer/>);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly', () => {
        const component = shallow(<AppContainer
        productSelected = { true }
        genre = 'genre'
        data = { [] }
        />);
        expect(component).toMatchSnapshot();
    });
});
