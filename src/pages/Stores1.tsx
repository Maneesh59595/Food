import { FunctionComponent } from "react";
import styled from "styled-components";

const StoresChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: var(--color-darkslategray-100);
  width: 430px;
  height: 272px;
`;
const FrameChild = styled.div`
  width: 12px;
  position: relative;
  border-radius: var(--br-981xl);
  background-color: var(--color-linen-100);
  height: 2px;
`;
const FrameItem = styled.div`
  width: 20px;
  position: relative;
  border-radius: var(--br-981xl);
  background-color: var(--color-linen-100);
  height: 2px;
`;
const RectangleParent = styled.div`
  width: 48px;
  border-radius: var(--br-81xl);
  border: 1px solid var(--color-linen-300);
  box-sizing: border-box;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
  gap: var(--gap-9xs);
`;
const Image3Icon = styled.img`
  width: 106.3px;
  position: relative;
  height: 48px;
  object-fit: cover;
  mix-blend-mode: lighten;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const VuesaxboldprofileCircleIcon = styled.img`
  width: 24px;
  position: relative;
  height: 24px;
`;
const VuesaxboldprofileCircleWrapper = styled.div`
  width: 48px;
  border-radius: var(--br-81xl);
  border: 1px solid var(--color-linen-300);
  box-sizing: border-box;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-81xl);
`;
const RestaurantLists = styled.div`
  position: relative;
  font-weight: 600;
`;
const VectorIcon = styled.img`
  width: 3px;
  position: relative;
  height: 6px;
  opacity: 0.5;
`;
const RestaurantLists1 = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-linen-100);
`;
const HomeParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
  font-size: var(--font-size-base);
  color: var(--color-crimson);
`;
const RestaurantListsParent = styled.div`
  position: absolute;
  top: 169px;
  left: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;
const Greenwich = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 600;
`;
const Unit31Ropery = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
`;
const GreenwichParent = styled.div`
  align-self: stretch;
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  gap: var(--gap-5xs);
`;
const DeliveryOnly = styled.div`
  flex: 1;
  position: relative;
  font-weight: 500;
`;
const DeliveryOnlyWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  border: 1px solid var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  text-align: center;
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
const FrameParent1 = styled.div`
  align-self: stretch;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-13xl);
  gap: var(--gap-5xl);
`;
const StreathamHillLondon = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
`;
const BookATableWrapper = styled.div`
  align-self: stretch;
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
const FrameParent2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const Wrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-81xl);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-base);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-gray-100);
`;
const HighStreetColchester = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
`;
const ColchesterParent = styled.div`
  flex: 1;
  border-left: 5px solid var(--color-crimson);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-base);
  gap: var(--gap-5xs);
`;
const FrameWrapper1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const FrameParent3 = styled.div`
  width: 382px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const FooterChild = styled.div`
  position: absolute;
  height: 28.18%;
  width: 100%;
  top: 24.76%;
  right: 0%;
  bottom: 47.06%;
  left: 0%;
  background-color: var(--color-crimson);
`;
const FooterItem = styled.div`
  position: absolute;
  height: 42.76%;
  width: 100%;
  top: 52.94%;
  right: 0%;
  bottom: 4.31%;
  left: 0%;
  background-color: var(--color-darkslategray-100);
`;
const FooterInner = styled.div`
  position: absolute;
  height: 0.1%;
  width: 100.23%;
  top: 89.58%;
  right: -0.12%;
  bottom: 10.32%;
  left: -0.12%;
  border-top: 1px solid var(--color-linen-100);
  box-sizing: border-box;
  opacity: 0.2;
`;
const HomeGroup = styled.div`
  position: absolute;
  height: 5.28%;
  width: 88.84%;
  top: 76.42%;
  right: 5.58%;
  bottom: 18.3%;
  left: 5.58%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--gap-base);
  font-size: var(--font-size-base);
`;
const SushiAppRemovebgPreview2Icon = styled.img`
  position: absolute;
  height: 24.76%;
  width: 85.35%;
  top: 0%;
  right: 7.21%;
  bottom: 75.24%;
  left: 7.44%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Image11Icon = styled.img`
  width: 157.6px;
  position: relative;
  height: 48px;
  object-fit: cover;
`;
const Image11Parent = styled.div`
  position: absolute;
  height: 4.7%;
  width: 77.02%;
  top: 45.11%;
  right: 11.58%;
  bottom: 50.2%;
  left: 11.4%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const NowItWill = styled.div`
  position: absolute;
  width: 85.12%;
  top: 27.89%;
  left: 7.44%;
  font-weight: 600;
  color: var(--color-white);
  text-align: center;
  display: inline-block;
`;
const BeTheFirst = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  font-weight: 500;
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
  align-self: stretch;
  border-radius: var(--br-xl);
  background-color: var(--color-gray-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl) var(--padding-5xl);
  font-size: var(--font-size-base);
`;
const FrameParent4 = styled.div`
  position: absolute;
  height: 17.22%;
  width: 92.56%;
  top: 56.07%;
  right: 3.72%;
  bottom: 26.71%;
  left: 3.72%;
  border-radius: var(--br-5xl);
  background-color: var(--color-darkslategray-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base);
  box-sizing: border-box;
  gap: var(--gap-5xl);
`;
const Image14Icon = styled.img`
  position: absolute;
  height: 1.66%;
  width: 25.12%;
  top: 84.83%;
  right: 33.49%;
  bottom: 13.5%;
  left: 41.4%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: color-dodge;
