import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ResetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordInputRef = useRef(null);

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
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Redefinição de Senha</Text>
        
        <TextInput
          ref={passwordInputRef}
          style={styles.input}
          placeholder="Nova Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleResetPassword}
        >
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.backButtonText}>Voltar para Login</Text>
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
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
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
});

export default ResetPasswordScreen;