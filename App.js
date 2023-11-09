import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Todo from './components/todo';

export default function App() {
  const [data, setData] = useState([
      {text: 'buy me a cofffe', id: 1},
      {text: "create an app", id: 2},
      {text: "play on the switch", id: 3},
  ])

  const deleteHandler = (id)=>{
    let remove = data.filter((item)=> item.id !== id)
    setData(remove);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header/>
        <View style={styles.list}>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <Todo item={item} deleteHandler={deleteHandler}/>
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
