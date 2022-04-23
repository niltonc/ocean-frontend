import styled from 'styled-components';

export const Nav = styled.header`
    width: 100%;
    height: 60px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
        color: ${({ theme }) => theme.colors.blue};
        font-weight: 500;
        text-decoration: none;
    }
`;
export const Svg = styled.div`
    height: 25px;
`;
export const Links = styled.div`
    width: 30%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
