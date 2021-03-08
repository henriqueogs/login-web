import styled from "styled-components";
import Desktop from '../assets/desktop.svg'
import Tablet from '../assets/tablet.svg'
import Mobile from '../assets/mobile.svg'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
`;

export const Gradiente = styled.div`
  @media only screen and (max-width: 374px) {
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${Mobile});
    background-repeat: no-repeat;
    width: auto;
    height: 383px;
    display: flex;
    flex: 1;
  }
  @media only screen and (min-width: 375px) {
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${Tablet});
    background-repeat: no-repeat;
    height: 1024px;
  }
  @media only screen and (min-width: 1000px) {
    background: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${Desktop});
    background-repeat: no-repeat;
    height: 768px; 
  }
`;

export const FundoMobile = styled.div`
  @media only screen and (max-width: 375px) {
    background-color: #130525;
    height: 350px;
  }
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConteudoLogin = styled.div`
  background-color: white;
  padding : 27px;
  border-radius: 8px;
  margin-top: 128px;
`;

export const Cabecalho = styled.div`
  margin-bottom:16px;
  text-align: left;
  font-size: 40px;
  line-height: 48px;
  color: #383E71;
`;

export const Informacoes = styled.div`
  text-align: left;
  font-size: 16px;
  line-height: 20px;
  color: #989FDB;
  margin-bottom: 63px;
  font-weight: bold;
`;

export const Enviar = styled.div`
  @media only screen and (max-width: 375px) {
    margin: -7% 15px 15px 15px;
  }
    margin: 0px 50px 15px;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const BotaoEnviar = styled.button`
  color: white;
  width: 50%;
  border:none; 
  height: 48px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  border-radius: 8px;

`;

export const Form = styled.form`
  flex-direction: column;
  align-items: center;
  label{
    font-size: 14px;
    margin: 5px;
    color: #383E71;
    display: flex;
    text-align: left;
  }
  p {
    display: grid;
    font-size: 14px;
    color: #999;
    text-decoration: none;
    text-align: center;
  }
  a {
    display: grid;
    font-size: 14px;
    color: #999;
    text-align: center;
  }
`;

export const Box = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  border: 1px solid #989FDB;
  border-radius: 8px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

export const TextInput = styled.input`
  flex: 1 0;
  width: 100%;
  height: 48px;
  font-size: inherit;
  background-color: transparent;
  border: 0 !important;
  &:focus {
    outline: none;
  }
`;

export const Icon = styled.div`
  flex: 0 0;
  color: #989FDB;
`;

