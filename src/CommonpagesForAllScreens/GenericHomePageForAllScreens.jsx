
import HomePageForLargeScreens from "../pages/Home"
import HomePageForMobile from "../pages/IPhone1415ProMax1"
import { useMediaQuery } from 'react-responsive'


function GenericHomePageForAllScreens() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop && <HomePageForLargeScreens />}
      {isTabletOrMobile && <HomePageForMobile />}
    </>
  )
}

export default GenericHomePageForAllScreens