import styled from 'styled-components';

interface InternalWrapperProps{
 open: boolean;
}

export const AccordionWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    width: 275px;
    height: 436px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 5px;
    border-radius: 10px;
    height: auto;
    transition: all 0.6s ease-in-out;
`;

export const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '300px' : '0')};
    transition: all 1s ease-in-out;
    overflow: hidden;
`;

export const ButtonWrapper = styled.button`
border: 0px;
background-color: transparent;
`;

export const TextWrapper = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: 13px;
    font-weight: 600;
    text-align: start;
    width: 120px;
`;
export const RowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 40px;
`;
export const RowAccordion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 236px;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
`;
export const RowText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
`;
export const ColWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`;

export const RowAccordion2 = styled.div`
    background-color: #FAFAFA;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 236px;
    height: 40px;
    border-radius: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
`;

export const TextAccordion1 = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.h1};
    font-weight: 600;
    display: flex;
    width: 150px;
    margin-left:20px;
`;

export const TextAccordion2 = styled.p`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fonts.h1};
    font-weight: 600;
    display: flex;
`;

export const Svg = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 30px;
`;
