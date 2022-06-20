import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"


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
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"))
    
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
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar
                    </Typography>
                </Button>
            )}

            { mostrarBotaoSalvarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
                <Button
                onClick={aoClicarEmSalvarFechar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>save</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Salvar e Voltar
                    </Typography>
                </Button>
            )}

            { (mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
                <Button
                    onClick={aoClicarEmApagar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>delete</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Apagar
                    </Typography>
                </Button>
            )}
            
            { mostrarBotaoApagarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}

            { (mostrarBotaoNovo && !mostrarBotaoNovoCarregando  && !smDown) && (
                <Button
                    onClick={aoClicarEmNovo}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Novo
                    </Typography>
                </Button>
            )}
            
            { (mostrarBotaoNovoCarregando && !smDown) &&(
                <Skeleton width={120} height={50}/>
            )}

            {(mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarFechar)) && (
                <Divider variant="middle" orientation="vertical"></Divider>
            )}
            
            
            { (mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
                <Button
                    onClick={aoClicarEmVoltar}
                    color="primary"
                    disableElevation
                    variant="outlined"
                    startIcon={<Icon>arrow_back</Icon>}
                >
                    <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        Voltar
                    </Typography>
                </Button>
            )}

            { mostrarBotaoVoltarCarregando &&(
                <Skeleton width={120} height={50}/>
            )}
        </Box>
    )
}