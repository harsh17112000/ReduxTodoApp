import { React, useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Alert from 'react-bootstrap/Alert'
import { DeletContext } from './context/ContextProvider';

const Navbaar = () => {

    const { deleteuser, setDeleteuser } = useContext(DeletContext)

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: "#232f3e" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ textAlign: "center" }}>
                        Redux TO-DO App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        {
            deleteuser ? <Alert variant="danger" onClose={() => setDeleteuser(false)} dismissible>
                <Alert.Heading>Your Task Remove Successfully!</Alert.Heading>
            </Alert> : ""
        }

    </>;
};

export default Navbaar;
