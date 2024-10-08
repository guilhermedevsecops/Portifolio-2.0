import { Box, Container, ImageList, Typography } from '@mui/material';
import React from 'react';
import {About, Frase, Habilidades, RedesSociais, styleModules, vejaProjetos} from '../style/stylesModules'; 

//imagens

import Node from '../assets/node.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'
import DBA from '../assets/db.png'
import Cartao from '../assets/microservicosCartao.png'
import CopiaBanco from '../assets/Copiador banco de dados.png'
import Forum from '../assets/MiniBlog.422e9ea3a1568f37c4fc.png'
import Linkedin from '../assets/Design sem nome (1).png'
import Instagram from '../assets/image (5).png'
import Github from '../assets/image (4).png'
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Box
                sx={{...styleModules['Home']

                }}
            >
                <Typography variant="h2" align="left" sx={{...styleModules['Titulo1'] }}>
                    Guilherme Henrique
                </Typography>
                <Typography sx={{ ...styleModules['Subtitulo']}}>
                    Analista e Desenvolvedor de Sistemas
                </Typography>
                <Typography sx={{ ...styleModules['Subtitulo']}}>
                    Especialista de Cybersegurança
                </Typography>
                <Typography sx={{ ...styleModules['Subtitulo']}}>
                    MBA em Banco de Dados
                </Typography>
                <Typography sx={{...styleModules['SubtituloBottom'] }}>
                    Arquitetura de Software
                </Typography>
            </Box>
            <Box sx={{ ...About['AboutTitle']}}>
                <Container>
                    <Typography variant="h4" sx={{ ...About['AboutTop'] }}>Sobre</Typography>
                    <Typography variant="h6" sx={{ ...About['AboutText'] }}>Meu nome é Guilherme Henrique de Sousa Jesus. Sou formado em Análise e Desenvolvimento de Sistemas, pós-graduado <br/>em Ethical Hacking e Cybersecurity, além de um MBA em Banco de Dados. Atualmente, estou concluindo minha formação em Arquitetura de Software.</Typography>
                    <Typography variant="h6" sx={{ ...About['AboutText'] }}>Ao longo da minha carreira, participei de diversos projetos, incluindo o desenvolvimento de inteligência para bancos de dados,<br/> a criação de uma estrutura de chatbot com integração ao WhatsApp e a plataforma Weni, e a automação de sistemas de autochamados, utilizando Zabbix e o sistema EPA. Também desenvolvi soluções de monitoramento e automação para garantir a disponibilidade contínua de websites.</Typography>
                    <Typography variant="h6" sx={{ ...About['AboutText'] }}>Além disso, atuei em projetos de implantação de sistemas corporativos, desempenhando o papel de DevSecOps.<br/> As tecnologias utilizadas incluem Docker, Proxmox, VMware, Openfire e Active Directory, com a implementação de integrações via LDAP para garantir uma comunicação centralizada.</Typography>
                    <Typography variant="h6" sx={{ ...About['AboutText'] }}>Possuo também sólida experiência em desenvolvimento fullstack, com proficiência em linguagens como Java, JavaScript, ReactJS e Python, o que me permite atuar em todas as camadas de uma aplicação, desde o backend até o frontend.</Typography>
                    <Typography variant="h6" sx={{ ...About['AboutText'] }}>Abaixo estão alguns dos projetos que desenvolvi ao longo da minha trajetória:</Typography>
                </Container>
            </Box>
            <Box sx={{ ...Habilidades['Box'] }}>
                <Container sx={{...Habilidades['Container']}}>
                    <Typography variant="h3" sx={{ marginTop: '40px' }}>Linguagem e Frameworks</Typography>
                    <Container sx={{ ...Habilidades['Container2'] }}>
                        <Box sx={{ ...Habilidades['BoxImagem'] }}>
                            <img src={Java} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                        <Box sx={{ ...Habilidades['BoxImagem'] }}>
                            <img src={Node} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                        <Box sx={{ ...Habilidades['BoxImagem'] }}>
                            <img src={Python} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                        <Box sx={{ ...Habilidades['BoxImagem'] }}>
                            <img src={DBA} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </Box>
                    </Container>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Typography variant="h3" sx={{ ...vejaProjetos['Titulo'] }}>Veja Alguns Projetos</Typography>
                </Container>
                <Container>
                    <Container sx={{ ...vejaProjetos['Container'] }}>
                        <Container sx={{ ...vejaProjetos['Container2']}}>
                            <Typography variant="h4" sx={{ ...vejaProjetos['TituloProjeto']}}>Microserviços de Cartões</Typography>
                            <Typography sx={{ ...vejaProjetos['TextoProjeto'] }}>
                                A aplicação de cartões de crédito foi desenvolvida utilizando uma arquitetura de microserviços, escolhida por sua alta escalabilidade.<br />Essa abordagem permite rápida criação/implementação de novos containers Docker, garantindo que o sistema responda de forma eficiente ao aumento de demandas e garantindo maior flexibilidade <br/>e agilidade nas operações.


                            </Typography>
                            <Typography sx={{ marginTop: 2 }}>O sistema utiliza as seguintes tecnologias:</Typography>
                            <ul>
                                <li>Docker</li>
                                <li>RabbitMQ</li>
                                <li>SpringBoot</li>
                                <li>SpringCloud</li>
                                <li>Eureka Server</li>
                            </ul>
                            <NavLink to="https://github.com/guilhermedevsecops/Microservicos_Cartao">Veja o codigo clicando aqui</NavLink>
                        </Container>
                        <Container sx={{...vejaProjetos['ImagemProjeto'] }}>
                            <img src={Cartao} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="Cartão de Crédito" />
                        </Container>
                    </Container>

                </Container>
            </Box >
            <Box>
                <Container>
                    <Container sx={{ ...vejaProjetos['Container3'] }}>
                        <Container sx={{ ...vejaProjetos['ImagemProjeto2'] }}>
                            <img src={Forum} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="Cartão de Crédito" />
                        </Container>
                        <Container sx={{...vejaProjetos['TextoProjeto2'] }}>
                            <Typography variant="h4" sx={{ marginTop: '30px' }}>Forum Criado em Reactjs</Typography>
                            <Typography sx={{ ...vejaProjetos['TextoProjeto3'] }}>
                                O fórum desenvolvido em React tem como objetivo permitir a criação e a interação com postagens, servindo como um exercício prático para o treinamento de requisições API. A plataforma integra o frontend com o backend, proporcionando uma experiência completa e simulando as funcionalidades essenciais de um fórum real.


                            </Typography>
                            <Typography sx={{ marginTop: 2 }}>O sistema utiliza as seguintes tecnologias:</Typography>
                            <ul>
                                <li>Firebase</li>
                                <li>ReactJS</li>
                            </ul>
                            <NavLink to="https://github.com/guilhermedevsecops/MiniBlog">Veja o codigo clicando aqui</NavLink>
                        </Container>
                    </Container>

                </Container>
            </Box >
            <Box>
                <Container>
                    <Container sx={{ ...vejaProjetos['Container'] }}>
                        <Container sx={{ ...vejaProjetos['Container2']}}>
                            <Typography variant="h4" sx={{ ...vejaProjetos['TituloProjeto']}}>Copiador de Banco de dados</Typography>
                            <Typography sx={{ ...vejaProjetos['TextoProjeto'] }}>
                                O copiador de banco de dados desenvolvido em Python tem como objetivo realizar uma cópia completa do banco, permitindo seu uso posterior. Essa ferramenta é especialmente útil para quem precisa realizar extrações ETL de tabelas inteiras, a fim de analisá-las em outro ambiente sem comprometer a integridade do banco de dados original, garantindo que a fonte permaneça inalterada.


                            </Typography>
                            <Typography sx={{ marginTop: 2 }}>O sistema utiliza as seguintes tecnologias:</Typography>
                            <ul>
                                <li>Python</li>
                                <li>PostgreSQL</li>

                            </ul>
                            <NavLink to="https://github.com/guilhermedevsecops/Conversor_de_Bancos_PYTHON">Veja o codigo clicando aqui</NavLink>
                        </Container>
                        <Container sx={{...vejaProjetos['ImagemProjeto'] }}>
                            <img src={CopiaBanco} style={{ maxWidth: '100%', maxHeight: '100%' }} alt="Cartão de Crédito" />
                        </Container>
                    </Container>

                </Container>
            </Box >
            <Box sx={{ ...Frase['Container'] }}>
                <Container sx={{...Frase['Box']}}>
                    <Typography variant='h3' align="center" sx={{...Frase['Frase'] }}>O primeiro lugar onde o sucesso vem antes do trabalho é no dicionário.</Typography>
                    <Typography variant='h4' align="center" sx={{...Frase['Frase']}}>- Vidal Sassoon</Typography>
                </Container>
            </Box>
            <Box sx={{...RedesSociais['Container'] }}>
                <Container >
                    <Typography variant="h3" sx={{...RedesSociais['TextoTitulo']}}>Redes Sociais</Typography>
                    <Typography sx={{...RedesSociais['Texto']}}>Para conhecer mais sobre meus projetos ou agendar uma entrevista, sinta-se à vontade para visitar meus perfis nas redes sociais abaixo. Estou aberto a novas oportunidades e ansioso para colaborar em projetos desafiadores e inovadores.</Typography>
                    <Container sx={{ ...RedesSociais['Container2']}}>
                        <img src={Github} style={{ width: '200px', height: '200px' }} alt="Github" />
                        <img src={Linkedin} style={{ width: '200px', height: '200px' }} alt="Linkedin" />
                        <img src={Instagram} style={{ width: '200px', height: '200px' }} alt="Instagram" />
                    </Container>

                </Container>
            </Box>


        </>
    );
}

export default Home;
