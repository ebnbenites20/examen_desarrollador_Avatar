import React from 'react'
import styled from 'styled-components'
import { Seccion } from '../layout';
import mapa from '../img/ubic.png';

function Contacto() {
    return (
        <ContactEstilo>
            <Seccion>
                <div className="contact-info">
                    <h3 className="contact-title">
                        Contáctanos  
                    </h3>
                    <p>Avenida Independencia, Lima-Perú</p>
                    <p>+51 966 314 354</p>
                    <p>ebnbenites@gmail.com</p>
                </div>
                <div className="bg-image">
                    <img src={mapa} alt="" />
                </div>
            </Seccion>
        </ContactEstilo>
    )
}

const ContactEstilo = styled.div`
    background-color: #020C31;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem 0;
    position: relative;
    z-index: 1;
    p{
        opacity: 0.5;
    }
    .bg-image{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        img{
            width: 80%;
            opacity: 0.08;
        }
    }
    .contact-title{
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
        font-weight: 500;
        font-size: 1.5rem;
        &::before{
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 2px;
            background-color: #eb3fa9;
        }
    }
`;

export default Contacto;