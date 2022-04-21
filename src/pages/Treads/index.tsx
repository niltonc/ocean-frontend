import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface ITreadsPageProps {}

const TreadsPage: React.FunctionComponent<ITreadsPageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>PAGINA TRILHAS</p>
            
            <p>
                <Link to="/">Go to the About Page!</Link>
            </p>

            <p>
                <Link to="/agenda">Go to the Test Page!</Link>
            </p>
        </div>
    );
};

export default TreadsPage;