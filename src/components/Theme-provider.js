import React from "react"
import { createTheme, ThemeProvider } from '@material-ui/core'

const theme = createTheme({
    typography: {
      fontFamily: [
        'KnowledgeLight',
        'Raleway',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#ff8001'
      },
    }
  })

  const Theme = ({ path, children }) => {
    return (
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    )
  }
  export default Theme