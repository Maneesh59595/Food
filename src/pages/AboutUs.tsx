import { FunctionComponent } from "react";
import styled from "styled-components";

const AboutUsChild = styled.div`
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
  font-size: var(--font-size-base);
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
const About = styled.p`
  margin: 0;
`;
const TheSushiCo = styled.p`
  margin: 0;
  color: var(--color-crimson);
`;
const AboutTheSushiContainer = styled.div`
  position: absolute;
  top: 160px;
  left: calc(50% - 192px);
  font-size: var(--font-size-45xl);
  font-weight: 600;
  text-align: center;
`;
const The = styled.span`
  color: var(--color-linen-100);
`;
const SushiCoresponsible = styled.span``;
const BoxFreshSushi = styled.p`
  margin: 0;
  color: var(--color-linen-100);
`;
const TheSushiCoresponsibleBoxFWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const AtTheSushiContainer = styled.div`
  width: 664px;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  color: var(--color-linen-100);
  display: inline-block;
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
  color: var(--color-crimson);
`;
const SushiRice = styled.span`
  color: var(--color-crimson);
`;
const RiceIsSushi = styled.div`
  width: 664px;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  white-space: pre-wrap;
  display: inline-block;
`;
const FrameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-13xl);
`;
const WeHaveTheContainer = styled.div`
  width: 664px;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 474px;
  left: calc(50% - 332px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 80px;
  text-align: center;
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
const FrameParent1 = styled.div`
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
const FrameChild = styled.div`
  width: 4px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-linen-100);
  height: 4px;
  opacity: 0.5;
`;
const HomeGroup = styled.div`
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
`;
const Untitled12Icon = styled.img`
  width: 395px;
  position: relative;
  height: 391px;
  object-fit: cover;
`;
const Untitled11Icon = styled.img`
  width: 395px;
  position: relative;
  height: 391px;
  object-fit: contain;
`;
const Untitled12Parent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 607px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 423px;
`;
const AboutUsRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-gray-100);
  height: 2761px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-21xl);
  color: var(--color-linen-100);
  font-family: var(--font-urbanist);
`;

