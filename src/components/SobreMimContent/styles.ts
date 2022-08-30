import styled from "styled-components"

export const Container = styled.div`
    background-color: var(--content-background);
    padding: 5.8rem 3.7rem 20px 3.7rem;
    width: 56rem;
    margin: auto;
    height: 100vh;

    @media only screen and (max-width: 1500px) {
        
    }
`;

export const Content = styled.main`

    h1 {
        margin-bottom: 20px;
    }

    p {
        font-size: 1.4vw;
        font-weight: 300;
        text-indent: 40px;
        line-height: 30px;
    }

    @media only screen and (min-width: 1500px) {
        p {
            line-height: 4vh;
        }
    }
`;