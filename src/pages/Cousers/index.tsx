import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import * as Text from './styles';

export interface ICousersPageProps {}

const CousersPage: React.FunctionComponent<ICousersPageProps> = (props) => {
    
    const navigate = useNavigate();

    return (
                
        <div>
            <Header/>
            <Text.Text>PAGINA CURSOS</Text.Text>
            <p>
                <Link to="/agenda">Go to the About Page!</Link>
            </p>
            
            <p>

                <Link to="/trilhas">Go to the Test Page!</Link>
            </p>
            <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
        </div>
    );
};

export default CousersPage;