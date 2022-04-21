import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface ISchedulePageProps {}

const SchedulePage: React.FunctionComponent<ISchedulePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>PAGINA AGENDA</p>
            <p>
                <Link to="/">Go to the About Page!</Link>
            </p>
            <p>
                <Link to="/trilhas">Go to the Test Page!</Link>
            </p>
            <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
        </div>
    );
};

export default SchedulePage;