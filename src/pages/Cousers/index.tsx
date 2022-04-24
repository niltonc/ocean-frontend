import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Container, Title } from './styles';

function CousersPage() {
  return (
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
}

export default CousersPage;
