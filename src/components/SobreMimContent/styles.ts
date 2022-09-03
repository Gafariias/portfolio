import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--content-background);
    padding: 4rem 3.7rem 20px 3.7rem;
    width: 56rem;
    margin: auto;
    height: 100vh;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }

    @media only screen and (max-width: 700px) {
        width: 100%;
        height: auto;
    }
`;

export const Content = styled.main`

    h1 {
        margin-bottom: 20px;
    }

    p {
        font-size: 1.3rem;
        font-weight: 300;
        text-indent: 40px;
        line-height: 30px;
        text-align: justify;
    }

    @media only screen and (min-width: 1500px) {
        p {
            line-height: 4vh;
        }
    }

    @media only screen and (max-width: 920px) {
        h1 {
            font-size: 1.8rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 700px) {
        width: 100%;
        height: auto;

         p {
            text-indent: 1rem;
         }
    }
`;