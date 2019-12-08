export const search = (value, searchBy) => ({
    type: 'SEARCH_MOVIES',
    payload: {
        value: value,
        searchBy: searchBy
    }
});

export const moveToSearch = () => ({
    type: 'MOVE_TO_SEARCH'
});
