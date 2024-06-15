
import AboutUsPageForLargeScreens from "../pages/AboutUs"
import AboutUsPageForMobile from "../pages/IPhone1415ProMax2"
import { useMediaQuery } from 'react-responsive'


function GenericAboutUsPageForAllScreens() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop && <AboutUsPageForLargeScreens />}
      {isTabletOrMobile && <AboutUsPageForMobile />}
    </>
  )
}

export default GenericAboutUsPageForAllScreens