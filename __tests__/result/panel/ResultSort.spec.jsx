import React from 'react';
import {mount, shallow} from 'enzyme';
import ResultSort from '../../../src/result/panel/ResultSort';
import {createStore} from 'redux';
import {reducer} from '../../../src/store/reducers/raducer.js';
import "babel-polyfill"

describe('ResultSort rendering', () => {
    const store = createStore(reducer);

    it('simulate click on button by RELEASE DATE', () => {
        const component = mount(<ResultSort
            store={store}/>);
        component.find({label: 'RELEASE DATE'}).simulate('click');
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button by RATING', () => {
        const component = mount(<ResultSort
            store={store}
        />);
        component.find({label: 'RELEASE DATE'}).simulate('click');
        component.find({label: 'RATING'}).simulate('click');
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is true', async () => {
        store.dispatch({
            type: 'MOVIE_SELECTED',
            payload: {}
        });
        const component = shallow(<ResultSort
            store={store}
        />);
        expect(component).toMatchSnapshot();
    });
});
