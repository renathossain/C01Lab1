// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

const initialToDos = [
  "Learn a new recipe and cook a meal.",
  "Update my LinkedIn profile.",
  "Do an upper body workout.",
];

export default function App() {
  return (
    <View style={styles.container}>
      <ToDoList toDos={initialToDos}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});
