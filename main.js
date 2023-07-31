import store from "./stores";
import App from "./App/App";
import { Provider } from "react-redux";

export default function main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
