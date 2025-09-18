import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <TouchableOpacity style={styles.toggleContainer} onPress={toggleDarkMode}>
      <Text style={[styles.toggleText, isDarkMode && styles.toggleTextDark]}>
        {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    alignSelf: 'flex-start',
  },
  toggleText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  toggleTextDark: {
    color: '#fff',
  },
});

export default DarkModeToggle;