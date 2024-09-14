import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen ({ navigation }) {
    const [email, setEmail] = useState('');

    const handleLogin = () =>{
        if( email.trim() === ''){
            Alert.alert('Erro', 'O campo esta vazio');
        } else {
            navigation.navigate('TelaInicial', {email});
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 8,
      marginBottom: 16,
      borderRadius: 4,
    },
  });
