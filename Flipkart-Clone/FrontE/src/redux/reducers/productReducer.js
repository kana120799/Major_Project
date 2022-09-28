export const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "getProductsSuccess":
      return { products: action.payload };
    case "getProductsFail":
      return { error: action.payload };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "getProductDetailsRequest":
      return { loading: true };
    case "getProductDetailSuccess":
      return { loading: false, product: action.payload };
    case "getProductDetailFail":
      return {
        loading: false,
        error: action.payload,
      };
    case "getProductDetailReset":
      return {
        product: {},
      };
    default:
      return state;
  }
};
