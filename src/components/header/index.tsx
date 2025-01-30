import * as S from './style';
import Logo from '/assets/Logo.png';

const Header = () => {
    return (
        <S.Container>
            <S.Logo src={Logo} alt="로고" />
            <S.Nav>
                <S.NavItem>Microsoft 365</S.NavItem>
                <S.NavItem>Teams</S.NavItem>
                <S.NavItem>Copilot</S.NavItem>
                <S.NavItem>Windows</S.NavItem>
                <S.NavItem>Surface</S.NavItem>
                <S.NavItem>Xbox</S.NavItem>
                <S.NavItem>세일</S.NavItem>
                <S.NavItem>지원</S.NavItem>
            </S.Nav>
        </S.Container>
    )
}

export default Header