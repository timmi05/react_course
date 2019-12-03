import React from 'react';
import { shallow } from 'enzyme';
import { ResultBody } from '../../../src/result/body/ResultBody';

describe('ResultBody rendering', () => {
    it('renders correctly empty data', () => {
        const component = shallow(<ResultBody
        data = { [] }
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly data with item', () => {
        const data =
            [{
                id: 1,
                posterPath: 'posterPath',
                title: 'title',
                tagline: 'tagline',
                releaseDate : 'releaseDate'
            }];
        const component = shallow(<ResultBody
            data = { data }
        />);
        expect(component).toMatchSnapshot();
    });
});
