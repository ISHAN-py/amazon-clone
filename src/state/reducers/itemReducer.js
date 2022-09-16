const reducer = (state = [], action) => {
  if (action.type === "add") {
    state.push(action.payload);
    return state;
  } else if (action.type === "remove") {
    const index = state.findIndex((e) => e.id === action.payload.id);
    let newBasket = [...state];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.log("Cant remove item: ");
    }
    // state = state.filter((e) => {
    //   return e.id != action.payload.id;
    // });
    state = newBasket;
    return state;
  } else {
    return state;
  }
};

export default reducer;
