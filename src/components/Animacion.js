import React from 'react';
import styled from 'styled-components';
import business from '../img/StarWars.mp4';
import borde from '../img/borde.svg';
import {Interno} from '../layout'
import Contenido from './Contenido';

function Animated() {
    return (
        <AnimatedStyled>
            <video src={business} muted playsInline autoPlay loop></video>
            {<img src={borde} className="overlay" />}
            <Interno>
                <Contenido />
            </Interno>
        </AnimatedStyled>
    )
}

const AnimatedStyled = styled.header`
    width: 100%;
    height: 85vh;
    position: relative;
    overflow: hidden;
    .overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        right: -400px;
        top: -300px;
        
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
    }
`;

export default Animated;