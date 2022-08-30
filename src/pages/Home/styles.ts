import styled from "styled-components";

export const Principal = styled.div`
    height: 100vh;
    overflow-x: hidden;
`;

export const SobreMim = styled.div`
    height: 100vh;

    @media only screen and (max-width: 920px) {
        height: auto;
        width: 100vw;
    }

    
`;

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Projetos = styled.div`
    height: 100vh;

    @media only screen and (max-width: 920px) {
        height: auto;
    }
`;

export const Contato = styled.div`
    height: 100vh;

    @media only screen and (max-width: 920px) {
        height: auto;
        width: 100vw;
    }
`;

export const Tecnologias = styled.div`
    height: 65vh;

    @media only screen and (max-width: 700px) {
        height: auto;
    }
`;