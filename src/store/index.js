import { createStore } from "redux";
import rootReducer from "./rootReducer";
// const initialState = {
//   name: 'Alex'
// }

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//     default:
//       return state
//   }
// }
// export const changeName = (name) => {
//   return {
//     type: 'CHANGE_NAME',
//     name: name
//   }
// }

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
