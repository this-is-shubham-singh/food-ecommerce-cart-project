const initialstate = {
  carts: [],
};

export const cartreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "addtocart":
      // finding out if the index of the item recieved by action.payload is alredy present
      const itemindex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemindex >= 0) {
        // if index of that item found then increase that item quantity by 1
        // donot again store it in carts
        state.carts[itemindex].qnty += 1;

        // else if new item
        // then set its quantity to one and store in carts
      } else {
        const temp = { ...action.payload, qnty: 1 };

        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "deleteitem":
      const data = state.carts.filter((ele) => ele.id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    case "remove":
      const itemindexdec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[itemindexdec].qnty >= 1) {
        const dltitem = (state.carts[itemindexdec].qnty -= 1);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemindexdec].qnty === 1) {
        const data = state.carts.filter((ele) => ele.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};
