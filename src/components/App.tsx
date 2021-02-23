import { Provider } from "react-redux";
import { store } from "../store";
import logo from "../logo.svg";

import RepositoriesList from "./RepositoriesList";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a package:</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
