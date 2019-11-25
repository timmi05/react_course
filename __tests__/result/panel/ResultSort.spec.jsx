import React from 'react';
import { shallow, mount } from 'enzyme';
import { ResultSort } from '../../../src/result/panel/ResultSort';

describe('ResultPanel rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ResultSort/>);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is true', () => {
        const component = shallow(<ResultSort
        productSelected = { true }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders if productSelected is true', () => {
        const component = shallow(<ResultSort
        productSelected = { false }
        />);
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button by RELEASE DATE', () => {
        const component = mount(<ResultSort/>);
        component.find({label: 'RELEASE DATE'}).simulate('click');
        expect(component.find({className:'button result-sort-button result-sort-left-button'})
            .prop('disabled')).toBe(true);
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button by RATING', () => {
        const component = mount(<ResultSort/>);
        component.find({label: 'RELEASE DATE'}).simulate('click');
        component.find({label: 'RATING'}).simulate('click');
        expect(component.find({className:'button result-sort-button result-sort-right-button'})
            .prop('disabled')).toBe(true);
        expect(component).toMatchSnapshot();
    });
});
