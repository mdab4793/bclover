import Layout from '../components/layout';
import styled from 'styled-components';
import Banner from '../components/banner';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
export default function Story() {
  const [storyPopup, setStoryPopup] = useState(false);
  return (
    <div>
      <Header />
      <BannerWrapper>
        <Banner />
      </BannerWrapper>

      <StoryModeVideo>
        <video autoPlay loop muted>
          <source
            src='https://bclover-mobile-cqfrbqgyfxbaamg7.z01.azurefd.net/video/storyMode.mp4'
            type='video/mp4'
          />
        </video>
      </StoryModeVideo>
      <StoryModeSideContainer>
        <Link href='/contents'>
          <StoryModeSideImg src='https://bclover-mobile.vicgame.jp/svg/arrow_icon.svg' />
          <StoryModeSideText>戻る</StoryModeSideText>{' '}
        </Link>
      </StoryModeSideContainer>
      <StoryModeContainer>
        <StoryModeHead>
          <div>CONTENTS</div>
          <div>
            コンテンツ
            <StoryModeJap></StoryModeJap>
          </div>
        </StoryModeHead>
        <StoryModeTitle>ストーリーモード</StoryModeTitle>
        <StoryModeText>
          魔法の世界を体験しよう！
          <br /> アニメーションのストーリーをベースに <br />
          没入感の高い、様々なクエストを用意！
        </StoryModeText>
        <StoryModePlayArrowWrapper>
          <StoryModePlayContainer
            onClick={() => {
              setStoryPopup(true);
            }}
          >
            <StoryModePlayButton src='https://bclover-mobile.vicgame.jp/svg/play_video_arrow.svg' />{' '}
            <StoryModePlayText>映像を見る</StoryModePlayText>
          </StoryModePlayContainer>

          <StoryModeArrowLeft src='https://bclover-mobile.vicgame.jp/svg/arrow_icon.svg' />
          <StoryModeArrowRight src='https://bclover-mobile.vicgame.jp/svg/arrow_icon.svg' />

          <StoryModeNextWrapper>
            <StoryModeSideText>NEXT CONTENTS</StoryModeSideText>
            <StoryModeNextText>ワールド</StoryModeNextText>
          </StoryModeNextWrapper>
        </StoryModePlayArrowWrapper>
      </StoryModeContainer>
      {storyPopup == true ? (
        <StoryPopup setStoryPopup={setStoryPopup} storyPopup={false} />
      ) : null}
      <Text>※開発中の映像につき変更となる可能性があります。</Text>
      <Footer />
    </div>
  );
}
interface StoryProps {
  setStoryPopup: Dispatch<SetStateAction<boolean>>;
  storyPopup: boolean;
}
const StoryPopup: React.FunctionComponent<StoryProps> = ({ setStoryPopup }) => {
  return (
    <PopupContainer>
      <PopupVideo>
        <iframe
          width='1060'
          height='580'
          src='https://www.youtube.com/embed/P1fEBe5G20w'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </PopupVideo>{' '}
      <PopupVideoClose
        onClick={() => {
          setStoryPopup(false);
        }}
      >
        <img src='https://bclover-mobile.vicgame.jp/svg/close_btn.svg' />
      </PopupVideoClose>
    </PopupContainer>
  );
};
const BannerWrapper = styled.div`
  width: 260px;
  height: 90px;
  position: absolute;
  bottom: 750px;
  left: 1550px;
  border: solid 1px white;
`;

const StoryModeHead = styled.h1``;
const StoryModeJap = styled.div`
  width: 10%;
  height: 22px;
  background: rgba(255, 255, 255, 0.16);
  width: 150px;
  position: relative;
  bottom: 20px;
`;
const StoryModeVideo = styled.div`
  height: 950px;
`;
const StoryModeSideContainer = styled.div`
  position: absolute;
  left: 120px;
  bottom: 400px;
`;
const StoryModeSideImg = styled.img`
  transform: scaleX(-1);
  padding-left: 15px;
  padding-bottom: 3px;
  width: 50px;
`;
const StoryModeSideText = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const StoryModeContainer = styled.div`
  position: absolute;
  width: 700px;
  height: 500px;
  bottom: 150px;
  left: 20%;
  padding-top: 20px;
`;
const StoryModeTitle = styled.div`
  font-size: 40px;
  padding-top: 60px;
`;
const StoryModeText = styled.div`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 30px;
`;
const StoryModePlayArrowWrapper = styled.div`
  display: flex;
`;
const StoryModePlayContainer = styled.div`
  width: 240px;
  height: 55px;
  font-size: 22px;
  display: flex;
  border: solid 1px white;
  margin-right: 50px;
  border-radius: 3px;
  cursor: pointer;
`;
const StoryModePlayButton = styled.img`
  width: 10px;
  margin-left: 50px;
`;
const StoryModePlayText = styled.div`
  font-size: 24px;
  padding: 12px;
  padding-left: 24px;
`;

const StoryModeArrowLeft = styled.img`
  transform: scaleX(-1);
  width: 60px;
  height: 55px;
  border: solid 1px white;
  margin-right: 10px;
  padding: 14px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: rgba(259, 259, 259, 0.2);
  }
`;

const StoryModeArrowRight = styled.img`
  width: 60px;
  height: 55px;
  border: solid 1px white;
  padding: 12px;

  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: rgba(259, 259, 259, 0.2);
  }
`;
const StoryModeNextWrapper = styled.div`
  padding-top: 5px;
  padding-left: 20px;
`;
const StoryModeNextText = styled.div`
  font-size: 24px;
`;
const Text = styled.div`
  position: absolute;
  width: 100%;
  top: 830px;
  left: 1450px;
  font-size: 16px;
  color: gray;
`;
const PopupContainer = styled.div`
  position: fixed;
  place-content: center;
  inset: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  animation: 0.5s ease 0s 1 normal forwards running fadeIn;
  z-index: 100;
`;
const PopupVideo = styled.div`
  position: absolute;
  left: 400px;
  top: 165px;
`;
const PopupVideoClose = styled.div`
  position: absolute;
  left: 1480px;
  top: 165px;
  cursor: pointer;
`;
