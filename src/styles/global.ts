import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
    // font-family: 'Open Sans', sans-serif;

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    // 'Bebas Neue', cursive;

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
    // font-family: 'Montserrat', sans-serif;

    :root {
        --background: #242424;
        --content-background: #D9D9D9;
        --cor-complemento: #470303;

        --fonte-normal: 'Montserrat', sans-serif;
        --fonte-destaque: 'Bebas Neue', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: var(--background);
        font-family: var(--fonte-normal);
        overflow-x: hidden;

        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
        font-family: var(--fonte-normal);
    }
    
    h1, h2, h3, h4 {
        font-family: var(--fonte-destaque);
        text-align: center;
        -webkit-font-smoothing: antialiased;
    }    
    
    a {
        text-decoration: none;
        color: white;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 3;
        border: none;

        display: flex;
        align-items: center;
        justify-content: center;

        
    }

    .ReactModal__Overlay {
        opacity: 0;
        
        transition: all 300ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;

    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
        
    }

    .react-modal-content {
        background-color: var(--background);
        color: white;
        width: 25rem;
        max-width: 27rem;
        padding: 1.2rem;
        position: relative;
        border-radius: 1.5rem;

        div {
            font-size: 1.1rem;
        }

        .infos {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                height: 9rem;
                width: 19rem;
                margin-bottom: 1rem;
            }

            .textos {
                width: 19rem;
                display: block;
                margin: 0 1.5rem;

                h2 {
                    text-align: left;
                }

                p {
                    text-indent: 10px;
                    font-family: var(--fonte-normal);
                    font-weight: 300;
                    font-size: 1rem;
                    margin-bottom: 0.2rem;
                    margin-top: 0.5rem;

                    a {
                        color: white;
                        text-decoration: none;
                        cursor: pointer;

                        :hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            button {
                width: 30px;
                height: 30px;
                color: white;
                background: none;
                border: none;
                cursor: pointer;
                margin-top: -0.5rem;
                margin-right: -0.5rem;
                position: absolute;
                right: 5%;
            }
        }
        
        .tecnologiasUtilizadas {

        }

        .imagem {
            filter: blur(0);
            border-radius: 10px;
            margin-top: 0;
        }

        @media only screen and (max-width: 500px) {
            width: 20rem;
            padding: 1rem;

            .infos {
                img{
                    width: 17rem;
                    height: 8rem;
                    margin-left: 2%;
                }
                
                .textos {
                    width: 17rem;

                    h2 {
                        font-size: 1.3rem;
                    }
                    
                    p {
                        font-size: 0.89rem;
                        text-indent: 5px;
                    }
                }
            }
        }
    }
`;