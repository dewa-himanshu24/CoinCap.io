import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import CryptoContainer from "./components/Crypto/CryptoContainer";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import Setting from "./components/Setting";

function App() {
  const [settingIsShown, setSettingIsShown] = useState(false);

  const showSettingHandler = () => {
    setSettingIsShown(true);
  };

  const hideSettingHandler = () => {
    setSettingIsShown(false);
  };

  return (
    <>
      {settingIsShown ? (
        <Setting onClose={hideSettingHandler} />
      ) : (
        <Provider store={store}>
          <NavBar onShowSetting={showSettingHandler} />
          <Header />
          <CryptoContainer />
          <Footer />
        </Provider>
      )}
    </>
  );
}

export default App;
