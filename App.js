import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  // es6 function, setState, not =
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={()=>{this.deleteTodo(t)}}
          >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style={styles.header}>Todo List</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value={this.state.text}
          />
          <Button
            title="Add Todo"
            color='#fbe4e4'
            onPress={this.addTodo}
          />
          <View style={{marginTop: 50}}/>
          {this.renderTodos()}
        </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: '#1e2e4d',
    flex: 1
  },
  viewStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  inputStyle:{
    height: 40,
    width: 300,
    borderColor: "#fbe4e4",
    borderWidth: 1,
    color: '#fbe4e4'
  },
  header:{
    fontSize: 30,
    color: '#fbe4e4',
    fontWeight: 'bold'
  },
  todo:{
    fontSize: 24,
    color: '#fbe4e4'
  }
}

export default App;