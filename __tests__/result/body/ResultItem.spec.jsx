import React from 'react';
import { shallow } from 'enzyme';
import { ResultItem } from '../../../src/result/body/ResultItem';

describe('ResultItem rendering', () => {
    it('renders correctly', () => {
        const component = shallow(<ResultItem/>);
        expect(component).toMatchSnapshot();
    });
});
