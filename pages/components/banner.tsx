import styled from 'styled-components';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubBanner from './subBanner';
export default function Banner() {
  return (
    <div>
      <TwitContainer>
        <Link href='https://twitter.com/bclover_mobile' target='_blank'>
          <TwitBanner>
            <TwitLetterOne>公式Twitter</TwitLetterOne>
            <TwitWrapper>
              <TwitLetterTwo>最新情報を見る</TwitLetterTwo>
              <TwitArrowImg src='https://bclover-mobile.vicgame.jp/svg/arrow_icon.svg' />
            </TwitWrapper>

            <TwitImg src='https://bclover-mobile.vicgame.jp/image/tw_btn_2x.webp' />
          </TwitBanner>{' '}
        </Link>
      </TwitContainer>
      <SubBanner />
    </div>
  );
}

const TwitContainer = styled.div`
  // width: 260px;
  // height: 90px;
  // position: absolute;
  // bottom: 700px;
  // left: 1550px;
  // background-color: rgba(251, 251, 251, 0.2);
  // border: solid 1px white;
  // border-radius: 3px;
`;
const TwitBanner = styled.div`
  padding: 20px;
`;
const TwitImg = styled.img`
  width: 258px;
  height: 120px;
  position: absolute;
  bottom: 0px;
  left: 0px;
`;
const TwitLetterOne = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const TwitLetterTwo = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
const TwitWrapper = styled.div`
  display: flex;
`;
const TwitArrowImg = styled.img`
  width: 22px;
  height: auto;
  margin-left: 8px;
  padding-bottom: 5px;
`;
