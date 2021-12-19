let initialState = {
  products: [
    {
      categoryAssociation: "E",
      name: "Mobile Phone",
      description: "I phone pro max",
      price: "300$",
      inventoryCount: 50,
      img:"https://s.yimg.com/uu/api/res/1.2/K5V5FGS0ubWOtzxhF8m2Jg--~B/aD0xMDEzO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38.cf.jpg"
    },
    {
      categoryAssociation: "E",
      name: "Tablet",
      description: "new tablet",
      price: "100$",
      inventoryCount: 10,
      img:"https://i5.walmartimages.com/asr/bb3c4eb0-0ada-4cef-8b5f-97a11fa7ef0f.2d3805e39285bde9b9884e68e76e3608.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
    categoryAssociation: "A",
    name: "Mobile Accessories",
    description: "Its for your mobile",
    price: "100$",
    inventoryCount: 10,
    img:"https://i1.wp.com/fanappic.com/wp-content/uploads/2010/12/iPhone-Accessories-for-Travelling.jpg?resize=405%2C306"
  },
  ],
};
const productRed = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Display":
      let product = state.products.filter((product) => {
        if (product.categoryAssociation == payload) {
          return product.categoryAssociation;
        } else {
          return null;
        }
      });
      return { ...state, product: product };
    // case "RESET":
    //   return initialState;
    default:
      return state;
  }
};

export default productRed;
