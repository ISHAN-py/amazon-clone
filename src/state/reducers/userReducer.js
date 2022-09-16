const reducer = (state = null, action) => {
  if (action.type == "remove") {
    state = action.payload;
  }
  return state;
};
export default reducer;
