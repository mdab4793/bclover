import Layout from './components/layout';
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Banner from './components/banner';
import Title from './components/title';
export default function Home() {
  return (
    <div>
      <title>
        ブラッククローバーモバイル 魔法帝への道 The Opening of Fate(ブラクロモ)
      </title>
      <Header />
      <Main>
        <video autoPlay loop muted>
          <source
            src='https://bclover-mobile-cqfrbqgyfxbaamg7.z01.azurefd.net/video/main.mp4'
            type='video/mp4'
          />
        </video>{' '}
        <BannerWrapper>
          <Banner />
        </BannerWrapper>
        <Title />
        <Text>※開発中の映像につき変更となる可能性があります。</Text>
      </Main>{' '}
      <Footer />
    </div>
  );
}

const Main = styled.main`
  width: 100%;
  height: 940px;
  z-index: 20;
`;
const Text = styled.div`
  position: absolute;
  width: 100%;
  top: 830px;
  left: 1450px;
  font-size: 16px;
  color: gray;
`;
const BannerWrapper = styled.div`
  width: 260px;
  height: 90px;
  position: absolute;
  bottom: 750px;
  left: 1550px;
  border: solid 1px white;
`;
