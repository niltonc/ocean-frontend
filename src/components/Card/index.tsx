import * as C from './styles'
import IconHeaderCard from '../../assets/headercard';
import IconCalendar from '../../assets/calendar';

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
                <div style={{backgroundColor:"#1221", display:'flex', flexDirection:"row"}}>

                <div style={{display:"flex", flexDirection:'row'}}>

                <IconCalendar/>
                <div style={{display:"flex", flexDirection:'column'}}>
                <p>INÍCIO EM</p>
                <p>12/01 às 16:00</p>
                </div>

                </div>

                <div style={{display:"flex", flexDirection:'row'}}>
                <IconCalendar/>
                <div style={{display:"flex", flexDirection:'column'}}>
                <p>TÉRMINO</p>
                <p>16/01</p>
                </div>

                </div>
                </div>
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