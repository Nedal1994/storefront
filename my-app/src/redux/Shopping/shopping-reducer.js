import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "TV",
      description:
        "See all the things",
      price: 100,
      image:
        "https://images.philips.com/is/image/PhilipsConsumer/32PHS6605_12-IMS-en_GB?$jpglarge$&wid=960",
    },
    {
      id: 2,
      title: "Macbook",
      description:
        "Do all the things",
      price: 80.0,
      image:
        "https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/pass/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg",
    },
    {
      id: 3,
      title: "Carrots",
      description:
        "Yummy",
      price: 2.50,
      image:
        "https://www.liveeatlearn.com/wp-content/uploads/2018/04/carrot-on-white-5-809x1024.jpg",
    },
    {
      id: 4,
      title: "Beef",
      description:
        "It's what's for dinner",
      price: 10,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-roast-beef-horizontal-1540505165.jpg?crop=1xw:0.75xh;center,top&resize=640:*",
    },
    {
      id: 5,
      title: "Cereal",
      description:
        "Got milk ?",
      price: 14,
      image:
        "https://th-thumbnailer.cdn-si-edu.com/2zPOHKRmOBMmE66yYYrnGkH_zPE=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b3/57/b35709d6-a2a4-4abc-933f-aa43cce98513/froot-loops-cereal-bowl.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );

      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
