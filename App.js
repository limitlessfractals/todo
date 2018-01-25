import React from 'react';
import {View,Text, TextInput, Button} from 'react-native';

class App extends React.Component{
  state = {
    text: "",
    todo: ["learn", "eat", "sleep"]
  }
  // es6 function, setState, not =
  addTodo = () =>{
    this.setState({todo: this.state.text});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <Text key={t}>{t}</Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Hello World!</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
        />
        <Button
          title="Add Todo"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle:{
    height: 40,
    width: 300,
    borderColor: "blue",
    borderWidth: 1
  }
}

export default App;