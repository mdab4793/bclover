import styled from 'styled-components';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function SubBanner() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // 좌,우 버튼
  };
  return (
    <GlayContainer>
      <GlayWrapper>
        <Slider {...settings}>
          <Link
            href='https://www.youtube.com/watch?v=xf72k5iNoZg&feature=youtu.be'
            target='_blank'
          >
            <GlayImg src='https://bclover-mobile.vicgame.jp/image/glay_banner_asta.webp' />
          </Link>
          <Link
            href='https://www.youtube.com/watch?v=jg77dLsQIww'
            target='_blank'
          >
            <GlayImg src='https://bclover-mobile.vicgame.jp/image/banner_jp.webp' />
          </Link>
        </Slider>{' '}
        {/* <div>"1""/""2"</div> */}
      </GlayWrapper>
    </GlayContainer>
  );
}
const GlayContainer = styled.div`
  //   width: 260px;
  //   height: 90px;
  //   position: absolute;
  //   bottom: 600px;
  //   left: 1550px;
  //   border: solid 1px white;
`;

const GlayWrapper = styled.div`
  top: -12.5px;
`;
const GlayImg = styled.img`
  width: 258px;
  height: 100px;
  padding-bottom: 0px;
`;
