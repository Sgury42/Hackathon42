export default ({ palette, typography, shape, spacing, shadows, insetShadows }) => ({
  MuiFab: {
    root: {
      backgroundColor: palette.background.paper,
      boxShadow: shadows[1],
      '&:hover': {
        backgroundColor: palette.background.paper,
      },
      '&:active': {
        boxShadow: shadows[1],
      }
    },
    primary: {
      '&:hover': {
        backgroundColor: palette.primary.main
      }
    }
  },

  // LIST
  MuiListItemIcon: {
    root: {
      //color: 'inherit',
      minWidth: 0,
      marginRight: spacing(1.5)
    }
  },

  // MENU
  MuiMenuItem: {
    root: {
      fontSize: typography.body2.fontSize,
    },
  },


  MuiAutocomplete: {
    popper: {
      boxShadow: shadows[1]
    },
    paper: {
      boxShadow: 'none'
    }
  },

  // CHIP
  MuiChip: {
    root: {
      borderRadius: shape.borderRadius,
      backgroundColor: palette.contrast.medium,
      color: palette.text.secondary,
      fontWeight: typography.fontWeightMedium,
      height: 28,
      //boxShadow: shadows[0]
    },
    icon: {
      color: 'inherit',
      fontSize: 18
    },
    sizeSmall: {
      //fontWeight: typography.fontWeightNormal,
      fontSize: typography.caption.fontSize
    },
    clickable: {
      '&:hover': {
        backgroundColor: palette.contrast.medium,
        boxShadow: insetShadows[0]
      },
      '&:focus': {
        backgroundColor: palette.contrast.medium,
      },
      '&:active': {
        boxShadow: insetShadows[0]
      }
    }
  },
  // Muitypography: {
  //   paragraph: {
  //     marginBottom: spacing(1),
  //     marginTop: spacing(1)
  //   }
  // },
  MuiTab: {
    root: {
      minWidth: '0px !important',
      //textTransform: 'none'
    }
  },

  // LIST
  MuiListItem: {
    root: {
      '&:hover': {
        color: palette.primary.main,
        '& .MuiListItemIcon-root': {
          color: palette.primary.main,
        }
      },
      '&$selected': {
        fontWeight: typography.fontWeightMedium,
        color: palette.primary.main,
        backgroundColor: palette.contrast.medium,
        '&:hover': {
          backgroundColor: palette.contrast.medium
        },
        '& .MuiListItemIcon-root': {
          color: palette.primary.main,
        }
      },
    },
  },
  MuiListItemText: {
    primary: {
      fontSize: typography.body2.fontSize,
      fontWeight: 'inherit',
    },
  },

  // ICON BUTTON
  MuiIconButton: {
    root: {
      padding: 8
    }
  },
  MuiDrawer: {
    paperAnchorDockedLeft: {
      borderRight: 'none',
      boxShadow: shadows[0],
      //boxShadow: '1px 0 rgba(0, 0, 0, .05)'
    }
  },

  
  // INPUTS
  MuiFormControl: {
    marginNormal: {
      marginTop: 0
    }
  },
  MuiInput: {
    root: {
      border: 'solid 2px transparent',
      backgroundColor: palette.contrast.medium,
      borderRadius: shape.borderRadius,
      '&$focused': {
        border: `solid 2px ${palette.primary.main}`,
        backgroundColor: 'transparent',
        boxShadow: shadows[0]
      },
      '&$error': {
        border: `solid 2px ${palette.error.main}`,
      }
    },
    input: {
      fontSize: typography.body2.fontSize,
      //fontWeight: 600,
      padding: 8
    },
  },
  MuiInputAdornment: {
    root: {
      color: palette.text.secondary,
    },
    positionStart: {
      marginLeft: 4,
      marginRight: 0
    }
  },
  MuiSelect: {
    select: {
      //color: palette.primary.main
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: typography.body2.fontSize
    },
    formControl: {
      transform: 'translate(8px, 28px) scale(1)'
    },
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.85)'
    }
  },
  MuiInputBase: {
    input: {
      height: 'auto' // disable determinate height
    }
  },


  // APPBAR
  MuiAppBar: {
    root: {
      boxShadow: `0 1px ${palette.contrast.medium}`,
    },
    colorDefault: {
      backgroundColor: palette.background.paper
    },
  },
  MuiCard: {
    root: {
      border: `solid 1px ${palette.contrast.high}`,
      boxShadow: 'none',
    }
  },
  MuiLink: {
    underlineHover: {
      textDecoration: 'none'
    }
  },
  MuiButton: {
    root: {
      transition: '.2s',
      textTransform: 'none',
      textDecoration: 'none',
      fontSize: 16
    },
    contained: {
      boxShadow: shadows[0],
      '&:hover': {
        transform: 'translateY(-3px)', boxShadow: shadows[1],
        '@media (hover: none)': {
          boxShadow: insetShadows[0]
        },
      },
      '&:active': {
        transform: 'translateY(-3px) scale(.96)',
        boxShadow: insetShadows[0]
      },
    },
    sizeLarge: {
      padding: '12px 18px'
    }
  },
})