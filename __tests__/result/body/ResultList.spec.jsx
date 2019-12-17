import React from 'react';
import {shallow} from 'enzyme';
import {ResultList} from '../../../src/result/body/ResultList';

describe('ResultList rendering', () => {
    it('renders correctly', () => {
        const movies =
            [{
                id: 1,
                poster_path: 'posterPath',
                title: 'title',
                tagline: 'tagline',
                release_date: 'releaseDate'
            }];
        const component = shallow(<ResultList
            movies={movies}
        />);
        expect(component).toMatchSnapshot();
    });
});
