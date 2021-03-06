import axios from "axios";
import {productConstants} from "../constants";

export const getProductsBySlug = (slug) => {
  return async (dispatch) => {
    const res = await axios.get(`/products/${slug}`);
    console.log({res})
    if(res.status === 200){
      dispatch({
        type: productConstants.GET_PRODUCTS_BY_SLUG,
        payload: res.data
      })
    }
  };
};

