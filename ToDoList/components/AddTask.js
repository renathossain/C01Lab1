// AddTask.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const AddTask = (prop) => {
    const [inputTitle, setInputTitle] = useState("");

    const handleAddTask = () => {
        prop.onAddTask(inputTitle);
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                onChangeText={setInputTitle}
                value={inputTitle}
                placeholder="Enter the task name"
            />
            <Button
                title="Add Task"
                onPress={() => handleAddTask()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;