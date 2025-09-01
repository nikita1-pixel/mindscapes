"use client"

import { ThemeContext } from '@/Context/ThemeContext';
import React, { Children, useContext } from 'react';

const ThemeProvider = ({childern}) => {

    const {theme} = useContext(ThemeContext);
    return
    <div className={theme}>{Children}</div>
};

export default ThemeProvider