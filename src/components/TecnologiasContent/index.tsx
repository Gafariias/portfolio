import { SliderTecs } from "../Tecnologias";
import { 
    Container,
    Content
} from "./styles";

export function TecnologiasContent() {
    return(
        <Container>
            <h1>Tecnologias</h1>

            <Content>
                <SliderTecs/>
            </Content>
        </Container>
    );
}