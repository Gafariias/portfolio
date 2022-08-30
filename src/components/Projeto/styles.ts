import styled from "styled-components";

export const Container = styled.div`  
    /* width: 14rem;
    height: 14rem;
    background-color: var(--background);
    border-radius: 10px;
    padding: 1.2rem 1.5rem;
    margin-top: 15px;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    cursor: pointer;
    
    h2 {
        font-family: var(--fonte-destaque);
        color: #FFF;
        font-size: 16px;
        font-weight: 600;
    }
    p {
        font-family: var(--fonte-padrao);
        color: #fff;
        font-size: 12px;
        font-weight: normal;
    } */
`;

export const ImagemProjeto = styled.img`
    width: 15rem;
    height: 7rem;
    border-radius: 5px;
    margin-top: 1.5rem;
    margin-right: 1rem;
    transition: .2s;
    cursor: pointer;
    opacity: 0.8;
    filter: blur(1px);
    border: none;

    :hover {
        filter: blur(0);
        opacity: 1;
    }

    img {
        width: 15rem;
        height: 7rem;
        border-radius: 5px;
    }
`;