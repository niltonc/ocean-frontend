import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Container, CardContainer,Title, Row, Col, Grid } from './styles';
// do component card
import * as C from '../../components/Card/styles';
import IconArrowDwon from '../../assets/arrowdown';
import IconArrowUp from '../../assets/arrowup';
import IconBook from '../../assets/book';
import IconCalendar from '../../assets/calendar';
import IconDegree from '../../assets/degree';
import IconHeaderCard from '../../assets/headercard';
import IconHour from '../../assets/hour';
import IconLocation from '../../assets/location';
import IconUser from '../../assets/user';
// 
import { arrayCoursers } from './data';

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
           {arrayCoursers.map((courser) => (
            <C.Container>
            <C.Color>
            <C.SvgDiv>
            <IconHeaderCard/>
            </C.SvgDiv>
            
            <C.Title>
                {/* WebServices com Retrofit e
                Imagens Glide */}
                {courser.title}
            </C.Title>

            <C.Information>
                <C.Row>
                <IconCalendar/>
                <C.Col>
                <C.H3>INÍCIO EM</C.H3>
                <C.H1>
                    {/* 12/01 às 16:00 */}
                    {courser.startTime}
                    </C.H1>
                
                </C.Col>

                <IconCalendar/>
                <C.Col>
                <C.H3>TÉRMINO</C.H3>
                <C.H1>
                    {/* 16/01 */}
                     {courser.endDate}
                    </C.H1> 
                </C.Col>
                </C.Row>

                <C.Row>
                <IconBook/>
                <C.Col>
                <C.H3>3 AULAS</C.H3>
                </C.Col>

                <IconHour/>
                <C.Col>
                <C.H3>12H TOTAL</C.H3>
                </C.Col>
                </C.Row>

                <C.Row>
                <IconUser/>
                <C.Col>
                <C.H3>
                    {/* PAULO SALVATORE, MARIA DA BAHIA, E JOAO DO PEDREGULHO000000 */}
                {courser.speakers}

                </C.H3>
                </C.Col>

                <IconLocation/>
                <C.Col>
                <C.H3>
                    {/* CAMPOS MANAUS */}
                    {courser.campus}
                </C.H3> 
                </C.Col>
                </C.Row>
            </C.Information>

            <C.DateTag>
                <C.TextTag>
                    {/* INCRIÇÕES ABERTAS A PARTIR DE 11/O1 */}
                    {courser.enrollmentsStart}
                </C.TextTag>
                
            </C.DateTag>

            <C.Button>
                {/* {detailsURL} */}
                Página do Curso
            </C.Button>
        </C.Color>
        </C.Container>
           ))}
      </CardContainer>
            </Container>
            <Footer/>
        </div>
    );
};

export default CousersPage;