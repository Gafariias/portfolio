import styled from "styled-components";

export const Container = styled.div`
    width: 56rem;
    height: 20.62rem;
    background-color: var(--content-background);
    border-radius: 20px;
    box-shadow: 2px -2px 4px rgba(0 0 0 0.35);
    position: absolute;
    top: 25%;
    bottom: 25%;
    margin: auto;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.main`
    width: 30%;

    h2 {
        font-weight: 600;
    }

    button {
        width: 13rem;
        height: 2rem;
        border-radius: 1rem;
        border: none;
        background-color: var(--cor-complemento);
        padding-bottom: 10px;
        font-family: var(--fonte-padrao);
        color: white;
        font-size: 1rem;
        font-weight: 500;
        margin: 0.7rem 0 1.2rem 10%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s;

        :hover {
            width: 13.7rem;
            margin-left: 8%;
        }
        
        p {
            margin-top: 10px;
            margin-right: 10px;
        }

        .Download {
            margin-top: 10px;
            margin-right: 10%;
        }
    }
`;

export const ContainerIcones = styled.div`
    .left {
        margin-left: 0;
    }

    div {
        display: flex;

        margin-bottom: 10px;
        width: 270px;
        height: 55px;
    }
`;

export const Icone = styled.img`
    width: 45px;
    height: 45px;
    margin: 0 33px;
`;

export const ImageHome = styled.img`
    max-width: 300px;
    min-width: 280px;
    max-height: 300px;
    min-height: 280px;

    border-radius: 50%;
    margin-left: 50px;
`;