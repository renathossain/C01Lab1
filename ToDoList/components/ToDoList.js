// ToDoList.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const ListItem = (props) => {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    )
}

const ToDoList = (props) => {
    return (
        <View>
            {props.currTasks.map((name, index) => (
                <ListItem key={uuidv4()} text={name} />
            ))}
        </View>
    )
}

export default ToDoList;