import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import PassionateHarpistLogo from "../resources/images/harpist-logo.png";
import ToggleTheme from "../components/ToggleTheme";
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export function Header() {

    const theme = useTheme();
    const useStyles = makeStyles({
        header: {
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: '1'
        },
        logo: {
            width: '200px',
            [theme.breakpoints.up('md')]: {
                width: '300px'
            },
        },
        toggleTheme: {
            margin: '0 10px'
        },
        navItem: {
            display: 'flex',
            alignItems: 'center'
        },
        navLink: {
            fontSize: '16px',
            fontWeight: '300',
            color: 'white !important',
            "&:hover": {
                color: 'lightgray !important'
            }
        },
        boxShadow: {
            boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)',
            background: 'rgba(0, 0, 0, 0.35)'
        },
        controls: {
            display: 'flex',
            alignItems: 'center'
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
    });

    const classes = useStyles();
    const headerRef = useRef(null);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
        setCollapsed(collapsed => !collapsed);
    };

    const handleOutsideClick = (e) => {
        if (headerRef.current && !headerRef.current.contains(e.target)) {
            setCollapsed(true);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick, true);
        return () => {
            document.removeEventListener('click', handleOutsideClick, true);
        };
    }, []);

    return (
        <header className={classes.header} ref={headerRef}>
            <Navbar className={`navbar-expand-sm navbar-toggleable-sm ng-white mb-3 ${classes.boxShadow}`} dark>
                <Container>
                    <NavbarBrand tag={Link} to="/">
                        <img src={PassionateHarpistLogo} alt="Passionate Harpist" className={classes.logo} />
                    </NavbarBrand>
                    <div className={classes.controls}>
                        {/**<div className={`${classes.sectionMobile} ${classes.toggleTheme}`}>
                            <ToggleTheme />
                        </div>**/}
                        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    </div>
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink tag={Link} className={classes.navLink} to="/">Home</NavLink>
                            </NavItem>
                            <NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink tag={Link} className={classes.navLink} to="/gallery">Gallery</NavLink>
                            </NavItem>
                            {/**<NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink tag={Link} className={classes.navLink} to="/services">Services</NavLink>
                            </NavItem>
                            <NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink tag={Link} className={classes.navLink} to="/reviews">Reviews</NavLink>
                            </NavItem>**/}
                            <NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink tag={Link} className={classes.navLink} to="/social-media">Social Media</NavLink>
                            </NavItem>
                            <NavItem className={classes.navItem} onClick={() => setCollapsed(true)}>
                                <NavLink className={classes.navLink} href="/contact">Contact</NavLink>
                            </NavItem>
                            {/**<NavItem className={`${classes.sectionDesktop} ${classes.navItem}`} onClick={() => setCollapsed(true)}>
                                <div className={classes.toggleTheme}>
                                    <ToggleTheme />
                                </div>
                            </NavItem>**/}
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}