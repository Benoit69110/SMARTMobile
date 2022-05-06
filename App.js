import React from 'react';
import {View} from 'react-native'
import Header from './Components/Header';
import LibraryNavigation from './Navigation/LibraryNavigation';

export default class App extends React.Component{
  render(){
    // console.disableYellowBox=false
    // console.log = function () {}
    console.error = function () {}
    console.warn = function () {}
    return (
      <Header/>
      // <TabViewExample/>

    )
  }
}