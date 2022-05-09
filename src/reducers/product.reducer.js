import { productConstants } from "../constants"

const initState = {
    products: [],
    productsByPrice: {
        under500k: [],
        under1000k: []
    }
}

export default (state = initState, action) => {
    switch (action.type) {
        case productConstants.GET_PRODUCTS_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productsByPrice: {
                    ...action.payload.productsByPrice
                }
            }
            break;
    }

    return state;
}