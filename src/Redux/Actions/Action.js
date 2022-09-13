export const ADD = (item) => {
  return {
    type: "addtocart",
    payload: item,
  };
};

export const DELETE = (id) => {
  return {
    type: "deleteitem",
    payload: id,
  };
};

export const REMOVE = (item) => {
  return {
    type: "remove",
    payload: item,
  };
};
