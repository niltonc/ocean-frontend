import * as C from './styles'
import IconArrowDwon from '../../assets/arrowdown';
import IconArrowUp from '../../assets/arrowup';
import IconBook from '../../assets/book';
import IconCalendar from '../../assets/calendar';
import IconDegree from '../../assets/degree';
import IconHeaderCard from '../../assets/headercard';
import IconHour from '../../assets/hour';
import IconLocation from '../../assets/location';
import IconUser from '../../assets/user';

import { arrayCoursers } from '../../pages/Cousers/data';

function Card (){

    return(
        <div>
            <C.CardContainer>
        {arrayCoursers.map((courser) => (
            <C.Container>
            <C.Color>
            <C.SvgDiv>
            <IconHeaderCard/>
            </C.SvgDiv>
            
            <C.Title>
                {courser.title}
            </C.Title>

            <C.Information>
                <C.Row>
                <IconCalendar/>
                <C.Col>
                <C.H3>INÍCIO EM</C.H3>
                <C.H1>
                    {courser.startTime}
                    </C.H1>
                
                </C.Col>

                <IconCalendar/>
                <C.Col>
                <C.H3>TÉRMINO</C.H3>
                <C.H1>
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
                {courser.speakers}

                </C.H3>
                </C.Col>

                <IconLocation/>
                <C.Col>
                <C.H3>
                    {courser.campus}
                </C.H3> 
                </C.Col>
                </C.Row>
            </C.Information>

            <C.DateTag>
                <C.TextTag>
                    {courser.enrollmentsStart}
                </C.TextTag>
                
            </C.DateTag>

            <C.Button>
                Página do Curso
            </C.Button>
        </C.Color>
        </C.Container>
           ))}
           </C.CardContainer>
           </div>
    )
}

export default Card;