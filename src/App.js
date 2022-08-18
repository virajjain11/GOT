import Home from "./components/HomePage/Home";
import { Provider } from "react-redux";
import { store } from "./features/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
