import { FunctionComponent } from "react";
import styled from "styled-components";

const HomeChild = styled.div`
  position: absolute;
  top: 1598px;
  left: 0px;
  background-color: var(--color-crimson);
  width: 1440px;
  height: 594px;
`;
const HomeItem = styled.div`
  position: absolute;
  top: 1598px;
  left: 1004px;
  width: 611px;
  height: 669px;
  transform: rotate(180deg);
  transform-origin: 0 0;
`;
const HomeInner = styled.div`
  position: absolute;
  top: 682px;
  left: 504px;
  border-radius: var(--br-5xl);
  background-color: var(--color-orangered);
  width: 896px;
  height: 400px;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 682px;
  left: 504px;
  width: 896px;
  height: 400px;
  object-fit: contain;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslategray-100);
  width: 1440px;
  height: 650px;
`;
const OurMenu = styled.div`
  position: relative;
  font-weight: 600;
`;
const ExploreListOf = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  font-weight: 500;
`;
const OurMenuParent = styled.div`
  position: absolute;
  top: 1162px;
  left: calc(50% - 680px);
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  gap: var(--gap-5xs);
  font-size: var(--font-size-21xl);
`;
const DessertsAtSushicoWrapper = styled.div`
  position: absolute;
  top: 2262px;
  left: calc(50% - 680px);
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  font-size: var(--font-size-21xl);
  color: var(--color-white);
`;
const Image7Icon = styled.img`
  width: 200px;
  position: relative;
  border-radius: var(--br-84xl-5);
  height: 200px;
  object-fit: cover;
`;
const Image7Parent = styled.div`
  position: absolute;
  top: 1280px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Image7Group = styled.div`
  position: absolute;
  top: 1280px;
  left: 272px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Image7Container = styled.div`
  position: absolute;
  top: 1280px;
  left: 504px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 1280px;
  left: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Image7Parent1 = styled.div`
  position: absolute;
  top: 1280px;
  left: 968px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const Image7Parent2 = styled.div`
  position: absolute;
  top: 1280px;
  left: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 682px;
  left: 40px;
  border-radius: var(--br-5xl);
  width: 432px;
  height: 400px;
  object-fit: cover;
`;
const Off = styled.div`
  position: absolute;
  top: 748px;
  left: 72px;
  font-size: 80px;
  font-family: var(--font-pacifico);
  color: var(--color-white);
`;
const SearchFoodAt = styled.div`
  position: relative;
  font-weight: 500;
`;
const SearchFoodAtSushicoWrapper = styled.div`
  position: absolute;
  top: 1004px;
  left: 311px;
  border-radius: var(--br-81xl) 0px 0px var(--br-81xl);
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const AllSushi = styled.div`
  position: absolute;
  top: 871px;
  left: 72px;
  font-size: var(--font-size-21xl);
  font-weight: 600;
  color: var(--color-white);
  display: inline-block;
  width: 239px;
`;
const GetTheOfferWrapper = styled.div`
  position: absolute;
  top: 991px;
  left: 72px;
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  font-size: var(--font-size-base);
`;
const ViewMoreWrapper = styled.div`
  position: absolute;
  top: 1172px;
  left: 1242px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  font-size: var(--font-size-base);
`;
const ViewMoreContainer = styled.div`
  position: absolute;
  top: 2256px;
  left: 1242px;
  border-radius: var(--br-xl);
  border: 1px solid var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  font-size: var(--font-size-base);
`;
const VuesaxoutlinearrowRightIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
  transform: rotate(-180deg);
`;
const VuesaxoutlinearrowRightWrapper = styled.div`
  border-radius: var(--br-xl);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  height: 59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl);
  transform: rotate(180deg);
`;
const ViewMoreFrame = styled.div`
  border-radius: var(--br-xl);
  border: 1px solid var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
`;
const VuesaxboldprofileCircleIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
`;
const VuesaxoutlinearrowRightContainer = styled.div`
  border-radius: var(--br-xl);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  height: 59px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 1654px;
  left: 1066px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const FrameChild = styled.div`
  width: 8px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-white);
  height: 8px;
  opacity: 0.3;
`;
const FrameItem = styled.div`
  width: 8px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-white);
  height: 8px;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 714px;
  left: 234px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const DontKnowYour = styled.div`
  width: 368px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const DontDespairWere = styled.div`
  width: 572px;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
