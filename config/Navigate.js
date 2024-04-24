import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Screen2">
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inpContainer: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'green',

  },
  inp: {
    height: 23,
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    color: "black",
    paddingHorizontal: 3,
    backgroundColor: "white"
  }
});

const Screen2 = () => {

  const [inpVal, setInpVal] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [todo, setTodo] = useState([]);

  function handleAddTodo(value) {
    if (value) {
      const todoCopy = [...todo];

      todoCopy.push(value);

      setTodo(todoCopy);

      setInpVal('');
    } else {
      alert('Please enter in input')
    }
  };

  function handleEditTodo(index, value) {
    const todoCopy = [...todo];

    todoCopy.splice(index, 1, value);

    setTodo(todoCopy);

    setIsEdit(false);
    setEditIndex();
    setInpVal('');
  };

  function handleDeleteTodo(index) {

    const todoCopy = [...todo];

    todoCopy.splice(index, 1);

    setTodo(todoCopy);
  };

  function handelKeyPress(e) {
    if (e.nativeEvent.key == "Enter") {
      isEdit ?
      handleEditTodo(editIndex, inpVal)
      :
      handleAddTodo(inpVal)
    };
  };

  return (
    <View style={style.container}>
      <View style={style.inpContainer}>
        <TextInput value={inpVal} onKeyPress={handelKeyPress} onChangeText={(e) => setInpVal(e)} placeholderTextColor="black" style={style.inp} placeholder='Please enter To-do' />

        {isEdit ?
          <Button onPress={() => handleEditTodo(editIndex, inpVal)} title='Edit' />
          :
          <Button onPress={() => handleAddTodo(inpVal)} title='Add' />
        }


      </View>
      <ScrollView>
      {todo.map((element, index) => {
        return (
          <View key={index}>
            <Text>{element}</Text>
            <Button onPress={() => handleDeleteTodo(index)} title='Delete' />
            <Button onPress={() => {
              setIsEdit(true);
              setInpVal(element);
              setEditIndex(index);
            }} title='Edit' />
          </View>
        )
      })}
      </ScrollView>
    </View>
  )
};

export default AppNavigator;