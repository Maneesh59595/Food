import { FunctionComponent } from "react";
import styled from "styled-components";

const StoresChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslategray-100);
  width: 1440px;
  height: 354px;
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
const Home = styled.div`
  position: relative;
  font-weight: 600;
`;
const HomeParent = styled.div`
  position: absolute;
  top: 42px;
  left: calc(50% - 174px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const FrameChild = styled.img`
  width: 3px;
  position: relative;
  height: 6px;
  opacity: 0.5;
`;
const RestaurantLists = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-linen-100);
`;
const HomeGroup = styled.div`
  position: absolute;
  top: 295px;
  right: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  color: var(--color-crimson);
`;
const VuesaxboldprofileCircleIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
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
const RestaurantLists1 = styled.div`
  position: absolute;
  top: 237px;
  left: calc(50% - 680px);
  font-size: var(--font-size-45xl);
  font-weight: 600;
`;
const Unit31Ropery = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
`;
const GreenwichParent = styled.div`
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  gap: var(--gap-5xs);
`;
const DeliveryOnly = styled.div`
  position: relative;
  font-weight: 500;
`;
const DeliveryOnlyWrapper = styled.div`
  border-radius: var(--br-81xl);
  border: 1px solid var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  font-size: var(--font-size-sm);
`;
const Days = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 600;
  opacity: 0.5;
`;
const Am11pm = styled.div`
  position: relative;
  line-height: 28px;
  font-weight: 500;
`;
const DaysParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-lg);
`;
const FrameGroup = styled.div`
  width: 664px;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const BookATableWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  border-radius: var(--br-81xl);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
`;
const HighStreetColchester = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
`;
const FrameWrapper1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 410px;
  left: 40px;
  width: 1360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
  font-size: var(--font-size-21xl);
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
const BeTheFirst = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  font-weight: 500;
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
const FrameItem = styled.div`
  width: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-linen-100);
  height: 4px;
  opacity: 0.5;
`;
const HomeContainer = styled.div`
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
  bottom: 0px;
  left: calc(50% - 720px);
  width: 1440px;
  height: 811px;
  font-size: var(--font-size-21xl);
`;
const Drac3161Icon = styled.img`
  position: absolute;
  top: -20px;
  right: 0px;
  width: 657px;
  height: 438px;
  object-fit: contain;
`;
const StoresRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-100);
  height: 2196px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-linen-100);
  font-family: var(--font-urbanist);
`;

const Stores: FunctionComponent = () => {
  return (
    <StoresRoot>
      <StoresChild />
      <Image3Icon alt="" src="/image-3@2x.png" />
      <HomeParent>
        <Home>Home</Home>
        <Home>Menu</Home>
        <Home>Contact</Home>
        <Home>Stores</Home>
        <Home>Franchise</Home>
      </HomeParent>
      <HomeGroup>
        <Home>Home</Home>
        <FrameChild alt="" src="/vector-1.svg" />
        <RestaurantLists>Restaurant lists</RestaurantLists>
      </HomeGroup>
      <VuesaxboldprofileCircleParent>
        <VuesaxboldprofileCircleIcon
          alt=""
          src="/vuesaxboldprofilecircle1.svg"
        />
        <VuesaxboldprofileCircleIcon alt="" src="/vuesaxboldbag1.svg" />
      </VuesaxboldprofileCircleParent>
      <RestaurantLists1>Restaurant lists</RestaurantLists1>
      <FrameParent1>
        <FrameGroup>
          <GreenwichParent>
            <Home>Greenwich</Home>
            <Unit31Ropery>{`Unit 31, Ropery Business Park,Anchor & Hope lane London. SE7 7RX `}</Unit31Ropery>
          </GreenwichParent>
          <DeliveryOnlyWrapper>
            <DeliveryOnly>Delivery only</DeliveryOnly>
          </DeliveryOnlyWrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
        <FrameGroup>
          <GreenwichParent>
            <Home>Bermondsey</Home>
            <Unit31Ropery>
              Unit 35, Bermondsey,18 Verney Road, SE16 3DH
            </Unit31Ropery>
          </GreenwichParent>
          <DeliveryOnlyWrapper>
            <DeliveryOnly>Delivery only</DeliveryOnly>
          </DeliveryOnlyWrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
        <FrameGroup>
          <GreenwichParent>
            <Home>Bettersea</Home>
            <Unit31Ropery>15-17 Ingate place, Battersea, SW8 3NS</Unit31Ropery>
          </GreenwichParent>
          <DeliveryOnlyWrapper>
            <DeliveryOnly>Delivery only</DeliveryOnly>
          </DeliveryOnlyWrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
        <FrameGroup>
          <FrameParent>
            <GreenwichParent>
              <Home>Streatham</Home>
              <Unit31Ropery>82 Streatham Hill London SW2 4RD</Unit31Ropery>
            </GreenwichParent>
            <BookATableWrapper>
              <Home>Book a table</Home>
            </BookATableWrapper>
          </FrameParent>
          <Wrapper>
            <DeliveryOnly>0203 9826561</DeliveryOnly>
          </Wrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
        <FrameGroup>
          <GreenwichParent>
            <Home>Camden</Home>
            <Unit31Ropery>71 Camden High Street London NW1 7JL</Unit31Ropery>
          </GreenwichParent>
          <Wrapper>
            <DeliveryOnly>020 363573932</DeliveryOnly>
          </Wrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
        <FrameGroup>
          <FrameWrapper1>
            <GreenwichParent>
              <Home>Colchester</Home>
              <HighStreetColchester>
                56 High Street Colchester Essex CO1 1DH
              </HighStreetColchester>
            </GreenwichParent>
          </FrameWrapper1>
          <Wrapper>
            <DeliveryOnly>{`01277 282905 `}</DeliveryOnly>
          </Wrapper>
          <FrameWrapper>
            <DaysParent>
              <Days>7 days</Days>
              <Am11pm>11am - 11pm</Am11pm>
            </DaysParent>
          </FrameWrapper>
        </FrameGroup>
      </FrameParent1>
      <Footer>
        <FooterChild />
        <VectorIcon alt="" src="/vector.svg" />
        <FrameParent2>
          <GreenwichParent>
            <Home>Subscribe to our emails</Home>
            <BeTheFirst>
              Be the first to know about exclusive offers.
            </BeTheFirst>
          </GreenwichParent>
          <EmailAddressParent>
            <EmailAddress>Email address</EmailAddress>
            <Home>Submit</Home>
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
        <HomeContainer>
          <Home>Home</Home>
          <FrameItem />
          <Home>Search</Home>
          <FrameItem />
          <Home>Contact</Home>
          <FrameItem />
          <Home>{`Nutrition & Allergens`}</Home>
          <FrameItem />
          <Home>Intro</Home>
          <FrameItem />
          <Home>Privacy policy</Home>
          <FrameItem />
          <Home>Terms of service</Home>
          <FrameItem />
          <Home>FAQ</Home>
        </HomeContainer>
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
      <Drac3161Icon alt="" src="/drac316-1@2x.png" />
    </StoresRoot>
  );
};

export default Stores;
