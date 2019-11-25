import React from 'react';
import { mount } from 'enzyme';
import { SearchPanel } from '../../src/search/SearchPanel';

describe('SearchPanel rendering', () => {
    const component = mount(<SearchPanel/>);
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });

    it('simulate change of input', () => {
        component.find('input').simulate('change');
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button SEARCH', () => {
        component.find({label: 'SEARCH'}).simulate('click');
        expect(component.find({className:'button search-panel-button'})
            .prop('disabled')).toBe(true);
        expect(component).toMatchSnapshot();
    });
});
