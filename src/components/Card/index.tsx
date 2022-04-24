import { useEffect, useState } from 'react';
import axios from 'axios';
import * as C from './styles/index';
import IconBook from '../../assets/book';
import IconCalendar from '../../assets/calendar';
import IconHeaderCard from '../../assets/headercard';
import IconHour from '../../assets/hour';
import IconLocation from '../../assets/location';
import IconUser from '../../assets/user';
import IconArrowUp from '../../assets/arrowup';
import IconArrowDown from '../../assets/arrowdown';

import setDate from './functions/setDate';

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

  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  // const setDate = (ISO: Date, Type: String) => {
  //   const isoConverted = new Date(ISO);

  //   const months = [
  //     'JANEIRO',
  //     'FEVEREIRO',
  //     'MARÇO',
  //     'ABRIL',
  //     'MAIO',
  //     'JUNHO',
  //     'JULHO',
  //     'AGOSTO',
  //     'SETEMBRO',
  //     'OUTUBRO',
  //     'NOVEMBRO',
  //     'DEZEMBRO',
  //   ];
  //   const month = isoConverted.getMonth();
  //   const monthName = months[isoConverted.getMonth()];
  //   const date = isoConverted.getDate();
  //   const hour = isoConverted.getHours();
  //   const min = isoConverted.getMinutes();

  //   if (Type === 'initialCard') {
  //     return `0${date}/0${month} ás ${hour}:${min}`;
  //   }
  //   if (Type === 'finalCard') {
  //     return `${date}/${month}`;
  //   }
  //   if (Type === 'initialAccordion') {
  //     return `${date} DE ${monthName}`;
  //   }
  //   if (Type === 'finalAccordion') {
  //     return `${hour}:${min}`;
  //   }
  // };

  return (
    <div>
      <C.Box>
        <C.CardContainer>
          {coursersDB.slice(0, showMore === false ? 4 : coursersDB.length).map((courser) => (
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
                          {setDate(courser.startTime, 'initialCard')}
                        </C.H1>
                      </C.Col>

                      <IconCalendar />
                      <C.Col>
                        <C.H3>TÉRMINO</C.H3>
                        <C.H1>
                          {setDate(courser.endDate, 'finalCard')}
                        </C.H1>
                      </C.Col>
                    </C.Row>

                    <C.Row>
                      <IconBook />
                      <C.Col>
                        <C.H3>3h</C.H3>
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

              {courser.events && (
                (
                <>
                  <C.RowWrapper>
                    <C.ColWrapper>
                      <C.TextWrapper>
                        Sobre as aulas
                      </C.TextWrapper>
                    </C.ColWrapper>
                    <C.ButtonWrapper onClick={handleClick}>
                      {open ? (
                        <IconArrowUp />
                      ) : (
                        <IconArrowDown />
                      )}
                    </C.ButtonWrapper>
                  </C.RowWrapper>

                  <C.InternalWrapper open={open}>

                    {/* 1 */}
                    <C.RowAccordion>
                      <IconBook />
                      <C.H3>{setDate(courser.events[0].startTime, 'initialAccordion')}</C.H3>
                      <C.H3>{`${setDate(courser.events[0].startTime, 'finalAccordion')} - ${setDate(courser.events[0].endTime, 'finalAccordion')}`}</C.H3>
                    </C.RowAccordion>

                    <C.DivAccordion>
                      <C.TextAccordion>{courser.events[0].title}</C.TextAccordion>
                      <C.SvgAccordion>
                        <IconCalendar />
                      </C.SvgAccordion>
                      <C.TextAccordion>3h</C.TextAccordion>
                    </C.DivAccordion>
                    {/* end 1 */}

                    {/* 2 */}
                    <C.RowAccordion>
                      <IconBook />
                      <C.H3>{setDate(courser.events[2].startTime, 'initialAccordion')}</C.H3>
                      <C.H3>{`${setDate(courser.events[2].startTime, 'finalAccordion')} - ${setDate(courser.events[2].endTime, 'finalAccordion')}`}</C.H3>
                    </C.RowAccordion>

                    <C.DivAccordion>
                      <C.TextAccordion>{courser.events[2].title}</C.TextAccordion>
                      <C.SvgAccordion>
                        <IconHour />
                      </C.SvgAccordion>
                      <C.TextAccordion>3h</C.TextAccordion>
                    </C.DivAccordion>
                    {/* end 2 */}

                    {/* 3 */}
                    <C.RowAccordion>
                      <IconBook />
                      <C.H3>{setDate(courser.events[1].startTime, 'initialAccordion')}</C.H3>
                      <C.H3>{`${setDate(courser.events[1].startTime, 'finalAccordion')} - ${setDate(courser.events[1].endTime, 'finalAccordion')}`}</C.H3>
                    </C.RowAccordion>

                    <C.DivAccordion>
                      <C.TextAccordion>{courser.events[1].title}</C.TextAccordion>
                      <C.SvgAccordion>
                        <IconCalendar />
                      </C.SvgAccordion>
                      <C.TextAccordion>3h</C.TextAccordion>
                    </C.DivAccordion>
                    {/* end 3 */}

                  </C.InternalWrapper>
                </>
                )
              )}
            </C.AccordionWrapper>
          ))}
        </C.CardContainer>
      </C.Box>
      <C.Box>
        <C.ShowGrid onClick={handleShowMore}>
          <C.ShowGridText>
            Ver tudo
          </C.ShowGridText>
        </C.ShowGrid>
      </C.Box>
    </div>
  );
}

export default Card;
