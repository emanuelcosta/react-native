import React from "react";
import {View, Text, Button} from 'react-native';

export default function PerfilScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: "red" }}>Perfil Inicial do Mundao</Text>
            <Button title="Voltar"
            onPress={() => navigation.goBack()}/>
        </View>
    );
}