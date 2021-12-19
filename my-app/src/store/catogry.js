let initialState = {
  catogries: [
    {
      normalizedName: "E",
      displaynName: "electronics",
      description: "where you can find all elecrtonic products",
      display: false,
    },
    {
      normalizedName: "A",
      displaynName: "acceccories",
      description: "where you can find all acceccories products",
      display: false,
    },
  ],
  activeCatogry: "",
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "Display":
      let active = payload;
      let catogries = state.catogries.map((catogry) => {
        if (catogry.name == payload) {
          return {
            normalizedName: catogry.normalizedName,
            displaynName: catogry.displaynName,
            description: catogry.description,
          };
        }
        return catogry;
      });

      return { active, catogries };

    default:
      return state;
  }
};

export const display = (name) => {
  return {
    type: "Display",
    payload: name,
  };
};

