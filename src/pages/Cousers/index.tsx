import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Container, Title } from './styles';

export interface ICousersPageProps {}

const CousersPage: React.FunctionComponent<ICousersPageProps> = (props) => {
    
    return (     
        <div>
            <Header/>
            <Title>
                Cursos
            </Title>
            <Container>
           <CardContainer>
           <Card/>
      </CardContainer>
            </Container>
            <Footer/>
        </div>
    );
};

export default CousersPage;