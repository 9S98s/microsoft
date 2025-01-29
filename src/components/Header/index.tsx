import * as S from './style';
import Logo from '/assets/Logo.png';

const Header = () => {
    return (
        <S.Container>
            <S.Logo src={Logo} alt="로고" />
        </S.Container>
    )
}

export default Header