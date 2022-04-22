import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Title } from '../../pages/Cousers/styles'

export interface ITreadsPageProps {}

const TreadsPage: React.FunctionComponent<ITreadsPageProps> = (props) => {
   

    return (
        <div>
             <Header/>
            <Title>
                Trilhas
            </Title>
           <Footer/>
        </div>
    );
};

export default TreadsPage;