import {selectMovies} from '../../../src/store/selectors/selectMovies';

describe('Test selectMovies', () => {

    it('renders correctly', () => {
        const result = selectMovies("");
        const expectedResult = [];
        expect(result).toEqual(expectedResult);
    });
});
