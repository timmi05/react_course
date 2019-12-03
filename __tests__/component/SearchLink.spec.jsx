import React from 'react';
import { shallow } from 'enzyme';
import { SearchLink } from '../../src/component/SearchLink';

describe('DigitalInfo rendering', () => {
    it('should render empty <a>', () => {
        const component = shallow(<SearchLink/>);
        expect(component.find('a')).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });

    it('should render href search', () => {
        const component = shallow(<SearchLink
        productSelected = { true }
        />);
        expect(component.find('a')).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });
});
