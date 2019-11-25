import React from 'react';
import { shallow } from 'enzyme';
import { ItemInfo } from '../../../src/result/body/ItemInfo';

describe('ItemInfo rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ItemInfo/>);
        expect(component).toMatchSnapshot();
    });
});
