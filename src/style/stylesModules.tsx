import Background from '../assets/Home.png'; // Imagem importada corretamente

export const styleModules = {
    Home: {
        backgroundImage: `url(${Background})`,
        height: '100vh',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white',
        fontFamily: 'roboto',
        padding: '20px', // Evita que o conteúdo fique grudado nas bordas
        '@media (max-width: 1024px)': { // Tablets
            justifyContent: 'center',
        },
        '@media (max-width: 600px)': { // Mobile
            height: '80vh',
            justifyContent: 'center',
        }
    },
    Titulo1: {
        marginLeft: '2rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
        fontSize: '2rem', // Definindo um tamanho de fonte responsivo
        '@media (max-width: 1024px)': {
            marginLeft: '1.5rem',
        },
        '@media (max-width: 600px)': {
            marginLeft: '1rem',
            fontSize: '1.5rem',
        }
    },
    Subtitulo: {
        marginLeft: '2.5rem',
        color: "#9b9b9b",
        fontSize: '1.2rem', // Adicionando tamanho de fonte para consistência
        '@media (max-width: 1024px)': {
            marginLeft: '2rem',
        },
        '@media (max-width: 600px)': {
            marginLeft: '1rem',
            fontSize: '1rem',
        }
    },
    SubtituloBottom: {
        marginLeft: '2.5rem',
        color: "#9b9b9b",
        marginBottom: '5rem',
        '@media (max-width: 1024px)': {
            marginBottom: '4rem',
        },
        '@media (max-width: 600px)': {
            marginLeft: '1rem',
            marginBottom: '2rem',
        }
    }
};

export const About = {
    AboutTitle: {
        textAlign: 'center',
        minHeight: '100vh',
        background: '#141414',
        color: '#FFFFFF',
        paddingTop: '2rem',
        '@media (max-width: 1024px)': {
            minHeight: 'auto',
            padding: '2rem',
        },
        '@media (max-width: 600px)': {
            height: 'auto',
            padding: '1rem',
        }
    },
    AboutTop: {
        paddingTop: '2rem',
        fontWeight: 'bold',
        fontSize: '2rem',
        '@media (max-width: 600px)': {
            paddingTop: '1rem',
            fontSize: '1.5rem',
        }
    },
    AboutText: {
        textAlign: 'left',
        marginTop: '1.5rem',
        fontSize: '1.2rem',
        '@media (max-width: 600px)': {
            fontSize: '1rem',
        }
    }
};

export const Habilidades = {
    Box: {
        minHeight: '80vh',
        background: '#FFFF',
        color: 'black',
        padding: '2rem',
        '@media (max-width: 600px)': {
            minHeight: 'auto',
            padding: '1rem',
        }
    },
    Container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '4rem',
        '@media (max-width: 600px)': {
            marginTop: '2rem',
        }
    },
    Titulo: {
        marginTop: '2rem',
        fontSize: '2rem',
        '@media (max-width: 600px)': {
            fontSize: '1.5rem',
        }
    },
    Container2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10rem',
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
            marginTop: '5rem',
        },
        '@media (max-width: 600px)': {
            marginTop: '2rem',
            marginBottom: '2rem',
        }
    },
    BoxImagem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '200px',
        maxHeight: '200px',
        '@media (max-width: 600px)': {
            maxWidth: '150px',
            maxHeight: '150px',
        }
    }
};

export const vejaProjetos = {
    Titulo: {
        textAlign: "center",
        marginTop: '5rem',
        fontSize: '2rem',
        '@media (max-width: 600px)': {
            marginTop: '2rem',
            fontSize: '1.5rem',
        }
    },
    Container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
        }
    },
    Container2: {
        flexBasis: '50%',
        padding: '0.5rem',
        '@media (max-width: 1024px)': {
            flexBasis: '100%',
            padding: '1rem',
        }
    },
    TituloProjeto: {
        marginTop: '2rem',
        fontSize: '1.8rem',
        '@media (max-width: 600px)': {
            fontSize: '1.2rem',
        }
    },
    TextoProjeto: {
        marginTop: '2rem',
        fontSize: '1.2rem',
        '@media (max-width: 600px)': {
            fontSize: '1rem',
        }
    },
    ImagemProjeto: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            flexBasis: '100%',
        }
    },
    Container3: {
        display: 'flex',
        flexDirection: 'row',
        '@media (max-width: 600px)': {
            flexDirection: 'column',
            marginTop: '2rem',
        }
    },
    ImagemProjeto2: {
        flexBasis: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '@media (max-width: 600px)': {
            flexBasis: '100%',
            marginBottom: '2rem',
        }
    },
    TextoProjeto2: {
        flexBasis: '50%',
        padding: '0.5rem',
        '@media (max-width: 600px)': {
            flexBasis: '100%',
            textAlign: 'center',
            marginBottom: '2rem',
        }
    },
    TextoProjeto3: {
        marginTop: '2rem',
        fontSize: '1.2rem',
        '@media (max-width: 600px)': {
            fontSize: '1rem',
            textAlign: 'center',
        }
    }
};

export const Frase = {
    Container: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        padding: '1rem', // Adicionando padding para evitar conteúdo colado nas bordas
        '@media (max-width: 600px)': {
            minHeight: '80vh', // Ajuste de altura para telas menores
            padding: '0.5rem', // Reduzindo o padding em telas menores
        }
    },
    Box: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        margin: '0',
        padding: '1rem', // Espaçamento interno para melhor layout
        '@media (max-width: 600px)': {
            padding: '0.5rem', // Ajuste em telas menores
        }
    },
    Frase: {
        fontWeight: 'bold',
        fontSize: '2rem', // Definindo tamanho da fonte
        '@media (max-width: 600px)': {
            fontSize: '1.5rem', // Reduzindo o tamanho da fonte para telas menores
        }
    }
};

export const RedesSociais = {
    Container: {
        display: 'flex', 
        background: '#FFFF', 
        color: 'black', 
        justifyContent: 'center', 
        alignItems: 'center',  
        minHeight: '40vh',
        padding: '2rem', // Adicionando espaçamento para a responsividade
        '@media (max-width: 600px)': {
            flexDirection: 'column', // Empilhar os itens verticalmente em telas menores
            padding: '1rem', // Reduzindo o padding para telas menores
        }
    },
    TextoTitulo: {
        marginTop: '80px',
        fontSize: '2rem', // Definindo tamanho da fonte
        '@media (max-width: 600px)': {
            marginTop: '40px', // Reduzindo o espaçamento superior em telas menores
            fontSize: '1.5rem', // Reduzindo tamanho da fonte para telas menores
        }
    },
    Texto: {
        marginTop: '20px',
        fontSize: '1.2rem', // Adicionando tamanho da fonte
        '@media (max-width: 600px)': {
            marginTop: '10px', // Ajuste em telas menores
            fontSize: '1rem', // Tamanho menor para telas pequenas
        }
    },
    Container2: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        gap: '2rem', // Espaçamento entre os itens
        '@media (max-width: 600px)': {
            flexDirection: 'column', // Empilhamento vertical em telas menores
            gap: '1rem', // Redução do gap em telas pequenas
        }
    }
};
