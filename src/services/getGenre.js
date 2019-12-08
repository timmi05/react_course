export const getGenre = selectedProduct => {
    if (selectedProduct && selectedProduct.genres && selectedProduct.genres.length > 0) {
        return selectedProduct.genres[0];
    }
    return null;
};