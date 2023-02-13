import styled from 'styled-components';
import Link from 'next/link';
export default function Footer() {
  return (
    <div>
      <FooterBox>
        <Youtube>
          <Link
            href='https://www.youtube.com/channel/UCZdtBsOJZPg9teUyKaqSXgg'
            target='_blank'
          >
            <img src='https://bclover-mobile.vicgame.jp/svg/brand_youtube_white.svg' />{' '}
          </Link>
        </Youtube>
        <Link href='https://twitter.com/bclover_mobile' target='_blank'>
          <Twitter>
            <img src='https://bclover-mobile.vicgame.jp/svg/brand_twitter_white.svg' />
          </Twitter>
        </Link>
        <div>
          <img src='https://bclover-mobile.vicgame.jp/svg/solid_globe_white.svg' />
          JP
        </div>
      </FooterBox>
    </div>
  );
}

const FooterBox = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  top: 870px;
  left: 1500px;
  color: gray;
`;
const Youtube = styled.div`
  padding-right: 65px;
`;

const Twitter = styled.div`
  padding-right: 120px;
`;
