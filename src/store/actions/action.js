const axios = require('axios');

const url = 'https://lap8.herokuapp.com/items/electronics';

export const get = () =>  dispatch => {
  return axios.get(url).then(res => {
    dispatch(actualData(res.data,"GET"))
  })
}

function actualData(data,type) {
  return {
    type: type,
    payload: data
  }
}

// When adding/removing/updating items in the cart, the action/reducer will need to update the server requirement two in the app: 
/*
1. create a reducer function once we add to cart that updates the api  server by decrement the number of stock 
2.use axios (put) to update the data
3. dispatch the actual data function and pass the data with the type
4. Do the same thing with remove:
*/

// action reducer for update the server
export const updateStock = (id,reqBody) =>  dispatch => {
reqBody.inventoryCount=reqBody.inventoryCount-1
  return axios.put(`${url}/${id}`,reqBody).then(res => {
    dispatch(actualData(res.data,"UPDATE"))
  })
}

//action  reducer for delete from server:
export const deleteItem = (id) =>  dispatch => {
    return axios.delete(`${url}/${id}`).then(res => {
      dispatch(actualData(res.data,"DELETEFROMSERVER"))
    })
  }


  // action reducer to add to cart:
  export const added = (payload) => {
      return {
        type: "ADDED",
        payload: payload,
      };
    };


  // action reducer to delete from the cart
    export const deleteProduct = (product) => {
      return {
        type: "DELETE",
        payload: product,
      };
    };
    

    // action reducer to display the active :
    export const display = (name) => {
        return {
          type: "Display",
          payload: name,
        };
      };
      

