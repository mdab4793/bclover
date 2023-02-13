import styled from 'styled-components';
import { Dispatch, SetStateAction, useState } from 'react';
export default function Title() {
  const [isPopup, setIsPopup] = useState(false);
  return (
    <div>
      <TitleContainer>
        <TitleContainerImg src='https://bclover-mobile.vicgame.jp/image/bc_main_logo_jp.webp'></TitleContainerImg>
        <SubContainer>
          <div>ブラッククローバーの</div>
          <div>世界をゲームで体験！</div>
          <SubLine></SubLine>
          <SubWrapper
            onClick={() => {
              setIsPopup(true);
            }}
          >
            <img src='https://bclover-mobile.vicgame.jp/svg/main_play_icon.svg' />
            <div>トレーラーを見る</div>
          </SubWrapper>
        </SubContainer>
      </TitleContainer>
      {isPopup == true ? (
        <VideoPopup setIsPopup={setIsPopup} isPopup={false} />
      ) : null}
    </div>
  );
}
interface PopupProps {
  setIsPopup: Dispatch<SetStateAction<boolean>>;
  isPopup: boolean;
}
const VideoPopup: React.FunctionComponent<PopupProps> = ({ setIsPopup }) => {
  return (
    <PopupContainer>
      <PopupVideo>
        <iframe
          width='1060'
          height='580'
          src='https://www.youtube.com/embed/dQ6RVJOFYnQ'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <PopupVideoClose
          onClick={() => {
            setIsPopup(false);
          }}
        >
          <img src='https://bclover-mobile.vicgame.jp/svg/close_btn.svg' />
        </PopupVideoClose>
      </PopupVideo>
    </PopupContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 230px;
  left: 130px;
  font-size: 30px;
  line-height: 42px;
  font-weight: 700;
`;

const TitleContainerImg = styled.img``;
const SubContainer = styled.div`
  padding: 100px;
`;
const SubWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  margin-top: 5px;
  cursor: pointer;
`;
const SubLine = styled.div`
  min-width: 260px;
  width: 80%;
  height: 1px;
  margin-top: 10px;
  background-color: rgba(251, 251, 251, 0.5);
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
  left: 1080px;
  top: 0px;
  cursor: pointer;
`;
