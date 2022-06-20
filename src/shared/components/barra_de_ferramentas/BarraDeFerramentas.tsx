import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material"


interface IBarraDeFerramentasProps {
    textoDeBusca?: string;
    mostrarInputDeBusca?: boolean;
    aoMudarTextoDeBusca?: (novoTexto: string) => void;
    textoBotaoNovo?: string;
    mostrarBotaoNovo?: boolean;
    aoClicarBotaoNovo?: () => void;
    children: React.ReactNode;
}


export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
    textoDeBusca = "", 
    mostrarInputDeBusca = false, 
    aoMudarTextoDeBusca,
    textoBotaoNovo = "novo",
    mostrarBotaoNovo = true,
    aoClicarBotaoNovo,
    children 
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

            { mostrarInputDeBusca &&(
                <TextField size="small" placeholder="Pesquisar..." value={textoDeBusca} onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}/>
            )}
            
            { mostrarBotaoNovo && (
                <Box flex={1} display="flex" justifyContent="end">
                    <Button
                        color="primary"
                        disableElevation
                        variant="contained"
                        endIcon={<Icon>add</Icon>}
                    >Novo</Button>
                </Box>
            )}
        </Box>
    )
}