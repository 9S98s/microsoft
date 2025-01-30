import * as S from './style';
import BannerImg from '/assets/Banner.png';

const BannerComponent = () => {
  return (
    <S.Container>
      <S.Banner src={BannerImg} alt="배너 이미지" />
      <S.Text>뛰어난 성과 달성</S.Text>
      <S.Descript>
        Microsoft 365는 하나의 요금제로 클라우드 저장소, 보안, 자주 사용하는
        <br />앱에서의 Microsoft Copilot을 제공합니다.
      </S.Descript>
    </S.Container>
  );
};

export default BannerComponent;