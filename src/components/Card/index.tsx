import * as C from './styles'
import IconArrowUp from '../../assets/arrowup';
//import IconArrowDown from '../../assets/arrowup';
import IconBook from '../../assets/book';
import IconCalendar from '../../assets/calendar';
import IconDegree from '../../assets/degree';
import IconHeaderCard from '../../assets/headercard';
import IconHour from '../../assets/hour';
import IconLocation from '../../assets/location';
import IconUser from '../../assets/user';


function Card (){

    return(
        <C.Container>
            <C.Color>

            <C.SvgDiv>
            <IconHeaderCard/>
            </C.SvgDiv>
            
            <C.Title>
                WebServices com Retrofit e
                Imagens Glide
            </C.Title>

            <C.Information>
                <C.Row>
                <IconCalendar/>
                <C.Col>
                <C.H3>INÍCIO EM</C.H3>
                <C.H1>12/01 às 16:00</C.H1>
                </C.Col>

                <IconCalendar/>
                <C.Col>
                <C.H3>TÉRMINO</C.H3>
                <C.H1>16/01</C.H1>
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
                <C.H3>PAULO SALVATORE, MARIA DA BAHIA, E JOAO DO PEDREGULHO</C.H3>
                </C.Col>

                <IconLocation/>
                <C.Col>
                <C.H3>CAMPOS MANAUS</C.H3>
                </C.Col>
                </C.Row>
            </C.Information>

            <C.DateTag>
                <C.TextTag>INCRIÇÕES ABERTAS A PARTIR DE 11/O1</C.TextTag>
            </C.DateTag>

            <C.Button>
                Página do Curso
            </C.Button>
        </C.Color>
        </C.Container>
    )
}

export default Card;