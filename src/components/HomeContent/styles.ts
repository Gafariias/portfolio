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

    @media only screen and (max-width: 970px) {
        width: 70vw;
    }

    @media only screen and (max-width: 660px) {
        flex-direction: column-reverse;

        height: 85vh;
    }
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

    @media only screen and (max-width: 970px) {
        h1 {
            font-size: 2.9vw;
        }

        h2 {
            font-size: 2vw;
        }

        button {
            width: 25vw;
            font-size: 1.6vw;
            margin: auto;
        }
    }

    @media only screen and (max-width: 660px) {
        width: 50%;
        
        h1 {
            margin-top: 1rem;
            font-size: 1.3rem;
        }

        h2 {
            font-size: 1.1rem;
        }

        p {
            font-size: 1rem;
        }
        
        button {
            width: 13rem;
            margin: 0 auto;

            :hover {
                width: 13rem;
                margin-left: 0;
            }
        }
    }
`;

export const ContainerIcones = styled.div`
    margin: auto;

    .left {
        margin-left: 0;
    }

    div {
        display: flex;

        margin-bottom: 10px;
        width: 270px;
        height: 55px;
    }

    @media only screen and (max-width: 660px) {
        margin-left: 6%;
    }
`;

export const Icone = styled.img`
    width: 45px;
    height: 45px;
    margin: 0 33px;

    @media only screen and (max-width: 970px) {
        width: 5vw;
        margin: 10px 2vw;
    }

    @media only screen and (max-width: 660px) {
        width: 2.5rem;
    }
`;  

export const ImageHome = styled.img`
    width: 300px;
    height: 300px;

    border-radius: 50%;
    margin-left: 50px;

    @media only screen and (max-width: 970px) {
        width: 30vw;
        height: 30vw;
        margin-left: 6vw;
    }

    @media only screen and (max-width: 660px) {
        width: 12rem;
        height: 12rem;
    } 
`;