`;
const Thesushico = styled.div`
  position: absolute;
  top: 91.98%;
  left: 37.67%;
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-white);
  opacity: 0.5;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 1.66%;
  width: 3.95%;
  top: 84.83%;
  right: 62.56%;
  bottom: 13.5%;
  left: 33.49%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Footer = styled.div`
  width: 430px;
  position: relative;
  height: 1022px;
  font-size: var(--font-size-9xl);
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 296px;
  left: 0px;
  height: 4631px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 56px;
  color: var(--color-linen-100);
`;
const Drac3161Icon = styled.img`
  position: absolute;
  top: 55px;
  right: 0px;
  width: 144px;
  height: 217px;
  object-fit: cover;
`;
const StoresRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-100);
  height: 3343px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--color-white);
  font-family: var(--font-urbanist);
`;

const Stores1: FunctionComponent = () => {
  return (
    <StoresRoot>
      <StoresChild />
      <FrameParent>
        <FrameGroup>
          <RectangleParent>
            <FrameChild />
            <FrameItem />
            <FrameChild />
          </RectangleParent>
          <Image3Icon alt="" src="/image-3@2x.png" />
        </FrameGroup>
        <FrameGroup>
          <VuesaxboldprofileCircleWrapper>
            <VuesaxboldprofileCircleIcon
              alt=""
              src="/vuesaxboldprofilecircle.svg"
            />
          </VuesaxboldprofileCircleWrapper>
          <VuesaxboldprofileCircleWrapper>
            <VuesaxboldprofileCircleIcon alt="" src="/vuesaxboldbag.svg" />
          </VuesaxboldprofileCircleWrapper>
        </FrameGroup>
      </FrameParent>
      <RestaurantListsParent>
        <RestaurantLists>Restaurant lists</RestaurantLists>
        <HomeParent>
          <RestaurantLists>Home</RestaurantLists>
          <VectorIcon alt="" src="/vector-1.svg" />
          <RestaurantLists1>Restaurant lists</RestaurantLists1>
        </HomeParent>
      </RestaurantListsParent>
      <FrameDiv>
        <FrameParent3>
          <FrameParent1>
            <GreenwichParent>
              <Greenwich>Greenwich</Greenwich>
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
          </FrameParent1>
          <FrameParent1>
            <GreenwichParent>
              <Greenwich>Bermondsey</Greenwich>
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
          </FrameParent1>
          <FrameParent1>
            <GreenwichParent>
              <Greenwich>Bettersea</Greenwich>
              <Unit31Ropery>
                15-17 Ingate place, Battersea, SW8 3NS
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
          </FrameParent1>
          <FrameParent1>
            <FrameParent2>
              <GreenwichParent>
                <RestaurantLists>Streatham</RestaurantLists>
                <StreathamHillLondon>
                  82 Streatham Hill London SW2 4RD
                </StreathamHillLondon>
              </GreenwichParent>
              <BookATableWrapper>
                <RestaurantLists>Book a table</RestaurantLists>
              </BookATableWrapper>
            </FrameParent2>
            <Wrapper>
              <DeliveryOnly>0203 9826561</DeliveryOnly>
            </Wrapper>
            <FrameWrapper>
              <DaysParent>
                <Days>7 days</Days>
                <Am11pm>11am - 11pm</Am11pm>
              </DaysParent>
            </FrameWrapper>
          </FrameParent1>
          <FrameParent1>
            <GreenwichParent>
              <Greenwich>Camden</Greenwich>
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
          </FrameParent1>
          <FrameParent1>
            <FrameWrapper1>
              <ColchesterParent>
                <RestaurantLists>Colchester</RestaurantLists>
                <HighStreetColchester>
                  56 High Street Colchester Essex CO1 1DH
                </HighStreetColchester>
              </ColchesterParent>
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
          </FrameParent1>
        </FrameParent3>
        <Footer>
          <FooterChild />
          <FooterItem />
          <FooterInner />
          <HomeGroup>
            <RestaurantLists>Home</RestaurantLists>
            <RestaurantLists>Search</RestaurantLists>
            <RestaurantLists>Contact</RestaurantLists>
            <RestaurantLists>{`Nutrition & Allergens`}</RestaurantLists>
            <RestaurantLists>Intro</RestaurantLists>
            <RestaurantLists>Privacy policy</RestaurantLists>
            <RestaurantLists>Terms of service</RestaurantLists>
            <RestaurantLists>FAQ</RestaurantLists>
          </HomeGroup>
          <SushiAppRemovebgPreview2Icon
            alt=""
            src="/sushi-appremovebgpreview-2@2x.png"
          />
          <Image11Parent>
            <Image11Icon alt="" src="/image-11@2x.png" />
            <Image11Icon alt="" src="/image-12@2x.png" />
          </Image11Parent>
          <NowItWill>
            Now it will be easier to order our amazing hand made sushi from
            directly from your mobile phone.
          </NowItWill>
          <FrameParent4>
            <SubscribeToOurEmailsParent>
              <RestaurantLists>Subscribe to our emails</RestaurantLists>
              <BeTheFirst>
                Be the first to know about exclusive offers.
              </BeTheFirst>
            </SubscribeToOurEmailsParent>
            <EmailAddressParent>
              <EmailAddress>Email address</EmailAddress>
              <RestaurantLists>Submit</RestaurantLists>
            </EmailAddressParent>
          </FrameParent4>
          <Image14Icon alt="" src="/image-14@2x.png" />
          <Thesushico>© 2024, Thesushico</Thesushico>
          <VectorIcon1 alt="" src="/vector.svg" />
        </Footer>
      </FrameDiv>
      <Drac3161Icon alt="" src="/drac316-1@2x.png" />
    </StoresRoot>
  );
};

export default Stores1;