`;
const ViewOurMenuWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  font-size: var(--font-size-base);
  color: var(--color-crimson);
`;
const DontKnowYourAburiFromEbiParent = styled.div`
  position: absolute;
  top: 739px;
  left: 552px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-21xl);
  color: var(--color-white);
`;
const FrameChild1 = styled.img`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-9xs);
  max-width: 100%;
  overflow: hidden;
  height: 300px;
  flex-shrink: 0;
  object-fit: cover;
`;
const ChickenKatsuCurry = styled.div`
  flex: 1;
  position: relative;
  font-weight: 600;
`;
const StarIcon = styled.img`
  width: 12px;
  position: relative;
  height: 12px;
`;
const VectorParent = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-seagreen);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  gap: var(--gap-9xs);
  font-size: var(--font-size-base);
`;
const ChickenKatsuCurryRiceParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const Gbp = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  text-decoration: line-through;
  opacity: 0.5;
`;
const GbpParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  font-size: var(--font-size-5xl);
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const RectangleParent = styled.div`
  width: 316px;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  box-sizing: border-box;
  gap: var(--gap-base);
`;
const FrameChild2 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 300px;
  flex-shrink: 0;
  object-fit: cover;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 1761px;
  left: 504px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  color: var(--color-white);
`;
const VectorParent1 = styled.div`
  border-radius: var(--br-9xs);
  background-color: var(--color-seagreen);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs);
  gap: var(--gap-9xs);
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const LittleMoonsMangoCheeseCakeParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LittleMoonsMangoCheeseCakeContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 2350px;
  left: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const PopularItems = styled.div`
  width: 242px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const PopularItemsWrapper = styled.div`
  position: absolute;
  top: 1660px;
  left: calc(50% - 676.5px);
  border-left: 5px solid var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  font-size: var(--font-size-21xl);
  color: var(--color-white);
`;
const TopMostSelling = styled.div`
  width: 429px;
  position: relative;
  font-weight: 600;
  display: inline-block;
`;
const TopMostSellingSushiFoodsAWrapper = styled.div`
  position: absolute;
  top: 1761px;
  left: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 48px;
  color: var(--color-white);
`;
const FooterChild = styled.div`
  position: absolute;
  height: 71.76%;
  width: 100%;
  top: 28.24%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: var(--color-darkslategray-100);
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 2.1%;
  width: 1.18%;
  top: 84.59%;
  right: 53.75%;
  bottom: 13.32%;
  left: 45.07%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SubscribeToOurEmailsParent = styled.div`
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  gap: var(--gap-5xs);
`;
const EmailAddress = styled.div`
  position: relative;
  font-weight: 600;
  opacity: 0.5;
`;
const EmailAddressParent = styled.div`
  width: 381px;
  border-radius: var(--br-xl);
  background-color: var(--color-gray-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl) var(--padding-5xl);
  box-sizing: border-box;
  font-size: var(--font-size-base);
`;
const FrameParent2 = styled.div`
  position: absolute;
  height: 21.45%;
  width: 78.33%;
  top: 50.92%;
  right: 10.83%;
  bottom: 27.62%;
  left: 10.83%;
  border-radius: var(--br-xl);
  background-color: var(--color-gray-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-29xl);
  box-sizing: border-box;
`;
const FooterItem = styled.div`
  position: absolute;
  height: 43.4%;
  width: 78.33%;
  top: 2.59%;
  right: 10.83%;
  bottom: 54.01%;
  left: 10.83%;
  border-radius: var(--br-5xl);
  background-color: var(--color-crimson);
`;
const NowItWill = styled.div`
  position: absolute;
  width: 29.38%;
  top: 8.51%;
  left: 14.17%;
  font-size: var(--font-size-13xl);
  line-height: 40px;
  font-weight: 600;
  color: var(--color-white);
  display: inline-block;
`;
const Image11Icon = styled.img`
  width: 183.9px;
  position: relative;
  height: 56px;
  object-fit: cover;
`;
const Image11Parent = styled.div`
  position: absolute;
  height: 6.91%;
  width: 26.65%;
  top: 33.17%;
  right: 59.18%;
  bottom: 59.93%;
  left: 14.17%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FrameChild3 = styled.div`
  width: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-linen-100);
  height: 4px;
  opacity: 0.5;
