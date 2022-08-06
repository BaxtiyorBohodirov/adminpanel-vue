export const getters={
    products(state){
        return state.products
    },
    allProducts(state){
        return state.allProducts
    },
    filterArr(state)
    {
        console.log(state)
        return state.filterArr
    }
}