import Modal from 'react-modal'
import { useState } from 'react'
import { X } from 'phosphor-react'
import { imagens } from '../../assets/assets';
import { 
    Container,
    ImagemProjeto,
} from "./styles";

Modal.setAppElement('#root')

var image:string;

interface p {
    titulo: string
    text: string
    path: string
    link: string
    repo: string
}

export default function Projeto(props: p) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    switch (props.path) {
        case "0":
            image = imagens[0]
            break
        case "1":
            image = imagens[1]
            break
        case "2":
            image = imagens[2]
            break
        case "3":
            image = imagens[3]
            break
        case "4":
            image = imagens[4]
            break
        case "5":
            image = imagens[5]
            break
    }
    return(
        
        <Container>
            {/* <a 
                href={props.link}
                target='_blank'
            >
                
            </a> */}
            
            <ImagemProjeto onClick={handleOpenModal} src={image}/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                overlayClassName="react-modal-overlay"
                className="react-modal-content">

                <div className="infos">
                    <a href={props.link} target="_blank">
                        <ImagemProjeto className='imagem' src={image}></ImagemProjeto>
                    </a>

                    <div className="textos">
                        <h2>{props.titulo}</h2>
                        <p>{props.text}</p>
                        <p>
                            <strong>Repositório: </strong> 
                            <a href={props.repo} target='_blank'>github.com 🔗</a>
                        </p>

                        <p>
                            <strong>Link: </strong> 
                            <a href={props.link} target='_blank'>{props.titulo}.com 🔗</a>
                        </p>
                    </div>

                    <button onClick={handleCloseModal}>
                        <X size={30} fill="white"/>
                    </button>

                </div>
            </Modal>
            
            
        </Container>
    );
}