import { FunctionComponent } from "react";
import styled from "styled-components";

const ContactChild = styled.div`
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
const Contact1 = styled.div`
  position: relative;
  font-weight: 500;
  color: var(--color-linen-100);
`;
const HomeGroup = styled.div`
  position: absolute;
  top: 295px;
  left: 1281px;
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
const ReachOutTo = styled.p`
  margin: 0;
`;
const TheSushiCo = styled.p`
  margin: 0;
  color: var(--color-crimson);
`;
const ReachOutToContainer = styled.div`
  position: absolute;
  top: 160px;
  left: calc(50% - 680px);
  font-size: var(--font-size-45xl);
  font-weight: 600;
`;
const NameWrapper = styled.div`
  width: 316px;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-5xl);
  box-sizing: border-box;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-13xl);
`;
const FrameItem = styled.img`
  width: 10px;
  position: relative;
  height: 5px;
  object-fit: contain;
`;
const ChooseAStoreParent = styled.div`
  width: 316px;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-300);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-xl) var(--padding-5xl);
  box-sizing: border-box;
`;
const CommentWrapper = styled.div`
  width: 664px;
  border-radius: var(--br-xl);
  background-color: var(--color-linen-300);
  height: 140px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xl) var(--padding-5xl);
  box-sizing: border-box;
`;
const SubmitWrapper = styled.div`
  border-radius: var(--br-xl);
  background-color: var(--color-crimson);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  color: var(--color-white);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 418px;
  left: calc(50% - 332px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xl);
`;
const ForAnyOrderContainer = styled.div`
  position: relative;
  font-weight: 600;
  text-align: center;
`;
const Image16Icon = styled.img`
  width: 23.7px;
  position: relative;
  height: 24px;
  object-fit: cover;
`;
const Image16Parent = styled.div`
  width: 316px;
  border-radius: var(--br-xl);
  background-color: var(--color-green);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xl) var(--padding-21xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const ForFaqsFor = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  font-weight: 500;
`;
const ForAnyOrderRelatedIssuesParent = styled.div`
  position: absolute;
  top: 863px;
  left: calc(50% - 281px);
  border-radius: var(--br-xl);
  background-color: var(--color-linen-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-13xl);
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
const FrameDiv = styled.div`
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
const FrameInner = styled.div`
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
const ContactRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-100);
  height: 2040px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-linen-100);
  font-family: var(--font-urbanist);
`;

const Contact: FunctionComponent = () => {
  return (
    <ContactRoot>
      <ContactChild />
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
        <Contact1>Contact</Contact1>
      </HomeGroup>
      <VuesaxboldprofileCircleParent>
        <VuesaxboldprofileCircleIcon
          alt=""
          src="/vuesaxboldprofilecircle1.svg"
        />
        <VuesaxboldprofileCircleIcon alt="" src="/vuesaxboldbag1.svg" />
      </VuesaxboldprofileCircleParent>
      <ReachOutToContainer>
        <ReachOutTo>Reach out to</ReachOutTo>
        <TheSushiCo>The Sushi Co.</TheSushiCo>
      </ReachOutToContainer>
      <FrameParent>
        <FrameGroup>
          <NameWrapper>
            <Home>Name</Home>
          </NameWrapper>
          <NameWrapper>
            <Home>Email*</Home>
          </NameWrapper>
        </FrameGroup>
        <FrameGroup>
          <NameWrapper>
            <Home>Phone number</Home>
          </NameWrapper>
          <ChooseAStoreParent>
            <Home>Choose a store</Home>
            <FrameItem alt="" src="/vector-11.svg" />
          </ChooseAStoreParent>
        </FrameGroup>
        <CommentWrapper>
          <Home>Comment</Home>
        </CommentWrapper>
        <SubmitWrapper>
          <Home>Submit</Home>
        </SubmitWrapper>
      </FrameParent>
      <ForAnyOrderRelatedIssuesParent>
        <ForAnyOrderContainer>
          <ReachOutTo>For any order related issues,</ReachOutTo>
          <ReachOutTo>contact the stores directly.</ReachOutTo>
        </ForAnyOrderContainer>
        <FrameWrapper>
          <Image16Parent>
            <Image16Icon alt="" src="/image-16@2x.png" />
            <Home>Chat on Whatsapp</Home>
          </Image16Parent>
        </FrameWrapper>
        <ForFaqsFor>For FAQs for regular questions</ForFaqsFor>
      </ForAnyOrderRelatedIssuesParent>
      <Footer>
        <FooterChild />
        <VectorIcon alt="" src="/vector.svg" />
        <FrameDiv>
          <SubscribeToOurEmailsParent>
            <Home>Subscribe to our emails</Home>
            <ForFaqsFor>
              Be the first to know about exclusive offers.
            </ForFaqsFor>
          </SubscribeToOurEmailsParent>
          <EmailAddressParent>
            <EmailAddress>Email address</EmailAddress>
            <Home>Submit</Home>
          </EmailAddressParent>
        </FrameDiv>
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
          <FrameInner />
          <Home>Search</Home>
          <FrameInner />
          <Home>Contact</Home>
          <FrameInner />
          <Home>{`Nutrition & Allergens`}</Home>
          <FrameInner />
          <Home>Intro</Home>
          <FrameInner />
          <Home>Privacy policy</Home>
          <FrameInner />
          <Home>Terms of service</Home>
          <FrameInner />
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
    </ContactRoot>
  );
};

export default Contact;
