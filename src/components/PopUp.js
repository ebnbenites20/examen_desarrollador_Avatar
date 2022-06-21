import styled from "styled-components";

const PopUp = ({ Child, status, change, title = "Welcome", showH, showO }) => {

    return (
        <>
        { status&&
        <Overlay showO={showO}>
            <Contenedor>
                {showH &&
                    <HeaderM>
                        <h3>{title}</h3>
                    </HeaderM>
                }
                <BotonCerrar onClick={() => change(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                </BotonCerrar>
                {Child}
            </Contenedor>
        </Overlay>
            }
        </>
    );
}
export default PopUp;


const Overlay = styled.div`
width:100vw;
height:100vh;
position: fixed;
top:0;
left:0;
background:rgba(0,0,0,.5);
padding:40px;
display:flex;
align-items:center;
justify-content: center;
`;


const BotonCerrar = styled.div`
width:30px;
height:30px;
position: absolute;
top:20px;
left:20px;
background:none;
border: none;
cursor:pointer;
transition:.3s ease all;
border-radius:5px;
color: #17660c;
&:hover{
    background:#f2f2f2;
}
`;


const HeaderM = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
margin-botton:20px;
padding-botton:20px;
border-botton:1px solid #e8e8e8;
h3{
    font-weight:500;
    font-size:16px;
    color:#17660c;
}
`;

const Contenedor = styled.div`
width:500px;
min-height:100px;
background:#fff;
position:relative;
border-radius: 5px;
box-shadow:rgba(100,100,11,.2) 0px 7px 29px 0px;
padding:20px;
`;


