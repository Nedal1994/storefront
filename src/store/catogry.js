let initialState = {
  catogries: [
    {
      normalizedName: "E",
      displaynName: "electronics",
      description: "where you can find all elecrtonic products",
      display: false,
    },
    {
      normalizedName: "F",
      displaynName: "food",
      description: "where you can find all food products",
      display: false,
    },
  ],
  activeCatogry: ""
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "Display":

      let catogries = state.catogries.map((catogry) => {
        if (catogry.normalizedName == payload) {
          return {
            normalizedName:catogry.normalizedName,
            displaynName: catogry.displaynName,
            description: catogry.description,
          };
        }
        return catogry;
      });

      return { ...state, activeCatogry: payload ,catogries:catogries};

    default:
      return state;
  }
};