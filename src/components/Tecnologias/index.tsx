import { icones } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper'
import './styles.css'
import 'swiper/css/navigation'

export function SliderTecs() {
    return(
        <Swiper modules={[Pagination, Navigation]}
            id="tecsSlider"
            pagination={{clickable: true}}
            navigation={true}>
            <SwiperSlide>
                <div id="html" className='tec'>
                    <img src={icones[0]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>H</span>yper<span>T</span>ext   <span>M</span>arkup  <span>L</span>anguage</h2>
                        <p>HTML é uma linguagem de marcação que serve para criar a estrutura de um Web-Site</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div id="css" className='tec'>
                    <img src={icones[2]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>S</span>intatically <span>A</span>wesome <span>S</span>tyle <span>S</span>heets</h2>
                        <p>Sass é uma linguagem de folhas de estilos e serve para adicionar recursos especiais no CSS normal.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div id="ts" className='tec'>
                    <img src={icones[3]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>T</span>ype <span>S</span>cript</h2>
                        <p>Ts uma linguagem de programação que é um conjunto de JavaScript, um conjunto de ferramentas que adicionam recursos ao JS Vanilla dando mais segurança ao código e facilitando o desenvolvimento.</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div id="react" className='tec'>
                    <img src={icones[4]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>R</span>eact</h2>
                        <p>React é um biblioteca de JavaScript que serve para criar interfaces de usuario de forma reativa, e com a integração do JS dentro do código HTML</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div id="java" className='tec'>
                    <img src={icones[5]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>J</span>ava</h2>
                        <p>React é um biblioteca de JavaScript que serve para criar interfaces de usuario de forma reativa, e com a integração do JS dentro do código HTML</p>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div id="python" className='tec'>
                    <img src={icones[6]} alt="" className="icone" />
                    <div className='conteudo'>
                        <h2 className="titulo"><span>P</span>ython</h2>
                        <p>É uma linguagem de programação de alto nível simples e orientada a objetos, com diversas bibliotecas que a tornam muito difundida e útil</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}