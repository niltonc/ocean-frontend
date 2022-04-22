import * as C from './styles'
import HeaderCard from '../../assets/headercard';

function Card (){

    return(
        <C.Container>
            <C.Color/>
            <HeaderCard/>
            
            <C.Title>
                WebServices com Retrofit e
                Imagens Glide
            </C.Title>

            <C.Column>
                <p>INÍCIO EM</p>
                <p>TÉRMINO</p>
            </C.Column>

            <C.DateTag>
                INCRIÇÕES ABERTAS A PARTIR DE 11/O1
            </C.DateTag>

            <C.Button>
                Página do Curso
            </C.Button>

        </C.Container>
    )
}

export default Card;