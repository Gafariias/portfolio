import styled from "styled-components";

export const Container = styled.div`
    padding: 5.8rem 3.7rem 25px 3.7rem;
    background-color: var(--content-background);
    width: 56rem;
    height: 65vh;
    margin: auto;

    @media only screen and (max-width: 920px) {
        width: 100%;
    }
`;

export const Content = styled.main`
    width: 100%;
    height: 100%;
    padding: 3px;
`;