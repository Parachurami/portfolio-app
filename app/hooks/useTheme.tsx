import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

const lightColors: ColorScheme = {
  bg: "#f8fafc",
  surface: "#ffffff",
  text: "#010101",
  textMuted: "#202020",
  border: "#dcdbdb",
  primary: "#3b82f6",
  success: "#F5DAC1FF",
  warning: "#E2B082FF",
  danger: "#fbdcb1",
  shadow: "#ffffff",
  gradients: {
    background: ["#f8fafc", "#e2e8f0"],
    surface: ["#ffffff", "#ebebeb"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    muted: ["#9ca3af", "#6b7280"],
    empty: ["#f3f4f6", "#e5e7eb"],
  },
  backgrounds: {
    input: "#ffffff",
    editInput: "#ffffff",
  },
  statusBarStyle: "dark-content" as const,
};

const darkColors: ColorScheme = {
  bg: "#000000",
  surface: "#1e293b",
  text: "#f1f5f9",
  textMuted: "#F5DAC1FF",
  border: "#202020",
  primary: "#60a5fa",
  success: "#202020",
  warning: "#E2B082FF",
  danger: "#010101",
  shadow: "#202020",
  gradients: {
    background: ["#0f172a", "#1e293b"],
    surface: ["#000000", "#1A1A1AFF"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    muted: ["#374151", "#4b5563"],
    empty: ["#374151", "#4b5563"],
  },
  backgrounds: {
    input: "#2A2A2AFF",
    editInput: "#0f172a",
  },
  statusBarStyle: "light-content" as const,
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<undefined | ThemeContextType>(undefined)

export const ThemeContextProvider = ({ children }:{ children: React.ReactNode}) => {
    
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    

    useEffect(() =>{
        AsyncStorage.getItem('isDarkMode').then(
            (e) => {
                if(e) setIsDarkMode(JSON.parse(e))
            }
        ).catch(
            (err) => console.log(err)
        ).finally(
            () => console.log('Data fetched from async storage when loaded')
        );
    },[])

    const toggleDarkMode = async() =>{
        try{
            let currentMode = !isDarkMode;
            setIsDarkMode(currentMode);
            await AsyncStorage.setItem('isDarkMode', JSON.stringify(currentMode));
        }catch(err){
            console.log(err)
        }
    }

    const colors = isDarkMode ? darkColors : lightColors;
  return (
    <ThemeContext.Provider value={{colors, isDarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () =>{
    const context = useContext(ThemeContext);
    if(context === undefined) throw 'ThemeContext Can Only Be used Inside A ThemeProvider';
    return context;
}

export default useThemeContext