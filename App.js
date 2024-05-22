// Importa bibliotecas necessárias do React e React Native
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
// Importa a configuração do Axios para fazer chamadas HTTP
import api from './src/services/api';
// Importa o componente User
import Users from './src/components/Users';


// Define o componente principal App
export default function App() {
  // Declara um estado chamado 'users' com um setter 'setUsers', inicializado como uma lista vazia
  const [users, setUsers] = useState([]);

  // useEffect é um hook que permite realizar efeitos colaterais em componentes funcionais
  useEffect(() => {
    // Define uma função assíncrona para fazer a chamada à API
    async function fetchUsers() {
      try {
        // Faz uma requisição GET para a URL '/users' usando a instância 'api' do Axios
        const response = await api.get('/users')
        // Atualiza o estado 'users' com os dados retornados pela API
        setUsers(response.data);
        // Loga os dados no console para depuração
        console.log(response.data);
      } 
      // Captura e loga qualquer erro que ocorrer durante a chamada à API
      catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    }

    // Chama a função 'fetchUsers' quando o componente for montado
    fetchUsers();
  }, []); // O array vazio [] significa que este efeito só será executado uma vez após a montagem do componente

  return (
    // Renderiza uma View com estilo 'container'
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de usuários:</Text>
      {/* Renderiza os dados dos usuários se a lista 'users' não estiver vazia */}
      <FlatList
        data={users} // Passa a lista de usuários para FlatList
        renderItem={({ item }) => <Users data={item} />} // Renderiza o componente User para cada usuário
        keyExtractor={item => item.id.toString()} // Chave única para cada item da lista
      />
    </View>
  );
}

// Define os estilos usados no componente
const styles = StyleSheet.create({

  container: {
    flex: 1, // O contêiner ocupa todo o espaço disponível
    alignItems: 'center', // Centraliza os filhos horizontalmente
    justifyContent: 'center' // Centraliza os filhos verticalmente

  },

  titulo:{
    fontSize: 32,
    fontWeight: 'bold'

  },
});





