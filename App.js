import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import Todo from './components/todo';
import AddTodo from './components/Addtodo';

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

  const addHandler = (text)=>{
    if(text.length > 3){
      setData((prev)=>{
        return(
          [{text: text, id: Math.random()}, ...prev]
        )
      })
    }
    else{
      Alert.alert('OOPS', "Todo Characters should be greater than 3", [
        {text: 'All Right', onPress: ()=>console.log('alert closed')}
      ])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo addHandler={addHandler}/>
       </View> 
        <View style={styles.list}>
        <FlatList
        data={data}
        renderItem={({item})=>(
          <Todo item={item} deleteHandler={deleteHandler}/>
  )}
        />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    paddingBottom: 0,
  },
  list: {
    flex: 1,
    padding: 30,
  }
});
