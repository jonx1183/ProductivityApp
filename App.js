import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const[text, setText] = useState('')
  const[notes, setNotes] = useState([])
  const [editObj, setEditObj] = useState(null)


  function buttenHandler(){
    setNotes(
      [...notes, {key:notes.length, name:text}]
    )
}
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={(txt) => setText(txt)}/>
      <Button title='testButton' onPress={buttenHandler}></Button>
      <FlatList
        data={notes}
        renderItem={(note) => <Text>{note.item.name}</Text>}
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
