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
export const CardContainer = styled.div`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
`
export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(4, 1fr);
  //grid-template-rows: 100px 100px
  grid-gap: 5px
`;