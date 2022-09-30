import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen">
        <NavBar />
        <Header />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
