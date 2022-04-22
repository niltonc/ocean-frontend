import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({theme}) => theme.colors.white};
    width: 275px;
    height: 436px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 5px;
    border-radius: 10px;
`
export const Color = styled(Container)`
   background-color: ${({theme}) => theme.colors.secundary};
   //overflow: hidden;
   position: absolute;
   float: right; 
    height: 126px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius 0;

`

export const Title = styled.p`
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fonts.titlecard};
`
export const Column = styled.div`
    flex-direction: row;
    width: 100%;
`

export const DateTag = styled.div`
    background-color:${({theme}) => theme.colors.yellow};
    color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fonts.h2};
    width: 248px;
    height: 26px;
    border-radius:15px;
`

export const Button = styled.button`
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fonts.button};
    width: 248px;
    height: 52px;
    border: 0;
    border-radius:15px;
    font-weight: 500;
`