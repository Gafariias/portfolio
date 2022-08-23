import { Carousel } from '../../components/Carousel';
import { Header } from '../../components/Header';
import { HomeContent } from '../../components/HomeContent';
import { ProjetosContent } from '../../components/ProjetosContent';
import { SobreMimContent } from '../../components/SobreMimContent';
import { ContatoContent } from '../../components/ContatoContent';
import { Slider, SliderProps} from '../../components/Slider';
import { 
    Principal,
    HomeContainer,
    SobreMim,
    Projetos,
    Contato,
    Tecnologias
} from './styles';
import { TecnologiasContent } from '../../components/TecnologiasContent';

export function Home() {
    const settings: SliderProps = {
        loop: true,
        pagination: {
            clickable: true
        },
        autoplay: {
            delay: 3000
        }
    }

    return (
        <>
            <Header/>
            <Principal id='Home'>
                
                <Carousel/>
                <HomeContainer>
                    <HomeContent/>
                    <Slider settings={settings}>
                        
                    </Slider>
                </HomeContainer>
                
            </Principal>

            <SobreMim id='SobreMim'>
                <SobreMimContent/>
            </SobreMim>

            <Tecnologias id='Tecs'>
                <TecnologiasContent />
            </Tecnologias>

            <Projetos id='Projetos'>
                <ProjetosContent/>
            </Projetos>

            <Contato id='Contato'>
                <ContatoContent />
            </Contato>
        </>
    )
}