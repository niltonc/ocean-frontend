import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 30px;
  background:${({theme})=> theme.colors.grey};
  bottom: 0;
  height: 165px;
  width: 100%;
`;

export const Svg = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
`
   
export const Container = styled.div`
    display: flex;
    color: ${({theme})=> theme.colors.black};
    font-weight: 500;
    justify-content: center;
    text-align: center; 
    max-width: 450px;
    margin: 0 auto;
`
export const Copyright = styled(Container)`
    color: #A3A3A3;
    margin-top: 18px;
`