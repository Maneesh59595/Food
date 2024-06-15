
import FranchiseUsPageForLargeScreens from "../pages/Franchise"
import FranchisePageForMobile from "../pages/IPhone1415ProMax3"
import { useMediaQuery } from 'react-responsive'


function GenericFranchisePageForAllScreens() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  return (
    <>
      {isDesktopOrLaptop && <FranchiseUsPageForLargeScreens />}
      {isTabletOrMobile && <FranchisePageForMobile />}
    </>
  )
}

export default GenericFranchisePageForAllScreens