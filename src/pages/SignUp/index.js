import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import { ReactComponent as Clear } from '../../assets/clear.svg';
import {
    Form, Login, Gradiente, Cabecalho, ConteudoLogin,
    Informacoes, Box, TextInput, Icon, FundoMobile, Enviar, BotaoEnviar
} from "../../styles/styles";
import { Row, Column } from "../../styles/Grid";
import api from "../../services/api";


function SignUp(props) {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    async function handleSignUp(e) {
        e.preventDefault();
        console.log(e)
        if (!username || !email || !password) {
            setError("Preencha todos os dados para se cadastrar.");
        } else {
            try {
                await api.post("/users", { username, email, password });
                props.history.push("/");
            } catch (err) {
                console.log(err);
                setError("Ocorreu um erro ao registrar sua conta.");
            }
        }
    };

    return (
        <Row>
            <Column mobile='12' tablet='4' desktop='6.8'>
                <Gradiente />
                <FundoMobile />
            </Column>
            <Column mobile='12' tablet='8' desktop='5.2'>
                {error && <p>{error}</p>}
                <Form onSubmit={handleSignUp}>
                    <Login>
                        <ConteudoLogin>
                            <Cabecalho>
                                Cadastro
                                </Cabecalho>
                            <Informacoes>
                                Preencha os campos abaixo,
                                <p />
                                para efetuar seu cadastro.
                            </Informacoes>
                            {error && <p>{error}</p>}
                            <label>NOME</label>
                            <Box>
                                <TextInput
                                    type="text"
                                    placeholder="Seu nome"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                >
                                </TextInput>
                                <Icon>
                                    <Clear
                                        width="20px"
                                        height="20px"
                                        stroke="black"
                                        onClick={() => {
                                            setUsername('');
                                        }}
                                    />
                                </Icon>
                            </Box>
                            <label>E-MAIL</label>
                            <Box>
                                <TextInput
                                    type="email"
                                    placeholder="Endereço de e-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                </TextInput>
                                <Icon>
                                    <Clear
                                        width="20px"
                                        height="20px"
                                        stroke="black"
                                        onClick={() => {
                                            setEmail('');
                                        }}
                                    />
                                </Icon>
                            </Box>
                            <label>SENHA</label>
                            <Box>
                                <TextInput
                                    type="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                >
                                </TextInput>
                                <Icon>
                                    <Clear
                                        width="20px"
                                        height="20px"
                                        stroke="black"
                                        onClick={() => {
                                            setPassword('');
                                        }}
                                    />
                                </Icon>
                            </Box>
                        </ConteudoLogin>
                    </Login>
                    <Enviar >
                        <BotaoEnviar type="submit">ENTRAR</BotaoEnviar>

                    </Enviar>
                    <p>
                        Já possui login e senha?
                        </p>
                    <Link to="/">Clique aqui </Link>
                </Form>
            </Column>
        </Row>

    );

}
export default withRouter(SignUp);