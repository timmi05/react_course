import React from 'react';
import {shallow} from 'enzyme'
import HeaderContainer from "../src/HeaderContainer";
import {createStore} from 'redux';
import {reducer} from '../src/store/reducers/raducer.js';

describe('HeaderContainer rendering', () => {
    const store = createStore(reducer);

    it('renders if product is not selected', () => {
        const component = shallow(<HeaderContainer
            store={store}
        />);
        expect(component).toMatchSnapshot();
    });
});
