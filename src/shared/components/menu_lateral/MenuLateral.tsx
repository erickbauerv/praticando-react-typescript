import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"

interface IProps{
    children: React.ReactNode
}

export const MenuLateral: React.FC<IProps> = ({children}) => {
    const theme = useTheme()

    return(
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar 
                            sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                            src="https://avatars.githubusercontent.com/u/88293617?v=4"
                        />
                    </Box>
                    <Divider/>
                    <Box flex={1}>
                        <List>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="inbox"/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}