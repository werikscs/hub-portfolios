import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <GlobalStyles />
      <Routes />
    </main>
  );
};

export default App;
