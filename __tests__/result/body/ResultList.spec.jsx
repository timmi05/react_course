import React from 'react';
import { shallow } from 'enzyme';
import { ResultList } from '../../../src/result/body/ResultList';

describe('ResultList rendering', () => {
    it('renders correctly', () => {
        const data =
            [{
                id: 1,
                posterPath: 'posterPath',
                title: 'title',
                tagline: 'tagline',
                releaseDate : 'releaseDate'
            }];
        const component = shallow(<ResultList
        data = { data }
        />);
        expect(component).toMatchSnapshot();
    });
});
