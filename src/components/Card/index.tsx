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
import IconDegree from '../../assets/degree.png';
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

  return (
    <div>
      <C.Box>
        <C.CardContainer>
          {coursersDB?.slice(0, showMore === false ? 4 : coursersDB.length)?.map((courser) => (
            <C.AccordionWrapper>
              <C.Container key={courser?.track}>
                <C.Color>
                  <C.SvgDiv>
                    <IconHeaderCard />
                  </C.SvgDiv>

                  <C.Title>
                    {courser?.title}
                  </C.Title>

                  <C.Information>
                    <C.Row>
                      <IconCalendar />
                      <C.Col1>
                        <C.H3>INÍCIO EM</C.H3>
                        <C.H1>
                          {setDate(courser?.startTime, 'initialCard')}
                        </C.H1>
                      </C.Col1>

                      <IconCalendar />
                      <C.Col2>
                        <C.H3>TÉRMINO</C.H3>
                        <C.H1>
                          {setDate(courser?.endDate, 'finalCard')}
                        </C.H1>
                      </C.Col2>
                    </C.Row>

                    <C.Row>
                      <IconBook />
                      <C.Col1>
                        <C.H3>3 AULAS</C.H3>
                      </C.Col1>

                      <IconHour color="#00B9FF" />
                      <C.Col2>
                        <C.H3>12H TOTAL</C.H3>
                      </C.Col2>
                    </C.Row>

                    <C.Row>
                      <IconUser />
                      <C.Col1>
                        <C.H3>
                          {`${`${courser?.speakers[0]}`?.toUpperCase()}` + ', '
                          + `${`${courser?.speakers[1]}`?.toUpperCase()}` + ' E '
                          + `${`${courser?.speakers[2]}`?.toUpperCase()}`}
                        </C.H3>
                      </C.Col1>

                      <IconLocation />
                      <C.Col2>
                        <C.H3>
                          {`${courser?.campus}`?.toUpperCase()}
                        </C.H3>
                      </C.Col2>
                    </C.Row>
                  </C.Information>

                  <C.DateTag>
                    <C.TextTag>
                      {`INSCRIÇÕES A PARTIR DE ${
                        `${setDate(courser?.enrollmentsStart, 'finalCard')}`?.toUpperCase()}`}
                    </C.TextTag>
                  </C.DateTag>

                  <C.Button>
                    Página do Curso
                  </C.Button>
                </C.Color>
              </C.Container>

              {courser?.events && (
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

                    <C.RowAccordion>
                      <IconBook />
                      <C.RowText>
                        <C.H3>{setDate(courser?.events[0]?.startTime, 'initialAccordion')}</C.H3>
                        <C.H3>
                          {`${setDate(courser?.events[0]?.startTime, 'finalAccordion')} -
                      ${setDate(courser?.events[0]?.endTime, 'finalAccordion')}`}
                        </C.H3>
                      </C.RowText>
                    </C.RowAccordion>

                    <C.RowAccordion2>
                      <C.TextAccordion1>
                        {courser?.events[0]?.title}
                      </C.TextAccordion1>

                      <C.Svg>
                        <img src={IconDegree} />
                      </C.Svg>

                      <C.TextAccordion2>
                        3h
                      </C.TextAccordion2>
                    </C.RowAccordion2>

                    <C.RowAccordion>
                      <IconBook />
                      <C.RowText>
                        <C.H3>{setDate(courser?.events[2]?.startTime, 'initialAccordion')}</C.H3>
                        <C.H3>
                          {`${setDate(courser?.events[2]?.startTime, 'finalAccordion')} -
                      ${setDate(courser?.events[2]?.endTime, 'finalAccordion')}`}
                        </C.H3>
                      </C.RowText>
                    </C.RowAccordion>

                    <C.RowAccordion2>
                      <C.TextAccordion1>
                        {courser?.events[2]?.title}
                      </C.TextAccordion1>

                      <C.Svg>
                        <IconHour color="#464646" />
                      </C.Svg>

                      <C.TextAccordion2>
                        3h
                      </C.TextAccordion2>
                    </C.RowAccordion2>

                    <C.RowAccordion>
                      <IconBook />
                      <C.RowText>
                        <C.H3>{setDate(courser?.events[1]?.startTime, 'initialAccordion')}</C.H3>
                        <C.H3>{`${setDate(courser?.events[1]?.startTime, 'finalAccordion')} - ${setDate(courser?.events[1]?.endTime, 'finalAccordion')}`}</C.H3>
                      </C.RowText>
                    </C.RowAccordion>

                    <C.RowAccordion2>
                      <C.TextAccordion1>
                        {courser?.events[1]?.title}
                      </C.TextAccordion1>

                      <C.Svg>
                        <img src={IconDegree} />
                      </C.Svg>

                      <C.TextAccordion2>
                        3h
                      </C.TextAccordion2>
                    </C.RowAccordion2>
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