const AboutUs: FunctionComponent = () => {
  return (
    <AboutUsRoot>
      <AboutUsChild />
      <Image3Icon alt="" src="/image-3@2x.png" />
      <HomeParent>
        <Home>Home</Home>
        <Home>Menu</Home>
        <Home>Contact</Home>
        <Home>Stores</Home>
        <Home>Franchise</Home>
      </HomeParent>
      <VuesaxboldprofileCircleParent>
        <VuesaxboldprofileCircleIcon
          alt=""
          src="/vuesaxboldprofilecircle1.svg"
        />
        <VuesaxboldprofileCircleIcon alt="" src="/vuesaxboldbag1.svg" />
      </VuesaxboldprofileCircleParent>
      <AboutTheSushiContainer>
        <About>About</About>
        <TheSushiCo>The Sushi Co.</TheSushiCo>
      </AboutTheSushiContainer>
      <FrameParent>
        <FrameGroup>
          <TheSushiCoresponsibleBoxFWrapper>
            <Home>
              <About>
                <The>{`The `}</The>
                <SushiCoresponsible>Sushi Co–Responsible</SushiCoresponsible>
              </About>
              <BoxFreshSushi>box fresh sushi.</BoxFreshSushi>
            </Home>
          </TheSushiCoresponsibleBoxFWrapper>
          <AtTheSushiContainer>
            <About>
              At The Sushi Co. we follow the path less trodden to seek out the
              highest quality ingredients for our live sushi kitchens, without
              compromising the environment that they come from. 
            </About>
            <About>&nbsp;</About>
            <About>
              Our dedicated team works with a small hand-picked and highly
              accredited group of suppliers who deliver vibrant, eye-catching
              and flavoursome ingredients to our kitchens daily.
            </About>
            <About>&nbsp;</About>
            <About>
              Once our team takes hold of these fresh ingredients, we follow
              authentic Japanese processes to prepare our handmade Minutes Fresh
              Sushi. From the size of slices taken from our Scottish sashimi
              grade salmon, to our slightly soured specialist sushi rice being
              the perfect bed for our fish or vegetables. We’re proud to take
              all the necessary extra steps to provide great quality sushi
              whilst doing our bit to be responsible in how we go about it. 
            </About>
          </AtTheSushiContainer>
        </FrameGroup>
        <FrameContainer>
          <TheSushiCoresponsibleBoxFWrapper>
            <Home>
              <About>We don’t use any rice.</About>
              <About>
                <SushiCoresponsible>{`we use `}</SushiCoresponsible>
                <SushiRice>sushi rice</SushiRice>
                <The>.</The>
              </About>
            </Home>
          </TheSushiCoresponsibleBoxFWrapper>
          <RiceIsSushi>{`Rice is sushi, that’s why we use the same rice you’ll find in the UKs top sushi restaurants. Carefully milled in the Po Valley, Northern Italy. Mother nature’s rich Mediterranean sun melts the snow sitting high on the Alps giving the rice fields we source from everything they need to grow.  Our premium grade short grain rice is designed specifically for sushi – its texture and natural stickiness is perfect for sushi. `}</RiceIsSushi>
        </FrameContainer>
        <FrameContainer>
          <TheSushiCoresponsibleBoxFWrapper>
            <Home>
              <About>Fresh fish daily from</About>
              <TheSushiCo>
                <SushiCoresponsible>award-winning</SushiCoresponsible>
                <The> fisheries.  </The>
              </TheSushiCo>
            </Home>
          </TheSushiCoresponsibleBoxFWrapper>
          <WeHaveTheContainer>
            <About>{`We have the highest standards when sourcing our fresh fish suppliers. Whether it’s our 50-year-old Scottish Salmon farm or our cutting-edge 100% sustainable Dutch Yellowtail supplier, both are proud to have been accredited by the Aquaculture Stewardship Council (ASC) for making every step of their processes as sustainable as possible. `}</About>
            <About>&nbsp;</About>
            <About>{`Our Dutch Yellowtail are organically fed with the highest-grade antibiotic free feed, resulting in high levels of Omega 3. Our Scottish Salmon are nurtured in hatcheries on the banks of Loch Creran and use RAS technology to ensure the best growing conditions are provided. `}</About>
          </WeHaveTheContainer>
        </FrameContainer>
      </FrameParent>
      <Footer>
        <FooterChild />
        <VectorIcon alt="" src="/vector.svg" />
        <FrameParent1>
          <SubscribeToOurEmailsParent>
            <Home>Subscribe to our emails</Home>
            <BeTheFirst>
              Be the first to know about exclusive offers.
            </BeTheFirst>
          </SubscribeToOurEmailsParent>
          <EmailAddressParent>
            <EmailAddress>Email address</EmailAddress>
            <Home>Submit</Home>
          </EmailAddressParent>
        </FrameParent1>
        <FooterItem />
        <NowItWill>
          Now it will be easier to order our amazing hand made sushi from
          directly from your mobile phone.
        </NowItWill>
        <Image11Parent>
          <Image11Icon alt="" src="/image-11@2x.png" />
          <Image11Icon alt="" src="/image-12@2x.png" />
        </Image11Parent>
        <HomeGroup>
          <Home>Home</Home>
          <FrameChild />
          <Home>Search</Home>
          <FrameChild />
          <Home>Contact</Home>
          <FrameChild />
          <Home>{`Nutrition & Allergens`}</Home>
          <FrameChild />
          <Home>Intro</Home>
          <FrameChild />
          <Home>Privacy policy</Home>
          <FrameChild />
          <Home>Terms of service</Home>
          <FrameChild />
          <Home>FAQ</Home>
        </HomeGroup>
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
      <Untitled12Parent>
        <Untitled12Icon alt="" src="/untitled1-2@2x.png" />
        <Untitled11Icon alt="" src="/untitled1-1@2x.png" />
      </Untitled12Parent>
    </AboutUsRoot>
  );
};

export default AboutUs;
