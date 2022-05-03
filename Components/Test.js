import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from 'react-navigation-stack';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'yellow' }} />
  );
  
  const FourthRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'purple' }} />
  );
  
const SearchStackNavigator = createStackNavigator({
    Search: {
      screen: ThirdRoute,
      navigationOptions: {
        title: 'Rechercher'
      }
    },
    FilmDetail: {
      screen: FourthRoute,
      navigationOptions: {
        title: ''
      }
    }
  })



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});







export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}