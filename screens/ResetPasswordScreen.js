import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';
import DarkModeToggle from '../components/DarkModeToggle';

const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordInputRef = useRef(null);
  const { isDarkMode } = useDarkMode();

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'Senhas não são iguais');
      passwordInputRef.current?.focus();
      return;
    }
    
    Alert.alert(
      'Sucesso',
      'Senha redefinida com sucesso',
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.card, isDarkMode && styles.cardDark]}>
        <View style={styles.header}>
          <Text style={[styles.title, isDarkMode && styles.titleDark]}>Redefinição de Senha</Text>
          <DarkModeToggle />
        </View>
        
        <TextInput
          ref={passwordInputRef}
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Nova Senha"
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Confirmar Senha"
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          style={[styles.saveButton, isDarkMode && styles.saveButtonDark]} 
          onPress={handleResetPassword}
        >
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.backButtonText, isDarkMode && styles.backButtonTextDark]}>Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
    color: '#333',
  },
  titleDark: {
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fafafa',
    fontSize: 16,
    color: '#333',
  },
  inputDark: {
    borderColor: '#444',
    backgroundColor: '#2a2a2a',
    color: '#fff',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
  },
  saveButtonDark: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    alignItems: 'center',
    padding: 10,
  },
  backButtonText: {
    color: '#007AFF',
    fontSize: 15,
    fontWeight: '500',
  },
  backButtonTextDark: {
    color: '#4da6ff',
  },
});

export default ResetPasswordScreen;