import React, { useState, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Keyboard, FlatList } from 'react-native';
export {MyContextConsumer};


export default function Calculator({ children }) {

  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const calcSum = () => {
    const sum = parseInt(numberOne) + parseInt(numberTwo);
    const item = numberOne + ' + ' + numberTwo + ' = ' + sum;
    setResult(sum);
    setData([...data, {key: item}]);
    Keyboard.dismiss(); 
  }
  const calcSub = () => {
    const sum = parseInt(numberOne) - parseInt(numberTwo);
    const item = numberOne + ' - ' + numberTwo + ' = ' + sum;
    setResult(sum);
    setData([...data, {key: item}]);
    Keyboard.dismiss();
  }

  const items = 
  <FlatList 
  data = {data}
  renderItem = {({item}) =>
    <Text>{item.key}</Text>
  }
/>

    <MyContext.Provider value={history}>{children}</MyContext.Provider>

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Result: {result}</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.textInput}
        onChangeText={(numberOne) => setNumberOne(numberOne)}
        />
        <TextInput
        keyboardType="numeric"
        style={styles.textInput}
        onChangeText={(numberTwo) => setNumberTwo(numberTwo)}
        />
      </View>
      <View style={styles.buttons}>
        <Button onPress={calcSum} title="+" />
        <Button onPress={calcSub} title="-" />
      </View>
    </View>
  );
}

const MyContext = createContext('defaultValue');
const MyContextConsumer = MyContext.Consumer;
const history =
    {list : 
    {items}};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center'
  },
  textInput: {
    width: 100,
    borderWidth: 2,
    borderColor: 'blue'
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
});