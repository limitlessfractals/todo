import React from 'react';
import {View,Text, TextInput, Button} from 'react-native';

class App extends React.Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Hello World!</Text>
        <TextInput
          style={styles.inputStyle}
        />
        <Button
          title="Add Todo"
        />
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