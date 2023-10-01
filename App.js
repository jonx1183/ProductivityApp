import { app, database } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useCollection } from 'react-firebase-hooks/firestore';


export default function App() {

  const[text, setText] = useState('')
  const[notes, setNotes] = useState([])
  const [editObj, setEditObj] = useState(null)
  const [values, loading, error] = useCollection(collection(database, "notes"))
  const data = values?.docs.map((doc) => ({...doc.data(), id: doc.id}))


  async function buttenHandler(){
    

    try{
    await addDoc(collection(database, "notes"), {
      text: text

    })

    } catch(error){
      console.log("Fejl i db" + error);

    } 
  }


  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={(txt) => setText(txt)}/>
      <Button title='Save note' onPress={buttenHandler}></Button>
      <FlatList
        data={data}
        renderItem={(note) => <Text>{note.item.text}</Text>}
      />

  
    
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  TextInput:{
    backgroundColor: 'lightblue',
    minWidth: 200
  }
});
