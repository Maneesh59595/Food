import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Franchise from "./pages/Franchise";
import Stores from "./pages/Stores";
import IPhone1415ProMax from "./pages/IPhone1415ProMax";
import IPhone1415ProMax1 from "./pages/IPhone1415ProMax1";
import IPhone1415ProMax2 from "./pages/IPhone1415ProMax2";
import IPhone1415ProMax3 from "./pages/IPhone1415ProMax3";
import Stores1 from "./pages/Stores1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/franchise":
        title = "";
        metaDescription = "";
        break;
      case "/stores":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-1":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-2":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-15-pro-max-4":
        title = "";
        metaDescription = "";
        break;
      case "/stores1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/iphone-14-15-pro-max-3" element={<IPhone1415ProMax />} />
      <Route path="/iphone-14-15-pro-max-1" element={<IPhone1415ProMax1 />} />
      <Route path="/iphone-14-15-pro-max-2" element={<IPhone1415ProMax2 />} />
      <Route path="/iphone-14-15-pro-max-4" element={<IPhone1415ProMax3 />} />
      <Route path="/stores1" element={<Stores1 />} />
    </Routes>
  );
}
export default App;
