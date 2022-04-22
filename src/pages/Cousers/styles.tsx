import styled from 'styled-components';

export const Title = styled.div`
    color: ${({theme})=> theme.colors.black};
    font-size: ${({theme})=> theme.fonts.title};
    font-weight: bold;
    margin-top: 30px;
    margin-left: 100px;
    margin-bottom: 30px;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`