// ToDoList.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { v4 as uuidv4 } from 'uuid';

const ListItem = (props) => {
    return (
        <View>
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
        <View>
            {toDos.map((entry) => (
                <ListItem 
                    key={entry.id}
                    id={entry.id}
                    title={entry.title}
                    removeToDo={removeToDo}
                />
            ))}
        </View>
    );
};

export default ToDoList;
