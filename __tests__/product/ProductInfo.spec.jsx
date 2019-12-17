import React from 'react';
import {shallow} from 'enzyme';
import {ProductInfo} from '../../src/product/ProductInfo';

describe('ProductInfo rendering', () => {
    it('renders correctly', () => {
        const movie =
            {
                id: 1,
                poster_path: 'posterPath',
                title: 'title',
                tagline: 'tagline',
                release_date: 'releaseDate'
            };
        const component = shallow(<ProductInfo
            movie={movie}
        />);
        expect(component).toMatchSnapshot();
    });
});
