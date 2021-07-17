import { createStore } from "redux";
import { Provider } from "react-redux";
import "./styles.css";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export const hoge = () => {
  store.dispatch({ type: "PLUS" });
};
const onPlus = () => {
  hoge();
};

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <div>
          <button onClick={() => onPlus()}>Add </button>
        </div>
      </div>
    </Provider>
  );
}
