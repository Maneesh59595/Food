
import ContactPageForLargeScreens from "../pages/Contact"
import ContactPageForMobile from "../pages/IPhone1415ProMax"
import { useMediaQuery } from 'react-responsive'


function GenericContactPageForAllScreens() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop && <ContactPageForLargeScreens />}
      {isTabletOrMobile && <ContactPageForMobile />}
    </>
  )
}

export default GenericContactPageForAllScreens