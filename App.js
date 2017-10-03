import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/Home';
import BookListScreen from './screens/BookList';
import BookDetailScreen from './screens/BookDetail';
import ReactDocsScreen from './screens/ReactDocs';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  BookList: { screen: BookListScreen },
  BookDetail: { screen: BookDetailScreen },
  ReactDocs: {screen: ReactDocsScreen}
});

export default App;
