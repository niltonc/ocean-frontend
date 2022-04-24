import styled from 'styled-components';

export const ShowGrid = styled.div`
    background-color: ${({ theme }) => theme.colors.greylight};
    transition: all 1s ease-in-out;
    margin-top: 2%;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    height: 45px;
    display: flex;
`;
export const ShowGridText = styled.p`
    display: flex;
    color:${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.h1};
    font-weight: 600;

`;
