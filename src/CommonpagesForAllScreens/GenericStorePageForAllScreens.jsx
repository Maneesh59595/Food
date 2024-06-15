
import StoresPageForLargeScreens from "../pages/Stores"
import StoresPageForMobile from "../pages/Stores1"
import { useMediaQuery } from 'react-responsive'


function GenericStoresPageForAllScreens() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop && <StoresPageForLargeScreens />}
      {isTabletOrMobile && <StoresPageForMobile />}
    </>
  )
}

export default GenericStoresPageForAllScreens