import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { Background } from "./components/Background";

const App = () => {
  return (
    <div className="bg-[url(/img/background.svg)]">
      {/* <Background /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
