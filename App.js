import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/header';

export default function App() {
  const [data, setData] = useState(
    [
      {text: 'buy me a cofffe', id: 1},
      {text: "create an app", id: 2},
      {text: "play on the switch", id: 3},
  ]
  )
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        <View style={styles.list}>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <Text style={styles.listText}>{item.text}</Text>
  )}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    padding: 30,
  }
});
