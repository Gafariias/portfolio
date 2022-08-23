import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    width: 100vw;
    height: 4.45rem;
    background-color: var(--content-background);
    padding: 20px;
    box-shadow: -2px -2px 4px black;
    z-index: 3;

    display: flex;
    justify-content: flex-end;

    
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    button {
        height: 35px;
        padding: 0 1rem;
        margin: 0 1rem;
        border-radius: 18px;
        background-color: black;
        color: white;
        font-size: 1rem;
        font-weight: 500;
        transition: .2s;

        &:hover {
            padding: 0 1.1rem;
            margin-right: 0.8rem;
        }
    }

    @media only screen and (max-width: 600px) {
        button {
            min-height: 3rem;
            padding: 0 0.5rem;
            margin: 0 0.5rem;
            border-radius: 18px;
            background-color: black;
            color: white;
            font-size: 0.9rem;
            font-weight: 500;
        }
        

    } 
`;
