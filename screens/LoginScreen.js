import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useDarkMode } from '../contexts/DarkModeContext';
import DarkModeToggle from '../components/DarkModeToggle';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { isDarkMode } = useDarkMode();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    
    Alert.alert('Sucesso', 'Login realizado com sucesso!');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={[styles.card, isDarkMode && styles.cardDark]}>
        <View style={styles.header}>
          <Text style={[styles.title, isDarkMode && styles.titleDark]}>Login</Text>
          <DarkModeToggle />
        </View>
        
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Email"
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={[styles.input, isDarkMode && styles.inputDark]}
          placeholder="Senha"
          placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity style={[styles.loginButton, isDarkMode && styles.loginButtonDark]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={[styles.linkText, isDarkMode && styles.linkTextDark]}>Não tem conta? Registre-se</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={[styles.linkText, isDarkMode && styles.linkTextDark]}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 28,
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
  loginButton: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  loginButtonDark: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    alignItems: 'center',
  },
  linkText: {
    color: '#007AFF',
    fontSize: 15,
    marginVertical: 10,
    fontWeight: '500',
  },
  linkTextDark: {
    color: '#4da6ff',
  },
});

export default LoginScreen;