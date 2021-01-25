import React, { createContext, useState, useEffect } from 'react'

const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);
    const [color, setColor] = useState({
        background: '#04FA9C',
        changerName: 'Root'
    });
    const [showColorPicker, setColorPicker] = useState(false);

    const values = {
        color,
        setColor,
        showColorPicker,
        setColorPicker,
        login,
        setLogin,
        user,
        setUser,
        username,
        setUsername
    }

    useEffect(() => {
        setColor(color);
    }, [color]);

    return (
        <ColorContext.Provider value={values} >
            {children}
        </ColorContext.Provider>
    )
}

export default ColorContext;