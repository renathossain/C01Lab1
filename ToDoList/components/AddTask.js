// AddTask.js

import React, { useState, useRef } from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';

const AddTask = (prop) => {
    const [inputTitle, setInputTitle] = useState("");

    const textInputRef = useRef(null);

    const handleAddTask = () => {
        if (inputTitle.trim() != "") {
            prop.onAddTask(inputTitle.trim());
        }
        setInputTitle("");

        {/* Refocus to the textbox again*/}
        setTimeout(() => {
            textInputRef.current.focus();
        }, 100);
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                ref={textInputRef}
                style={styles.input}
                onChangeText={setInputTitle}
                value={inputTitle}
                placeholder="Enter the task name"
                onSubmitEditing={() => handleAddTask()}
                
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