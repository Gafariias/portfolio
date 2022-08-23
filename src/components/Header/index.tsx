import { Link, animateScroll as scroll } from 'react-scroll';
import {
    Container,
    Content
} from './styles'

export function Header() {
    return(
        <Container>
            <Content>
                <a onClick={scroll.scrollToTop}>
                    <button>Home</button>
                </a>

                <Link to='SobreMim' spy={true} smooth={true} offset={0} duration={1000}>
                    <button>Sobre Mim</button>
                </Link>

                <Link to='Tecs' spy={true} smooth={true} offset={0} duration={1000}>
                    <button>Tecnologias</button>
                </Link>

                <Link to='Projetos' spy={true} smooth={true} offset={0} duration={1000}>
                    <button>Projetos</button>
                </Link>

                <a onClick={scroll.scrollToBottom}>
                    <button>Contato</button>
                </a>
            </Content>
        </Container>
    );
}