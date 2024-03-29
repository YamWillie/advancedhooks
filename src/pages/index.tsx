import React from "react"
import styled from "styled-components"
import { useWindowSize } from "react-use"

import SEO from "../components/layout/seo"
import PurchaseButton from "../components/buttons/PurchaseButton"
import CourseCard from "../components/cards/CourseCard"
import FlutterBuild from "../components/animations/FlutterBuild"
import GridSection from "../components/sections/GridSection"

function IndexPage() {
  const { width } = useWindowSize()

  return (
    <Wrapper>
      <SEO title="Home" />
      <HeroWrapper>
        <CourseCard />
        <TextWrapper>
          <Logo src="/images/logos/react-logo.svg" alt="logo" />
          <Title>Build a SwiftUI app for iOS 14</Title>
          <Caption>20 sections - 3 hours of video</Caption>
          <Description>
            Build a multi-platform app for iOS, iPadOS and Big Sur
          </Description>
          <AuthorWrapper>
            <AvatarImage src="/images/avatars/Meng.png" alt="avatar" />
            <Caption>Taught by Meng To</Caption>
          </AuthorWrapper>
          <PurchaseButton />
          <SmallText>
            Purchase includes access to 30 courses. Over 80 hours of content,
            including 12 hours for SwiftUI, for iOS 13 and iOS 14.
          </SmallText>
        </TextWrapper>
      </HeroWrapper>
      <Divider />
      <GridSection />
      <FlutterWrapper width={width}>
        <FlutterBuild />
      </FlutterWrapper>
    </Wrapper>
  )
}

export default IndexPage

const Wrapper = styled.div`
  background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
  overflow: hidden;
`

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 220px 20px 0px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .courseCard {
    margin-top: 39px;
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (max-width: 780px) {
    justify-items: center;
    text-align: center;
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
`

const Title = styled.h1`
  max-width: 500px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 72px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 15px;
  line-height: 130%;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
  max-width: 400px;
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  color: #ffffff;
`

const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
`

const SmallText = styled.p`
  max-width: 280px;
  font-family: SF Pro Text;
  font-style: normal;
  font-size: 13px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.7);
`

const FlutterWrapper = styled.div`
  margin: 100px auto;

  @media (max-width: 1440px) {
    transform-origin: top left;
    transform: scale(${props => props.width / 1440});
  }
`

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 60px auto 32px;
`
