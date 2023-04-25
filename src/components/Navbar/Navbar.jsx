import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from "./Consts/NavbarItems";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import App from "../../App";

const Navbar = () => {
    const drawerWidth = 240;
    const [auth, setAuth] = React.useState(true);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState('Radiant-Apparel');


    
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function scrollToSection(sectionId) {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
        } else {
        console.log(`Element with id ${sectionId} not found`);
        }
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" 
            sx={{
                background: 'linear-gradient(to bottom, rgb(12, 17, 47, 1), rgb(12, 17 ,47, 0))',
                color: 'rgb(191,247,255)',
                
            }}>
        <Toolbar>
        <Box sx={{ flexGrow: 1}}>
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => setDrawerOpen(true)}
            color="inherit"
            >
            <MenuIcon />
            </IconButton>
            <Drawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: 'linear-gradient(to right, rgb(12, 17, 47, 1), rgb(12, 17 ,47, 0))',
                    color: 'rgb(25,147,229)'
                    },
                }}
                variant="temporary"
                anchor="left"
                >

                <Toolbar />
                <Divider />
                <List>
                    {mainNavbarItems.map((text, index) => (
                        <ListItem key={text.id} disablePadding>
                            <ListItemButton onClick={() => scrollToSection(`${text.Scroll}`)}>
                                <ListItemIcon sx= {{color: 'rgb(25,147,229)'}}>
                                {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.label} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <FormControl fullWidth>
                        <Select
                            labelId="select-id"
                            id="select-id"
                            value={selectedOption}
                            onChange={handleChange}
                            renderValue={(value) => (
                            <ListItemText primary={`Selected: ${value}`} />
                            )}
                            sx= {{color: 'rgb(25,147,229)'}}
                        >
                        <MenuItem
                            value="Radiant-Apparel"
                            onClick={() => scrollToSection('RadiantApparel')}
                            >
                            Radiant Apparel
                        </MenuItem>
                        <MenuItem
                            value="Trivia-Game"
                            onClick={() => scrollToSection('TriviaGame')}
                            >
                            Trivia Game
                        </MenuItem>
                        <MenuItem
                            value="This-Site"
                            onClick={() => scrollToSection('ThisSite')}
                            >
                                This Site
                        </MenuItem>
                        </Select>
                        </FormControl>
                    </ListItem>
                </List>
            </Drawer>
        </Box>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                <Box className='Vibes'>
                    Benjamin Ackerman Web Developer
                </Box>
            </Typography>
            {auth && (
            <div>
            </div>
            )}
        </Toolbar>
        </AppBar>
    </Box>


    )
}

export default Navbar