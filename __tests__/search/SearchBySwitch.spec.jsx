import React from 'react';
import {mount} from 'enzyme';
import {SearchBySwitch} from '../../src/search/SearchBySwitch';

describe('SearchBySwitch rendering', () => {

    it('renders correctly', () => {
        const component = mount(<SearchBySwitch/>);
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button by TITLE', () => {
        const searchByTitle = () => {
        };
        const component = mount(<SearchBySwitch
            searchByTitle={searchByTitle}
        />);
        component.find({label: 'TITLE'}).simulate('click');
        expect(component.find({className: 'button search-by-switch-button search-by-switch-left-button'})
            .prop('disabled')).toBe(true);
        expect(component).toMatchSnapshot();
    });

    it('simulate click on button by GENRE', () => {
        const searchByTitle = () => {
        };
        const searchByGenre = () => {
        };
        const component = mount(<SearchBySwitch
            searchByTitle={searchByTitle}
            searchByGenre={searchByGenre}
        />);
        component.find({label: 'TITLE'}).simulate('click');
        component.find({label: 'GENRE'}).simulate('click');
        expect(component.find({className: 'button search-by-switch-button search-by-switch-right-button'})
            .prop('disabled')).toBe(true);
        expect(component).toMatchSnapshot();
    });
});
