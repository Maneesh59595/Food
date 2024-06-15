import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import GenericHomePageForAllScreens from "./CommonpagesForAllScreens/GenericHomePageForAllScreens"
import GenericAboutUsPageForAllScreens from "./CommonpagesForAllScreens/GenericAboutPageForAllScreens"
import GenericContactPageForAllScreens from "./CommonpagesForAllScreens/GenericontactPageForAllScreens"
import GenericFranchisePageForAllScreens from "./CommonpagesForAllScreens/GenerifranchisePageForAllScreens"
import GenericStoresPageForAllScreens from "./CommonpagesForAllScreens/GenericStorePageForAllScreens"
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const toggleZoomScreen = () => {
    if(isDesktopOrLaptop){
      (document.body.style as any).zoom = "90%";
    }
  };
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
    toggleZoomScreen()
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
      <Route path="/" element={ <GenericHomePageForAllScreens />} />
      <Route path="/about-us" element={<GenericAboutUsPageForAllScreens />} />
      <Route path="/contact" element={<GenericContactPageForAllScreens />} />
      <Route path="/franchise" element={<GenericFranchisePageForAllScreens />} />
      <Route path="/stores" element={<GenericStoresPageForAllScreens />} />
    </Routes>
  );
}
export default App;
