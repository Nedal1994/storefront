// initial states:
let initialState = {
  AddedProducts: [],
  counter: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADDED":
      const added = state.AddedProducts.map((product) => product.name);

      if (!added.includes(payload.name)) {
        let counter = state.counter+ 1;

        return {
          
          AddedProducts: [...state.AddedProducts, payload],
          counter: counter,
        };
      }
      return {...state}

    case "DELETE":
      const product = state.AddedProducts.filter((product) => {
        return product.name !== payload.name;
      });
      let counter = state.counter - 1;
      return { AddedProducts: [...product], counter: counter };

    default:
      return state;
  }
};

// export const added = (payload) => {
//   return {
//     type: "ADDED",
//     payload: payload,
//   };
// };

// export const deleteProduct = (product) => {
//   return {
//     type: "DELETE",
//     payload: product,
//   };
// };
