import React from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          text="See List of Books"
          onPress={() =>
            navigate('BookList')
          }
        />
        <Button
          text="See React Native Docs"
          onPress={() =>
            navigate('ReactDocs')
          }
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   button: {
//     flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default HomeScreen;
