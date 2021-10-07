import { createTheme, adaptV4Theme } from "@material-ui/core/styles";

export const lightTheme = createTheme(adaptV4Theme({
    background: "#F8F8F9",
    gradient: "linear-gradient(#091236, #1E215D)",
    text: "rgb(60,60,60)",
    lightText: "rgb(145,145,145)",
    superb: "rgb(60,60,60)",
    general: {
        dark: "rgb(255,255,255)",
        medium: "rgb(60,60,60)",
        light: "#363537"
    },
    button: {
        text: "rgb(255,255,255)",
        background: "rgb(60,60,60)",
        hover: "rgb(90,90,90)"
    },
    divider: {
        backgroundColor: "#D3D3D3"
    },
    palette: {
        primary: {
            light: "rgb(60,60,60)",
            main: "rgb(60,60,60)"
        },
        secondary: {
            light: "rgb(255,255,255)",
            main: "rgb(255,255,255)"
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: `"Times New Roman", "Times", serif`,
    },
    overrides: {
        MuiSwitch: {
            thumb: {
                color: "#363537"
            }
        },
        MuiInputLabel: {
            root: {
                color: "rgb(60,60,60)"
            }
        },
        MuiButton: {
            contained: {
                marginTop: "16px",
                color: "rgb(255,255,255)",
                backgroundColor: "rgb(60,60,60)",
                "&:hover": {
                    backgroundColor: "rgb(90,90,90)"
                }
            }
        },
        MuiTypography: {
            root: {
                color: "rgb(60,60,60)"
            }
        },
        MuiBottomNavigationAction: {
            root: {
                minWidth: '0'
            }
        },
        MuiCard: {
            root: {
                backgroundColor: "rgb(255,255,255)"
            }
        },
        MuiCardHeader: {
            subheader: {
                color: "rgb(60,60,60)"
            }
        },
        MuiToolbar: {
            root: {
                justifyContent: "center"
            }
        },
        MuiSnackbarContent: {
            message: {
                width: "100%"
            }
        }
    }
}));

export const darkTheme = createTheme(adaptV4Theme({
    background: "#363537",
    gradient: "linear-gradient(#DE4DAA, #F6D327)",
    text: "rgb(255,255,255)",
    lightText: "rgb(145,145,145)",
    superb: "rgb(191,191,191)",
    general: {
        dark: "#363537",
        medium: "rgb(191,191,191)",
        light: "rgb(255,255,255)"
    },
    button: {
        text: "rgb(255,255,255)",
        background: "rgb(191,191,191)",
        hover: "rgb(212,212,212)"
    },
    divider: {
        backgroundColor: "#696969"
    },
    palette: {
        primary: {
            light: "#363537",
            main: "#363537"
        },
        secondary: {
            light: "rgb(255,255,255)",
            main: "rgb(255,255,255)"
        },
        background: {
            default: "#2b2b2b"
        }
    },
    typography: {
        useNextVariants: true,
        fontFamily: `"Times New Roman", "Times", serif`,
    },
    overrides: {
        MuiSwitch: {
            thumb: {
                color: "rgb(191,191,191)"
            },
            track: {
                backgroundColor: "rgb(255,255,255)"
            }
        },
        MuiTextField: {
            root: {
                color: "rgb(191,191,191)",
                borderColor: "rgb(191,191,191)",
                "&:hover": {
                    borderColor: "rgb(191,191,191)",
                    color: "rgb(191,191,191)"
                }
            },
            outlined: {
                color: "rgb(191,191,191)",
                borderColor: "rgb(191,191,191)",
                "&:hover": {
                    borderColor: "rgb(191,191,191)",
                    color: "rgb(191,191,191)"
                }
            },
        },
        MuiInputLabel: {
            outlined: {
                color: "rgb(191,191,191)",
                "&$focused": {
                    color: "rgb(191,191,191)"
                }
            },
            filled: {
                color: "rgb(191,191,191)",
                "&$focused": {
                    color: "rgb(191,191,191)"
                }
            },
        },
        MuiFormLabel: {
            root: {
                "&$focused": {
                    color: "rgb(191,191,191)"
                }
            }
        },
        MuiOutlinedInput: {
            notchedOutline: {
                borderColor: "rgb(191,191,191)",
                color: "rgb(191,191,191)",
                "&:hover": {
                    color: "rgb(191,191,191)",
                    borderColor: "rgb(191,191,191)"
                }
            },
            root: {
                color: "rgb(191,191,191)",
                "&$focused": {
                    color: "rgb(191,191,191)",
                },
                "&:hover": {
                    color: "rgb(191,191,191)",
                    borderColor: "rgb(191,191,191)"
                }
            },
        },
        MuiFilledInput: {
            root: {
                color: "rgb(191,191,191)",
                "&$focused": {
                    color: "rgb(191,191,191)"
                }
            }
        },
        MuiButton: {
            contained: {
                marginTop: "16px",
                color: "rgb(10,10,10)",
                backgroundColor: "rgb(191,191,191)",
                "&:hover": {
                    backgroundColor: "rgb(150,150,150)"
                }
            }
        },
        MuiTypography: {
            root: {
                color: "rgb(255,255,255)"
            }
        },
        MuiCard: {
            root: {
                backgroundColor: "#363537"
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: "#363537"
            }
        },
        MuiBottomNavigationAction: {
            root: {
                minWidth: '0'
            }
        },
        MuiToolbar: {
            root: {
                justifyContent: "center"
            }
        },
        MuiIconButton: {
            colorPrimary: {
                color: "rgb(191,191,191)"
            }
        },
        MuiSnackbarContent: {
            message: {
                width: "100%"
            }
        },
        MuiCardHeader: {
            subheader: {
                color: "#A9A9A9"
            }
        }
    }
}));