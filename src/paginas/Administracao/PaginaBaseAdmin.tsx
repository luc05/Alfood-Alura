import { AppBar, Box, Button, Container, Paper, Toolbar, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"

const PaginaBaseAdmin = () => {
    return(
        <>
       <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6">
                        Administração
                    </Typography>
                    <Box sx={{display:"flex", flexGrow: 1}}>
                     <Link to={"/admin/restaurantes/"}>
                        <Button sx={{my:2, color:"white"}}>
                            Restaurantes
                        </Button>
                     </Link>
                     <Link to={"/admin/restaurantes/novo/"}>
                        <Button sx={{my:2, color:"white"}}>
                            Novo restaurante
                        </Button>
                     </Link>
                     <Link to={"/admin/pratos/"}>
                        <Button sx={{my:2, color:"white"}}>
                            Pratos
                        </Button>
                     </Link>
                     <Link to={"/admin/pratos/novo"}>
                        <Button sx={{my:2, color:"white"}}>
                            Novo prato
                        </Button>
                     </Link>
                    </Box>
                </Toolbar>
            </Container>
       </AppBar>
       <Box>
        <Container maxWidth="lg" sx={{mt:1}}>
            <Paper sx={{p:2}}>
                <Outlet/>
            </Paper>
        </Container>
       </Box>
       </>
    )
}

export default PaginaBaseAdmin