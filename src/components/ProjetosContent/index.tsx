import Projeto from "../Projeto";
import { 
    Container,
    Content,
    ContainerProjetos
} from "./styles";

export function ProjetosContent() {
    return(
        <Container>
            
            <h1>Projetos</h1>
            <Content>
                <ContainerProjetos>

                    <Projeto 
                        path="2"
                        link="https://gafariias.github.io/stackx_list_react/"
                        titulo="Lista de pessoas React"
                        text="Aplicativo com uma lista de pessoas feito em Styled components e ReactJs com typeScript. Projeto academico que eu realizei, consumindo a API randomuser.me." 
                        repo="https://github.com/GaFariias/stackx_list_react/"/>
                        
                    <Projeto 
                    path="6"
                    link="https://gafariias.github.io/stackx_list_angular/home"
                    titulo="Lista de pessoas Angular"
                    text="Mesmo aplicativo feito em React, mas dessa vez feito em angular utilizando SASS e consumindo a API randomuser.me"
                    repo="https>//github.com/GaFariias/stackx_list_angular/"/>

                    <Projeto 
                        path="7"
                        link="https://gafariias.github.io/stackx_list_vue/"
                        titulo="Lista de pessoas vue"
                        text="Mesmo aplicativo feito em React, mas em vue, utilizando Tailwind para estilização"
                        repo="https://github.com/Gafariias/stackx_list_vue"
                    />

                    <Projeto 
                        path="3"
                        link="https://gafariias.github.io/stackList/"
                        titulo="Criador de lista"
                        text="Um criador de listas desenvolvido utilizando ReactJS, com estilizações em CSS puro, meu primeiro projeto realizado em React."
                        repo="https://github.com/Gafariias/stackList"/>
                    
                    <Projeto 
                        path="0"
                        link="https://gafariias.github.io/clone-spotify-web-player/"
                        titulo="Clone Spotify"
                        text="Clone do Web Player do spotify feito utilizando apenas HTMl, SASS e JS puros. Queria utilizar orientação a objetos e manipulação de audio, assim como me desafiar e tentar coisas novas, então criei um clone do spotify, ainda sem o uso de nenhuma API."
                        repo="https://github.com/GaFariias/clone-spotify-web-player/"/>
                        
                    <Projeto 
                        path="1"
                        link="https://gafariias.github.io/Calculadora/"
                        titulo="Calculadora"
                        text="Calculadora com funções simples feita com HTML CSS e JS. O básico de todo junior, fiz para praticar eventListeners e funções utilizando JavaScript."
                        repo="https://github.com/GaFariias/Calculadora/"/>

                    <Projeto 
                        path="4"
                        link="https://gafariias.github.io/Jogo-de-defesa-de-base/"
                        titulo="Jogo Simples"
                        text="Um jogo simples de defesa de base, você é a bola branca no meio e deve atirar nas coloridas vindo na sua direção. Primeiro jogo que desenvolvi, proposto pelo youtuber chris courses, foi uma boa maneira de praticar a tag html canvas e orientação a objetos em JavaScript."
                        repo="https://github.com/Gafariias/Jogo-de-defesa-de-base/"/>

                    <Projeto 
                        path="5"
                        link="https://gafariias.github.io/Projeto-Android/"
                        titulo="Projeto Android"
                        text="Meu primeiro projeto, proposto pelo prof Gustavo Guanabara do curso em video, feito HTML e CSS."
                        repo="https://github.com/Gafariias/Projeto-Android/"/>
                </ContainerProjetos>
                {/* <h3><a href={"../../../projetos.html"}>Ver mais</a></h3> */}
            </Content>
        </Container>
    )
    
}