import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material"


interface IFerramentasDeListagemProps{
    textoBotaoNovo?: string;

    mostrarBotaoSalvar?: boolean;
    mostrarBotaoSalvarFechar?: boolean;
    mostrarBotaoApagar?: boolean;
    mostrarBotaoNovo?: boolean;
    mostrarBotaoVoltar?: boolean;

    mostrarBotaoSalvarCarregando?: boolean;
    mostrarBotaoSalvarFecharCarregando?: boolean;
    mostrarBotaoApagarCarregando?: boolean;
    mostrarBotaoNovoCarregando?: boolean;
    mostrarBotaoVoltarCarregando?: boolean;

    aoClicarEmSalvar?: () => void;
    aoClicarEmSalvarFechar?: () => void;
    aoClicarEmApagar?: () => void;
    aoClicarEmNovo?: () => void;
    aoClicarEmVoltar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeListagemProps> = ({
    textoBotaoNovo = "novo",

    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarFechar = false,
    mostrarBotaoApagar = true,
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,

    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoSalvarFecharCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,

    aoClicarEmSalvar,
    aoClicarEmSalvarFechar,
    aoClicarEmApagar,
    aoClicarEmNovo,
    aoClicarEmVoltar,
}) => {
    const theme = useTheme();
    
    return(
        <Box 
            component={Paper}
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
        >
            { (mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) &&(
                <Button
                    onClick={aoClicarEmSalvar}
                    color="primary"
                    disableElevation
                    variant="contained"
                    startIcon={<Icon>save</Icon>}
                >Salvar</Button>
            )}

            { mostrarBotaoSalvarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando) && (
                <Button
                onClick={aoClicarEmSalvarFechar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>save</Icon>}
                >Salvar e Voltar</Button>
            )}

            { mostrarBotaoSalvarFecharCarregando &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    onClick={aoClicarEmApagar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>delete</Icon>}
                >Apagar</Button>
            )}
            
            { mostrarBotaoApagarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
                <Button
                    onClick={aoClicarEmNovo}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>add</Icon>}
                >Novo</Button>
            )}
            
            { mostrarBotaoNovoCarregando &&(
                <Skeleton width={120} height={50}/>
            )}
            <Divider variant="middle" orientation="vertical"></Divider>
            
            { (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button
                    onClick={aoClicarEmVoltar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>arrow_back</Icon>}
                >Voltar</Button>
            )}

            { mostrarBotaoVoltarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}
        </Box>
    )
}