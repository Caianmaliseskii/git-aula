import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadDarkModePreference = async () => {
      try {
        // Check saved preference
        const savedMode = await AsyncStorage.getItem('darkMode');
        if (savedMode !== null) {
          setIsDarkMode(savedMode === 'true');
        } else {
          // Check system preference
          const systemPrefersDark = Appearance.getColorScheme() === 'dark';
          setIsDarkMode(systemPrefersDark);
        }
      } catch (error) {
        console.log('Error loading dark mode preference:', error);
        // Default to system preference
        const systemPrefersDark = Appearance.getColorScheme() === 'dark';
        setIsDarkMode(systemPrefersDark);
      }
    };

    loadDarkModePreference();
  }, []);

  useEffect(() => {
    const saveDarkModePreference = async () => {
      try {
        await AsyncStorage.setItem('darkMode', isDarkMode.toString());
      } catch (error) {
        console.log('Error saving dark mode preference:', error);
      }
    };

    saveDarkModePreference();
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};