`;
const HomeParent = styled.div`
  position: absolute;
  height: 2.34%;
  width: 57.57%;
  top: 77.31%;
  right: 21.25%;
  bottom: 20.35%;
  left: 21.18%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-base);
  font-size: var(--font-size-base);
`;
const ThesushicoWrapper = styled.div`
  position: absolute;
  height: 1.73%;
  width: 7.36%;
  top: 94.94%;
  right: 46.31%;
  bottom: 3.33%;
  left: 46.33%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-white);
`;
const Image14Icon = styled.img`
  position: absolute;
  height: 2.1%;
  width: 7.29%;
  top: 84.59%;
  right: 45.07%;
  bottom: 13.32%;
  left: 47.64%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: color-dodge;
`;
const FooterInner = styled.div`
  position: absolute;
  height: 0.12%;
  width: 94.51%;
  top: 91.55%;
  right: 2.74%;
  bottom: 8.32%;
  left: 2.74%;
  border-top: 1px solid var(--color-linen-100);
  box-sizing: border-box;
  opacity: 0.2;
`;
const SushiAppRemovebgPreview2Icon = styled.img`
  position: absolute;
  height: 45.99%;
  width: 37.57%;
  top: 0%;
  right: 14.17%;
  bottom: 54.01%;
  left: 48.26%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Footer = styled.div`
  position: absolute;
  top: 2819px;
  left: 0px;
  width: 1440px;
  height: 811px;
  font-size: var(--font-size-21xl);
`;
const MaskGroupIcon1 = styled.img`
  position: absolute;
  top: -190px;
  left: 677px;
  width: 853px;
  height: 808.5px;
  object-fit: cover;
`;
const Image3Icon = styled.img`
  position: absolute;
  top: 24px;
  left: 40px;
  width: 124px;
  height: 56px;
  object-fit: cover;
  mix-blend-mode: lighten;
`;
const Change = styled.div`
  position: relative;
  font-weight: 600;
  color: var(--color-crimson);
`;
const HomeGroup = styled.div`
  position: absolute;
  top: 42px;
  left: calc(50% - 174px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const VuesaxboldprofileCircleParent = styled.div`
  position: absolute;
  top: 40px;
  left: 1328px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FreshSushiNow = styled.p`
  margin: 0;
`;
const AvailableIn = styled.span``;
const Minutes = styled.span`
  color: var(--color-crimson);
`;
const VuesaxboldgpsIcon = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
`;
const VuesaxboldgpsParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const DudleyMotorwayLake = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  font-weight: 500;
`;
const FrameParent3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const FrameParent4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const FrameWrapper1 = styled.div`
  width: 582px;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-100);
  height: 131px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) var(--padding-base);
  box-sizing: border-box;
  z-index: 0;
`;
const VectorIcon1 = styled.img`
  width: 18px;
  position: relative;
  height: 18px;
  opacity: 0.5;
`;
const SearchFoodAt1 = styled.div`
  position: relative;
  font-weight: 500;
  opacity: 0.5;
`;
const VectorParent2 = styled.div`
  width: 414px;
  border-radius: var(--br-xl) 0px 0px var(--br-xl);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-xs);
`;
const SearchWrapper = styled.div`
  width: 160px;
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs);
  font-size: var(--font-size-base);
  color: var(--color-linen-100);
`;
const FrameParent5 = styled.div`
  width: 582px;
  margin: 0 !important;
  position: absolute;
  top: 65px;
  left: calc(50% - 291px);
  border-radius: var(--br-xl);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const FrameParent6 = styled.div`
  border-radius: var(--br-5xl);
  border: 1px solid var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  gap: var(--gap-5xs);
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
`;
const FreshSushiNowAvailableInMParent = styled.div`
  position: absolute;
  bottom: 3052px;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-13xl);
  font-size: var(--font-size-45xl);
  color: var(--color-white);
`;
const HomeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-100);
  height: 3630px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-linen-100);
  font-family: var(--font-urbanist);
`;

