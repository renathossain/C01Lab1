// ToDoList.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ListItem = (props) => {
    return (
        <View style={styles.todoItem}>
            <Text>{props.title}</Text>
            <TouchableOpacity onPress={() => props.removeToDo(props.id)}>
                <Text>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

const ToDoList = (props) => {
    const [toDos, setToDos] = useState(
        props.toDos.map((title) => ({
            id: uuidv4(),
            title: title,
        }))
    );

    const removeToDo = (id) => {
        setToDos((prevList) => 
            prevList.filter((entry) =>
                entry.id !== id
            )
        );
    };


    const addToDo = (newTitle) => {
        const newEntry = {
            id: uuidv4(),
            title: newTitle,
        };
        setToDos((prevList) => [...prevList, newEntry]);
    };

    return (
        <View style={styles.todoListContainer}>
            {toDos.map((entry) => (
                <ListItem 
                    key={entry.id}
                    id={entry.id}
                    title={entry.title}
                    removeToDo={removeToDo}
                />
            ))}
        <AddTask onAddTask={[]}/>
        </View>
    );
};

ToDoList.defaultProps = {
    toDos: []
};

export default ToDoList;

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});