import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { ReactComponent as Clear } from '../../assets/clear.svg';
import { Form, Login, Gradiente, Cabecalho, ConteudoLogin, 
        Informacoes, Box, TextInput, Icon, FundoMobile, Enviar, BotaoEnviar } from "../../styles/styles";
import { Row, Column } from "../../styles/Grid";

function SignIn(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    async function handleSignIn(e) {
        e.preventDefault();
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            try {
                const response = await api.post("/sessions", { email, password });
                login(response.data.token);
                props.history.push("/app");
            } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais.");
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
                    <Form onSubmit={handleSignIn}>
                        <Login>
                            <ConteudoLogin>
                                <Cabecalho>
                                    Olá, seja
                                <p/>
                                    bem-vindo!
                                </Cabecalho>
                                <Informacoes>
                                    Para acessar a plataforma,
                                <p/>
                                    faça seu login.
                                </Informacoes>

                                {error && <p>{error}</p>}
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
                            Esqueceu seu login ou senha?
                        </p>
                        <Link to="/signup">Clique aqui </Link>
                    </Form>
                </Column>
            </Row>
    );
}


export default withRouter(SignIn);