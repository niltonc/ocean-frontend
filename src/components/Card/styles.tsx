import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 275px;
    height: 436px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 5px;
    border-radius: 10px;
`;
export const Color = styled(Container)`
    background-color: ${({ theme }) => theme.colors.secundary};
    position: absolute;
    height: 126px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;
export const SvgDiv = styled.div`
    position: absolute;
    top: 15px;
    left: 13px;
`;
export const Title = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.titlecard};
    position: absolute;
    width: 250px;
    height: 50px;
    top: 60px;
    left: 10px;
`;
export const Information = styled.div`
    position: absolute;
    width: 250px;
    height: 170px;
    top: 145px;
    left: 10px;
`;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
`;
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    width: 100px;
`;
export const H3 = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.h3};
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const H1 = styled(H3)`
    font-size: ${({ theme }) => theme.fonts.h1};
`;

export const DateTag = styled.div`
    background-color:${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.black};
    position: absolute;
    border-radius:14px;
    width: 230px;
    height: 26px;
    top: 325px;
    left: 19px;
`;
export const TextTag = styled.p`
    font-size: ${({ theme }) => theme.fonts.h4};
    position: absolute;
    left: 21px;
    top: 8px;
`;
export const Button = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.button};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 5px;
    position: absolute;
    width: 248px;
    height: 52px;
    border: 0;
    top: 365px;
    left: 10px;
    border-radius:15px;
    font-weight: 500;
`;
export const CardContainer = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`;
