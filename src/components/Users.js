import React from "react";
import { StyleSheet, View, Text } from 'react-native';

function Users({ data }) {
  return (
    <View style={styles.box}>
      <Text style={styles.textoNomes}>Nome: {data.name}</Text>
      <Text style={styles.textoNomes}>E-mail: {data.email}</Text>
      <Text style={styles.textoNomes}>Telefone: {data.phone}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#222',
    padding: 10,
    margin: 5,
  },
  
  textoNomes: {
    fontSize: 25,
    color: 'white',
  },
});

export default Users;


