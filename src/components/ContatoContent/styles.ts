import styled from "styled-components";

export const Container = styled.div`
    max-width: 56rem;
    min-width: 18rem;
    height: 100vh;
    margin: auto;
    background-color: var(--content-background);
    padding: 5.8rem 3.7rem 25px 3.7rem;

    @media only screen and (min-width: 1500px) {

        h1 {
            font-size: 2.2vw;
        }
    }
`;

export const Content = styled.main`

    .titulo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .email, .fone, .social {
        margin-top: 40px;
        
        h3, a {
            text-align: left;
            margin-left: 35px;
            margin-top: 10px;
            text-decoration: none;
            color: inherit;
            font-family: var(--fonte-padrao);
            font-weight: normal;
        }

        .icones {
            margin-top: 20px;
        }

        @media only screen and (max-width: 750px) {
            .icone {
                width: 14.4vw;
            }
        }
    }

    @media only screen and (min-width: 1500px) {
        
        .email, .fone, .social {
            margin-top: 10vh;

            h2 {
                font-size: 2vw;
            }
            
            h3, a {
                text-align: left;
                margin-left: 35px;
                margin-top: 10px;
                text-decoration: none;
                color: inherit;
                font-family: var(--fonte-padrao);
                font-weight: normal;

                font-size: 1.4vw;
            }
        }
    }

    @media only screen and (max-width: 600px) {

        h2 {
            font-size: 1.4rem;
        }
        h3, a {
            font-size: 1.1rem;
        }
    }  
`;