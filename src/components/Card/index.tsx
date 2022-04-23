import { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from './styles';
import IconBook from '../../assets/book';
import IconCalendar from '../../assets/calendar';
import IconHeaderCard from '../../assets/headercard';
import IconHour from '../../assets/hour';
import IconLocation from '../../assets/location';
import IconUser from '../../assets/user';
import IconArrowUp from '../../assets/arrowup';
import IconArrowDown from '../../assets/arrowdown';
import IconDegree from '../../assets/degree';

function Card() {
  const urlAPI = 'https://gist.githubusercontent.com/creathusjobs/3c53322e8dc8c3b524cfb2623c097cc5/raw/adc988f34c4fb1a0fe12035b4b030259776115ea/response.json';
  const [coursersDB, setCoursersDB] = useState([]);

  useEffect(() => {
    axios.get(urlAPI).then((resp) => setCoursersDB(resp.data));
  }, []);

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <C.CardContainer>
        {coursersDB.map((courser) => (
          <C.AccordionWrapper>
            <C.Container key={courser.track}>
              <C.Color>
                <C.SvgDiv>
                  <IconHeaderCard />
                </C.SvgDiv>

                <C.Title>
                  {courser.title}
                </C.Title>

                <C.Information>
                  <C.Row>
                    <IconCalendar />
                    <C.Col>
                      <C.H3>INÍCIO EM</C.H3>
                      <C.H1>
                        {courser.startTime}
                      </C.H1>
                    </C.Col>

                    <IconCalendar />
                    <C.Col>
                      <C.H3>TÉRMINO</C.H3>
                      <C.H1>
                        {courser.endDate}
                      </C.H1>
                    </C.Col>
                  </C.Row>

                  <C.Row>
                    <IconBook />
                    <C.Col>
                      <C.H3>3 AULAS</C.H3>
                    </C.Col>

                    <IconHour />
                    <C.Col>
                      <C.H3>12H TOTAL</C.H3>
                    </C.Col>
                  </C.Row>

                  <C.Row>
                    <IconUser />
                    <C.Col>
                      <C.H3>
                        {courser.speakers}
                      </C.H3>
                    </C.Col>

                    <IconLocation />
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

            <C.RowWrapper>
              <C.ColWrapper>
                <C.TextWrapper>
                  Sobre as aulas
                </C.TextWrapper>
              </C.ColWrapper>
              <C.ButtonWrapper onClick={handleClick}>
                <IconArrowDown />
              </C.ButtonWrapper>
            </C.RowWrapper>

            <C.InternalWrapper open={open}>

              {/* 1 */}
              <C.RowAccordion>
                <IconBook />
                <C.H3>4 DE FEVEREIRO</C.H3>
                <C.H3>18:30 - 22:30</C.H3>
              </C.RowAccordion>

              <C.DivAccordion>
                <C.TextAccordion>Parte 1</C.TextAccordion>
                <C.SvgAccordion>
                  <IconCalendar />
                </C.SvgAccordion>
                <C.TextAccordion>3h</C.TextAccordion>
              </C.DivAccordion>
              {/* end 1 */}

              {/* 2 */}
              <C.RowAccordion>
                <IconBook />
                <C.H3>5 DE FEVEREIRO</C.H3>
                <C.H3>18:30 - 22:30</C.H3>
              </C.RowAccordion>

              <C.DivAccordion>
                <C.TextAccordion>Parte 2</C.TextAccordion>
                <C.SvgAccordion>
                  <IconHour />
                </C.SvgAccordion>
                <C.TextAccordion>3h</C.TextAccordion>
              </C.DivAccordion>
              {/* end 2 */}

              {/* 3 */}
              <C.RowAccordion>
                <IconBook />
                <C.H3>6 DE FEVEREIRO</C.H3>
                <C.H3>18:30 - 22:30</C.H3>
              </C.RowAccordion>

              <C.DivAccordion>
                <C.TextAccordion>Parte 3</C.TextAccordion>
                <C.SvgAccordion>
                  <IconCalendar />
                </C.SvgAccordion>
                <C.TextAccordion>3h</C.TextAccordion>
              </C.DivAccordion>
              {/* end 3 */}

            </C.InternalWrapper>
          </C.AccordionWrapper>
        ))}
      </C.CardContainer>

    </div>
  );
}

export default Card;
