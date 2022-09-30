import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CryptoContainer from "./components/Crypto/CryptoContainer";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
        <NavBar />
        <Header />
        <CryptoContainer />
        <Footer />
    </Provider>
  );
}

export default App;
