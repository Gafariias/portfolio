import image from '../../assets/images/profile.jpeg'
import { icones } from '../../assets/assets';
import cv from '../../assets/documents/CV - Gabriel Farias.pdf'
import { 
    Container,
    Content,
    ContainerIcones,
    Icone,
    ImageHome
 } from './styles';
import { DownloadSimple } from 'phosphor-react'

export function HomeContent() {
    return(
        <Container id='HomeContent'>
            <Content>
                <div className="texto">
                    <h1>Gabriel Farias</h1>
                    <h2>Sou um desenvolvedor Full-Stack Java</h2>
                </div>
                
                <a href={cv} download>
                    <button>
                    
                        <p>Baixar curriculo</p>
                        <DownloadSimple size={20} fill='#fff' className="Download"/>
                    
                    
                    </button>
                </a>

                <ContainerIcones>
                    <div>
                        <Icone src={icones[0]} className='left'/>
                        <Icone src={icones[2]}/>
                        <Icone src={icones[3]}/> 
                    </div>
                    
                    <div>
                        <Icone src={icones[4]} className='left'/>
                        <Icone src={icones[5]}/>
                        <Icone src={icones[6]}/>
                    </div>
                </ContainerIcones>
            </Content>
            <ImageHome src={image}/>
        </Container>
    );
}