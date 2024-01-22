// App.js

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

const initialToDos = [
  "Task 1",
  "Task 2",
  "Task 3",
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Today's Tasks</Text>
      <ToDoList toDos={initialToDos}/>
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
  },
});
