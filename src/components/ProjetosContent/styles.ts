import styled from "styled-components";

export const Container = styled.main` 
    background-color: var(--content-background);
    width: 56rem;
    min-height: 100vh;
    max-height: auto;
    margin: auto;
    padding: 4.4rem 3.7rem 25px 3.7rem;
`;

export const Content = styled.div`
    h3 {
        margin-top: 5px;
        width: 100%;
        
        display: flex;
        justify-content: flex-end;

        a {    
            text-align: right;
            text-decoration: none;
            color: black;

            :hover {
                text-decoration: underline;
            }
        }
    } 

    h1 {
        margin-bottom: 1.2rem;
    }
`;

export const ContainerProjetos = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;