import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Container, Title } from './styles';

export interface ICousersPageProps {}

const CousersPage: React.FunctionComponent<ICousersPageProps> = () => (
  <div>
    <Header />
    <Title>
      Cursos
    </Title>
    <Container>
      <Card />
    </Container>
    <Footer />
  </div>
);

export default CousersPage;
