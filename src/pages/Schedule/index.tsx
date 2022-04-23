import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Title } from '../../pages/Cousers/styles';

export interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = () => (
  <div>
    <Header />
    <Title>
      Agenda
    </Title>
    <Footer />
  </div>
);

export default SchedulePage;
