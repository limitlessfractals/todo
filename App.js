import React from 'react';
import {View,Text} from 'react-native';

class App extends React.Component{
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text>Hello World !</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default App;