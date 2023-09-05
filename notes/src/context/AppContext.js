import {React, createContext, useContext, useState} from 'react';

const AppContext = createContext();

export function useAppContext () {
    return useContext(AppContext);
}

const defaultValue = {
    title : '',
    description : '',
}

const lightTheme = {
    bg_color : '#bfbfbf',
    nav_color : '#d9d9d9',
    block_color : '#f2f2f2',
    text_color : 'black',
    desc_color : '#595959',
}

const darkTheme = {
    bg_color : '#404040',
    nav_color : '#262626',
    block_color : '#0d0d0d',
    text_color : 'white',
    desc_color : 'darkgray',
}

export function AppProvider ( {children} ) {
    const [notes, setnotes] = useState(defaultValue);
    const [theme, settheme] = useState(lightTheme);

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        settheme(newTheme);
      };

    const contextValue = {
        notes,
        setnotes,
        theme,
        toggleTheme,
    }

    return (
        <AppContext.Provider value = {contextValue}>
            {children}
        </AppContext.Provider>
    )
}