import React from 'react';
import {shallow} from 'enzyme';
import {ResultBody} from '../../../src/result/body/ResultBody';

describe('ResultBody rendering', () => {
    it('renders correctly empty data', () => {
        const component = shallow(<ResultBody
            movies={[]}
        />);
        expect(component).toMatchSnapshot();
    });

    it('renders correctly data with item', () => {
        const movies =
            [{
                id: 1,
                poster_path: 'posterPath',
                title: 'title',
                tagline: 'tagline',
                release_date: 'releaseDate'
            }];
        const component = shallow(<ResultBody
            movies={movies}
        />);
        expect(component).toMatchSnapshot();
    });
});
