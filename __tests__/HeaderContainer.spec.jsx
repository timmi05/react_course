import React from 'react';
import { shallow } from 'enzyme'
import { HeaderContainer } from "../src/HeaderContainer";

describe('HeaderContainer rendering', () => {
    it('renders correctly', ()=> {
        const component = shallow(<HeaderContainer
        productSelected = { true }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly', ()=> {
        const component = shallow(<HeaderContainer
        productSelected = { false }
        />);
        expect(component).toMatchSnapshot();
    });
});
