import { useState, createContext, useContext } from 'react'
import './style.css'

const ThemeContext = createContext()

const ThemeChanger = () => {
    const [theme, setTheme] = useState('light')

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <Box />
            </ThemeContext.Provider>
            <Button onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
            }}>
                Toggle Mode
            </Button>
        </>
    )
}
export default ThemeChanger

const Box = ({ children }) => {
    const theme = useContext(ThemeContext);
    const className = 'box-' + theme;
    return (
        <section className={className}>
            <h1>Welcome</h1>
            {children}
        </section>
    )
}

function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

// import { createContext, useContext, useState } from 'react';
// import './style.css'

// const ThemeContext = createContext('light');

// export default function MyApp() {
//   const [theme, setTheme] = useState('light');
//   return (
//     <>
//       <ThemeContext.Provider value={theme}>
//         <Form />
//       </ThemeContext.Provider>
//       <Button onClick={() => {
//         setTheme(theme === 'dark' ? 'light' : 'dark');
//       }}>
//         Toggle theme
//       </Button>
//     </>
//   )
// }

// function Form({ children }) {
//   return (
//     <Panel title="Welcome">
//       <Button>Sign up</Button>
//       <Button>Log in</Button>
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title}</h1>
//       {children}
//     </section>
//   )
// }

// function Button({ children, onClick }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className} onClick={onClick}>
//       {children}
//     </button>
//   );
// }