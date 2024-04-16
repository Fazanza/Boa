import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BugReportSharpIcon from '@mui/icons-material/BugReportSharp';
import NextLink from "next/link";

const routes = ['Home', 'About', 'Multiplayer', 'Single player']

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ maxWidth: 'sm' }}>
                        <Typography component={NextLink} href="/">
                            Boa
                        </Typography>
                        <BugReportSharpIcon/>
                    </Box>

                    <Box sx={{ maxWidth: 'sm', flexGrow: 1 }}>
                        {routes.map((route) => (
                            <Typography variant="h6" component={NextLink} href={route}>
                                {route}
                            </Typography>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
