import React from 'react'
import styled from 'styled-components';
import Encabezado from './Text';

function Title({title, subtitle, para}) {
    return (
        <TitleStyled>
            <Encabezado title={subtitle} />
            <h2>{title}</h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    h2{
        padding-top: 1rem;
        font-weight: 500;
    }
    p{
        padding: 1.2em 0;
        opacity: 0.5;
    }
`;

export default Title;