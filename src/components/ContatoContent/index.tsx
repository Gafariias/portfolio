import { 
    Envelope, 
    Phone,
    UsersFour,
    GithubLogo,
    LinkedinLogo,
    InstagramLogo
} from 'phosphor-react';
import {
    Container,
    Content
} from './styles'

export function ContatoContent() {
    return(
        <Container>
            <h1>Contato</h1>

            <Content>
                
                <div className="email">
                    <div className='titulo'>
                        <Envelope size={35} weight={'fill'}/>
                        <h2>Email</h2>
                    </div>

                    <h3>Profissional: gabriel_ff@outlook.com</h3>
                    <h3>Pessoal: ffarias.gabriel2002@gmail.com</h3>
                </div>

                <div className="fone">
                    <div className="titulo">
                        <Phone size={32} weight="fill" />
                        <h2>Telefone</h2>
                    </div>

                    <h3>(47) 98908-8936</h3>
                </div>

                <div className="social">
                    <div className="titulo">
                        <UsersFour size={32} weight="fill" />
                        <h2>Redes sociais</h2>
                    </div>

                    <div className="icones">
                        <a href="https://github.com/Gafariias" target={'_blank'}>
                            <GithubLogo size={80} weight="fill" />
                        </a>

                        <a href="https://www.linkedin.com/in/gafarias/" target={'_blank'}>
                            <LinkedinLogo size={80} weight="fill" />
                        </a>

                        <a href="https://www.instagram.com/gafarias._/" target={'_blank'}>
                            <InstagramLogo size={80} weight="fill" />
                        </a>
                    </div>
                </div>  
            </Content>
        </Container>
    );
}