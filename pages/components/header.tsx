import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SubBanner from './subBanner';

export default function Header() {
  const [isShare, setIsShare] = useState<Boolean>(false);
  const [isMenu, setIsMenu] = useState<Boolean>(false);

  return (
    <div>
      <header>
        <Head>
          <Link href='/'>
            <HeadImg>
              <div>
                <img src='https://bclover-mobile.vicgame.jp/image/bc_logo_wh_jp.webp' />
              </div>
            </HeadImg>
          </Link>
          <HeadNav>
            <HeadNavMenu>プロローグ</HeadNavMenu>
            <HeadNavMenu>キャラクター</HeadNavMenu>
            <Link href='/contents'>
              <HeadNavMenu> コンテンツ</HeadNavMenu>
            </Link>
            <HeadNavMenu>世界</HeadNavMenu>
            <HeadNavMenu>ギャラリー</HeadNavMenu>
            <div
              onClick={() => {
                setIsShare(!isShare);
              }}
            >
              <img src='https://bclover-mobile.vicgame.jp/svg/share_icon.svg' />
            </div>
            <div
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            >
              <img
                src='
            https://bclover-mobile.vicgame.jp/svg/sidemenu_icon.svg'
              />
            </div>
          </HeadNav>
        </Head>{' '}
      </header>{' '}
      {isShare == true ? (
        <ShareModal isShare={isShare} setIsShare={setIsShare} />
      ) : null}
      {isMenu == true ? (
        <SideNav isMenu={isMenu} setIsMenu={setIsMenu} />
      ) : null}{' '}
    </div>
  );
}
interface ShareProps {
  setIsShare: Dispatch<SetStateAction<Boolean>>;
  isShare: Boolean;
}

const ShareModal: React.FunctionComponent<ShareProps> = ({ setIsShare }) => {
  const currentUrl = window.location.href;
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareClose
          onClick={() => {
            setIsShare(false);
          }}
        >
          <img src='https://bclover-mobile.vicgame.jp/svg/close_btn.svg' />
        </ShareClose>
        <ShareBox>
          <ShareBoxTitle>ページ共有する</ShareBoxTitle>
          <ShareBoxList>
            <Link
              href='https://www.facebook.com/sharer/sharer.php?u=https://bclover-mobile.vicgame.jp/'
              target='_blank'
            >
              <ShareBoxListSns>
                <img src='https://bclover-mobile.vicgame.jp/svg/brand_facebook_white.svg' />
              </ShareBoxListSns>
            </Link>
            <Link
              href='https://twitter.com/intent/tweet?url=https://bclover-mobile.vicgame.jp/</ShareWrapper>'
              target='_blank'
            >
              <ShareBoxListSns>
                <img src='https://bclover-mobile.vicgame.jp/svg/brand_twitter_white.svg' />
              </ShareBoxListSns>
            </Link>
            <CopyToClipboard text={currentUrl}>
              <ShareBoxListSns
                onClick={() => {
                  alert('URL복사완료');
                }}
              >
                <img src='https://bclover-mobile.vicgame.jp/svg/copylink_icon.svg' />{' '}
              </ShareBoxListSns>
            </CopyToClipboard>
          </ShareBoxList>
        </ShareBox>
      </ShareWrapper>
    </ShareContainer>
  );
};
interface MenuProps {
  setIsMenu: Dispatch<SetStateAction<Boolean>>;
  isMenu: Boolean;
}

const SideNav: React.FunctionComponent<MenuProps> = ({ setIsMenu }) => {
  return (
    <div>
      <SideContainer>
        <SideWrapper>
          <SideTitle>
            <img src='https://bclover-mobile.vicgame.jp/image/bc_logo_sm_bk_jp.webp' />
            <SideClose
              onClick={() => {
                setIsMenu(false);
              }}
              src='https://bclover-mobile.vicgame.jp/svg/close_btn_black.svg'
            />
          </SideTitle>
          <SideMenuList>
            <SideMenu>ホーム</SideMenu>
            <SideMenu>プロローグ</SideMenu>
            <SideMenu>キャラクター</SideMenu>
            <Link href='/contents'>
              <SideMenu>コンテンツ</SideMenu>
            </Link>
            <SideMenu>世界</SideMenu>
            <SideMenu>ギャラリー</SideMenu>
          </SideMenuList>

          <SubBannerWrapper>
            <SubBanner />
          </SubBannerWrapper>
        </SideWrapper>{' '}
        <SideMenuEtc>
          <SideMenuEtcText>公式</SideMenuEtcText>
          <Link
            href='https://www.youtube.com/channel/UCZdtBsOJZPg9teUyKaqSXgg'
            target='_blank'
          >
            <SideMenuEtcImg src='https://bclover-mobile.vicgame.jp/svg/brand_youtube.svg' />
          </Link>
          <Link href='https://twitter.com/bclover_mobile' target='_blank'>
            <SideMenuEtcImg src='https://bclover-mobile.vicgame.jp/svg/brand_twitter.svg' />
          </Link>
        </SideMenuEtc>
      </SideContainer>{' '}
    </div>
  );
};

const Head = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  width: 100%;
  font-weight: 500;
  font-size: 21px;
  &:hover {
    background-color: rgb(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out 0s;
  }
`;
const HeadImg = styled.div`
  padding-left: 70px;
  padding-top: 20px;
  padding-right: 500px;
`;

const HeadNav = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 8px;
  justify-content: space-around;
  cursor: pointer;
`;
const HeadNavMenu = styled.div`
  &:hover {
    text-decoration: underline;
  }
`;
const ShareContainer = styled.div`
  position: fixed;
  place-content: center;
  inset: 0px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  animation: 0.5s ease 0s 1 normal forwards running fadeIn;
  z-index: 100;
`;

const ShareWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShareBox = styled.div`
  width: 360px;
  height: 210px;
  padding: 0px;
  background-color: white;
  z-index: 100;
`;
const ShareBoxTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-top: 50px;
  color: black;
  text-align: center;
`;
const ShareBoxList = styled.div`
  display: flex;
  list-style: none;
  padding-top: 20px;
  position: relative;
  left: 22.5%;
`;
const ShareBoxListSns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  width: 55px;
  height: 55px;
  margin-right: 20px;
  cursor: pointer;
`;
const ShareClose = styled.div`
  position: relative;
  left: 22%;
  bottom: 80px;
`;

const SideContainer = styled.nav`
  height: 100%;
  width: 720px;
  position: fixed;
  background-color: rgb(255, 255, 255);
  top: 0px;
  z-index: 11;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: 'M PLUS 1';
  transition: all 0.4s ease 0s;
  opacity: 1;
  right: 0px;
`;
const SideWrapper = styled.div`
  width: 540px;
  padding-bottom: 150px;
`;
const SideTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

const SideClose = styled.img`
  cursor: pointer;
`;
const SideMenuList = styled.div`
  color: black;
  font-size: 24px;
  padding: 10px;
  font-weight: bold;
`;
const SideMenu = styled.div`
  padding: 10px;
`;
const SubBannerWrapper = styled.div``;
const SideMenuEtc = styled.div`
  position: absolute;
  top: 730px;
  left: 120px;
  cursor: pointer;
`;
const SideMenuEtcText = styled.p`
  position: absolute;
  bottom: 5px;
  left: 0px;
  color: gray;
  font-size: 20px;
  font-weight: bold;
`;
const SideMenuEtcImg = styled.img`
  width: 28px;
  position: relative;
  left: 20px;
  height: auto;
  margin-left: 45px;
`;
