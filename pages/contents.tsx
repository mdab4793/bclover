import Layout from './components/layout';
import styled from 'styled-components';
import Banner from './components/banner';
import Link from 'next/link';
export default function Contents() {
  return (
    <div>
      <Layout />

      <ContentsBack src='https://bclover-mobile.vicgame.jp/image/contents/contents_back_1920.webp' />
      <BannerWrapper>
        <Banner />{' '}
      </BannerWrapper>
      <ContentsHead>
        <div>CONTENTS</div>
        <div>
          コンテンツ
          <ContentsJap></ContentsJap>
        </div>
      </ContentsHead>
      <ContentsCardList>
        <ContentsCard>
          <ContentsComingImg src='https://bclover-mobile.vicgame.jp/svg/lock_contents.svg' />
          <ContentsComingSoon>COMING SOON</ContentsComingSoon>
        </ContentsCard>
        <ContentsClover src='https://bclover-mobile.vicgame.jp/svg/deco_contents.svg' />

        <ContentsCard>
          <ContentsCardImg src='https://bclover-mobile.vicgame.jp/image/contents/contents_world.webp' />
          <ContentsTextWrapper>
            <ContentsTextWrapperTitle>ワールド</ContentsTextWrapperTitle>
            <ContentsTextWrapperSubTitle>
              ＃冒険 ＃釣り
            </ContentsTextWrapperSubTitle>
          </ContentsTextWrapper>
        </ContentsCard>

        <ContentsClover src='https://bclover-mobile.vicgame.jp/svg/deco_contents.svg' />
        <Link href='contents/storyMode'>
          <ContentsCard>
            <ContentsCardImg src='https://bclover-mobile.vicgame.jp/image/contents/contents_story.webp' />
            <ContentsTextWrapper>
              <ContentsTextWrapperTitle>
                ストーリーモード
              </ContentsTextWrapperTitle>
              <ContentsTextWrapperSubTitle>
                #魔法の世界
              </ContentsTextWrapperSubTitle>
            </ContentsTextWrapper>
          </ContentsCard>{' '}
        </Link>
        <ContentsClover src='https://bclover-mobile.vicgame.jp/svg/deco_contents.svg' />
        <ContentsCard>
          <ContentsComingImg src='https://bclover-mobile.vicgame.jp/svg/lock_contents.svg' />
          <ContentsComingSoon>COMING SOON</ContentsComingSoon>
        </ContentsCard>
        <ContentsClover src='https://bclover-mobile.vicgame.jp/svg/deco_contents.svg' />
        <ContentsCard>
          <ContentsComingImg src='https://bclover-mobile.vicgame.jp/svg/lock_contents.svg' />
          <ContentsComingSoon>COMING SOON</ContentsComingSoon>{' '}
        </ContentsCard>
      </ContentsCardList>
    </div>
  );
}

const Back = styled.div``;
const BannerWrapper = styled.div`
  width: 260px;
  height: 90px;
  position: absolute;
  bottom: 750px;
  left: 1550px;
  border: solid 1px white;
`;

const ContentsBack = styled.img`
  width: 100%;
  height: 950px;
`;
const ContentsHead = styled.h1`
  position: absolute;
  width: 100%;
  bottom: 670px;
  left: 45%;
`;
const ContentsJap = styled.div`
  width: 10%;
  height: 22px;
  background: rgba(255, 255, 255, 0.16);
  position: absolute;
  left: -20px;
  top: 58px;
`;
const ContentsCardList = styled.div`
  display: flex;
  position: absolute;
  bottom: 220px;
  right: 10%;
`;
const ContentsCard = styled.div`
  background: linear-gradient(gray, black);
  width: 235px;
  height: 400px;
  margin-right: 50px;
  overflow: hidden;
  &:hover {
    transform: rotateY(15deg);
    transition: transform 0.5s;
  }
`;

const ContentsCardImg = styled.img`
  width: 235px;
  height: 400px;

  &:hover {
    transform: scale(1.3);
    transition: transform 0.5s;
  }
`;

const ContentsClover = styled.img`
  height: 100%;
  position: relative;
  top: 140px;
  right: 23px;
`;
const ContentsTextWrapper = styled.div`
  position: relative;
  bottom: 85px;
  text-align: center;
`;
const ContentsTextWrapperTitle = styled.div`
  font-size: 30px;
`;
const ContentsTextWrapperSubTitle = styled.div`
  font-size: 22px;
`;
const ContentsComingImg = styled.img`
  padding-left: 25%;
  padding-top: 130px;
`;
const ContentsComingSoon = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 25px;
  font-weight: bold;
  color: gray;
`;
const ContentsComingBack = styled.div`
  background-color: white;

  text-align: center;
  padding-top: 20px;
  font-size: 25px;
  font-weight: bold;
`;
const ContentsComingWrap = styled.div``;