const Home: FunctionComponent = () => {
  return (
    <HomeRoot>
      <HomeChild />
      <HomeItem />
      <HomeInner />
      <MaskGroupIcon alt="" src="/mask-group@2x.png" />
      <RectangleDiv />
      <OurMenuParent>
        <OurMenu>Our menu</OurMenu>
        <ExploreListOf>Explore list of all the sushi items</ExploreListOf>
      </OurMenuParent>
      <DessertsAtSushicoWrapper>
        <OurMenu>Desserts at SushiCo.</OurMenu>
      </DessertsAtSushicoWrapper>
      <Image7Parent>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Hot meals</OurMenu>
      </Image7Parent>
      <Image7Group>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Poke bowl</OurMenu>
      </Image7Group>
      <Image7Container>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Hosomaki</OurMenu>
      </Image7Container>
      <FrameDiv>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Urumaki</OurMenu>
      </FrameDiv>
      <Image7Parent1>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Nigri</OurMenu>
      </Image7Parent1>
      <Image7Parent2>
        <Image7Icon alt="" src="/image-7@2x.png" />
        <OurMenu>Crunch</OurMenu>
      </Image7Parent2>
      <RectangleIcon alt="" src="/rectangle-2@2x.png" />
      <Off>30% off</Off>
      <SearchFoodAtSushicoWrapper>
        <SearchFoodAt>Search food at SushiCo</SearchFoodAt>
      </SearchFoodAtSushicoWrapper>
      <AllSushi>{`All sushi & hot dhishes`}</AllSushi>
      <GetTheOfferWrapper>
        <OurMenu>Get the offer</OurMenu>
      </GetTheOfferWrapper>
      <ViewMoreWrapper>
        <OurMenu>View more</OurMenu>
      </ViewMoreWrapper>
      <ViewMoreContainer>
        <OurMenu>View more</OurMenu>
      </ViewMoreContainer>
      <FrameParent>
        <VuesaxoutlinearrowRightWrapper>
          <VuesaxoutlinearrowRightIcon
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </VuesaxoutlinearrowRightWrapper>
        <ViewMoreFrame>
          <OurMenu>View more</OurMenu>
        </ViewMoreFrame>
        <VuesaxoutlinearrowRightContainer>
          <VuesaxboldprofileCircleIcon
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </VuesaxoutlinearrowRightContainer>
      </FrameParent>
      <EllipseParent>
        <FrameChild />
        <FrameItem />
        <FrameChild />
        <FrameChild />
      </EllipseParent>
      <DontKnowYourAburiFromEbiParent>
        <DontKnowYour>Don’t know your Aburi from Ebi?</DontKnowYour>
        <DontDespairWere>
          Don't despair, we're for all the sushi newbies out there as much as
          our regulars who lovingly scoff down their made to order sushi, boxed
          for just them minutes before.
        </DontDespairWere>
        <ViewOurMenuWrapper>
          <OurMenu>View our menu</OurMenu>
        </ViewOurMenuWrapper>
      </DontKnowYourAburiFromEbiParent>
      <FrameGroup>
        <RectangleParent>
          <FrameChild1 alt="" src="/rectangle-6@2x.png" />
          <FrameContainer>
            <ChickenKatsuCurryRiceParent>
              <ChickenKatsuCurry>Chicken katsu curry rice</ChickenKatsuCurry>
              <VectorParent>
                <StarIcon alt="" src="/star-2.svg" />
                <SearchFoodAt>4.2</SearchFoodAt>
              </VectorParent>
            </ChickenKatsuCurryRiceParent>
            <GbpParent>
              <OurMenu>£10.50 GBP</OurMenu>
              <Gbp>£25.50 GBP</Gbp>
            </GbpParent>
          </FrameContainer>
        </RectangleParent>
        <RectangleParent>
          <FrameChild2 alt="" src="/rectangle-6@2x.png" />
          <FrameContainer>
            <ChickenKatsuCurryRiceParent>
              <ChickenKatsuCurry>Chicken katsu curry rice</ChickenKatsuCurry>
              <VectorParent>
                <StarIcon alt="" src="/star-2.svg" />
                <SearchFoodAt>4.2</SearchFoodAt>
              </VectorParent>
            </ChickenKatsuCurryRiceParent>
            <GbpParent>
              <OurMenu>£10.50 GBP</OurMenu>
              <Gbp>£25.50 GBP</Gbp>
            </GbpParent>
          </FrameContainer>
        </RectangleParent>
        <RectangleParent>
          <FrameChild2 alt="" src="/rectangle-6@2x.png" />
          <FrameContainer>
            <ChickenKatsuCurryRiceParent>
              <ChickenKatsuCurry>Chicken katsu curry rice</ChickenKatsuCurry>
              <VectorParent>
                <StarIcon alt="" src="/star-2.svg" />
                <SearchFoodAt>4.2</SearchFoodAt>
              </VectorParent>
            </ChickenKatsuCurryRiceParent>
            <GbpParent>
              <OurMenu>£10.50 GBP</OurMenu>
              <Gbp>£25.50 GBP</Gbp>
            </GbpParent>
          </FrameContainer>
        </RectangleParent>
      </FrameGroup>
      <FrameParent1>
        <FrameWrapper>
          <RectangleParent>
            <FrameChild1 alt="" src="/rectangle-6@2x.png" />
            <FrameContainer>
              <LittleMoonsMangoCheeseCakeParent>
                <ChickenKatsuCurry>
                  Little moons mango cheese cake mochi (2 pieces)
                </ChickenKatsuCurry>
                <VectorParent1>
                  <StarIcon alt="" src="/star-2.svg" />
                  <SearchFoodAt>4.2</SearchFoodAt>
                </VectorParent1>
              </LittleMoonsMangoCheeseCakeParent>
              <GbpParent>
                <OurMenu>£10.50 GBP</OurMenu>
                <Gbp>£25.50 GBP</Gbp>
              </GbpParent>
            </FrameContainer>
          </RectangleParent>
        </FrameWrapper>
        <FrameWrapper>
          <RectangleParent>
            <FrameChild1 alt="" src="/rectangle-6@2x.png" />
            <FrameContainer>
              <LittleMoonsMangoCheeseCakeParent>
                <ChickenKatsuCurry>
                  Little moons mango cheese cake mochi (2 pieces)
                </ChickenKatsuCurry>
                <VectorParent1>
                  <StarIcon alt="" src="/star-2.svg" />
                  <SearchFoodAt>4.2</SearchFoodAt>
                </VectorParent1>
              </LittleMoonsMangoCheeseCakeParent>
              <GbpParent>
                <OurMenu>£10.50 GBP</OurMenu>
                <Gbp>£25.50 GBP</Gbp>
              </GbpParent>
            </FrameContainer>
          </RectangleParent>
        </FrameWrapper>
        <FrameWrapper>
          <RectangleParent>
            <FrameChild1 alt="" src="/rectangle-6@2x.png" />
            <FrameContainer>
              <LittleMoonsMangoCheeseCakeContainer>
                <ChickenKatsuCurry>
                  Little moons mango cheese cake mochi (2 pieces)
                </ChickenKatsuCurry>
                <VectorParent1>
                  <StarIcon alt="" src="/star-2.svg" />
                  <SearchFoodAt>4.2</SearchFoodAt>
                </VectorParent1>
              </LittleMoonsMangoCheeseCakeContainer>
              <GbpParent>
                <OurMenu>£10.50 GBP</OurMenu>
                <Gbp>£25.50 GBP</Gbp>
              </GbpParent>
            </FrameContainer>
          </RectangleParent>
        </FrameWrapper>
        <FrameWrapper>
          <RectangleParent>
            <FrameChild1 alt="" src="/rectangle-6@2x.png" />
            <FrameContainer>
              <LittleMoonsMangoCheeseCakeContainer>
                <ChickenKatsuCurry>
                  Little moons mango cheese cake mochi (2 pieces)
                </ChickenKatsuCurry>
                <VectorParent1>
                  <StarIcon alt="" src="/star-2.svg" />
                  <SearchFoodAt>4.2</SearchFoodAt>
                </VectorParent1>
              </LittleMoonsMangoCheeseCakeContainer>
              <GbpParent>
                <OurMenu>£10.50 GBP</OurMenu>
                <Gbp>£25.50 GBP</Gbp>
              </GbpParent>
            </FrameContainer>
          </RectangleParent>
        </FrameWrapper>
      </FrameParent1>
      <PopularItemsWrapper>
        <PopularItems>Popular items</PopularItems>
      </PopularItemsWrapper>
      <TopMostSellingSushiFoodsAWrapper>
        <TopMostSelling>
          Top most selling Sushi foods at SuchiCo.
        </TopMostSelling>
      </TopMostSellingSushiFoodsAWrapper>
      <Footer>
        <FooterChild />
        <VectorIcon alt="" src="/vector.svg" />
        <FrameParent2>
          <SubscribeToOurEmailsParent>
            <OurMenu>Subscribe to our emails</OurMenu>
            <ExploreListOf>
              Be the first to know about exclusive offers.
            </ExploreListOf>
          </SubscribeToOurEmailsParent>
          <EmailAddressParent>
            <EmailAddress>Email address</EmailAddress>
            <OurMenu>Submit</OurMenu>
          </EmailAddressParent>
        </FrameParent2>
        <FooterItem />
        <NowItWill>
          Now it will be easier to order our amazing hand made sushi from
          directly from your mobile phone.
        </NowItWill>
        <Image11Parent>
          <Image11Icon alt="" src="/image-11@2x.png" />
          <Image11Icon alt="" src="/image-12@2x.png" />
        </Image11Parent>
        <HomeParent>
          <OurMenu>Home</OurMenu>
          <FrameChild3 />
          <OurMenu>Search</OurMenu>
          <FrameChild3 />
          <OurMenu>Contact</OurMenu>
          <FrameChild3 />
          <OurMenu>{`Nutrition & Allergens`}</OurMenu>
          <FrameChild3 />
          <OurMenu>Intro</OurMenu>
          <FrameChild3 />
          <OurMenu>Privacy policy</OurMenu>
          <FrameChild3 />
          <OurMenu>Terms of service</OurMenu>
          <FrameChild3 />
          <OurMenu>FAQ</OurMenu>
        </HomeParent>
        <ThesushicoWrapper>
          <EmailAddress>© 2024, Thesushico</EmailAddress>
        </ThesushicoWrapper>
        <Image14Icon alt="" src="/image-14@2x.png" />
        <FooterInner />
        <SushiAppRemovebgPreview2Icon
          alt=""
          src="/sushi-appremovebgpreview-2@2x.png"
        />
      </Footer>
      <MaskGroupIcon1 alt="" src="/mask-group@2x.png" />
      <Image3Icon alt="" src="/image-3@2x.png" />
      <HomeGroup>
        <Change>Home</Change>
        <OurMenu>Menu</OurMenu>
        <OurMenu>Contact</OurMenu>
        <OurMenu>Stores</OurMenu>
        <OurMenu>Franchise</OurMenu>
      </HomeGroup>
      <VuesaxboldprofileCircleParent>
        <VuesaxboldprofileCircleIcon
          alt=""
          src="/vuesaxboldprofilecircle.svg"
        />
        <VuesaxboldprofileCircleIcon alt="" src="/vuesaxboldbag.svg" />
      </VuesaxboldprofileCircleParent>
      <FreshSushiNowAvailableInMParent>
        <OurMenu>
          <FreshSushiNow>Fresh sushi now</FreshSushiNow>
          <FreshSushiNow>
            <AvailableIn>{`available in `}</AvailableIn>
            <Minutes>minutes!</Minutes>
          </FreshSushiNow>
        </OurMenu>
        <FrameParent6>
          <FrameWrapper1>
            <FrameParent4>
              <FrameParent3>
                <VuesaxboldgpsParent>
                  <VuesaxboldgpsIcon alt="" src="/vuesaxboldgps.svg" />
                  <OurMenu>Home</OurMenu>
                </VuesaxboldgpsParent>
                <DudleyMotorwayLake>
                  4545 Dudley Motorway, Lake Darleen, OH 99804-7612
                </DudleyMotorwayLake>
              </FrameParent3>
              <Change>Change</Change>
            </FrameParent4>
          </FrameWrapper1>
          <FrameParent5>
            <VectorParent2>
              <VectorIcon1 alt="" src="/vector1.svg" />
              <SearchFoodAt1>Search food at SushiCo</SearchFoodAt1>
            </VectorParent2>
            <SearchWrapper>
              <OurMenu>Search</OurMenu>
            </SearchWrapper>
          </FrameParent5>
        </FrameParent6>
      </FreshSushiNowAvailableInMParent>
    </HomeRoot>
  );
};

export default Home;
