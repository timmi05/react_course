import React from 'react';
import {mount} from 'enzyme';
import SearchPanel from '../../src/search/SearchPanel';
import {createStore} from 'redux';
import {reducer} from '../../src/store/reducers/raducer.js';

describe('SearchPanel rendering', () => {
    const store = createStore(reducer);
    const component = mount(<SearchPanel
        store={store}
    />);
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('simulate change of input', () => {
        component.find('input').simulate('change');
        expect(component).toMatchSnapshot();
    });

    it('simulate click of search button', () => {
        component.find({label: 'SEARCH'}).simulate('click');
        expect(component).toMatchSnapshot();
    });

    it('simulate click of genre button', () => {
        component.find({label: 'GENRE'}).simulate('click');
        expect(component).toMatchSnapshot();
    });

    it('simulate click of title button', () => {
        component.find({label: 'TITLE'}).simulate('click');
        expect(component).toMatchSnapshot();
    });
});
