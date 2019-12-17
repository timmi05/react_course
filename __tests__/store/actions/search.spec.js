import {moveToSearch, search} from '../../../src/store/actions/search';

describe('Test search', () => {

    it('tests search', () => {
        const result = search('value', 'searchBy');
        const expectedResult = {
            type: 'SEARCH_MOVIES',
            payload: {value: 'value', searchBy: 'searchBy'}
        };
        expect(result).toEqual(expectedResult);
    });

    it('tests moveToSearch', () => {
        const result = moveToSearch();
        const expectedResult = {type: 'MOVE_TO_SEARCH'};
        expect(result).toEqual(expectedResult);
    });
});
