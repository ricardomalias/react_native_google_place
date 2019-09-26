import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import NavigationService from './NavigationService';
import MainContainer from '../feature/main/containers';
import WelcomeComponent from '../feature/welcome/components';
import MapContainer from '../feature/map/containers';
import {createStackNavigator} from "react-navigation-stack";

const WelcomeNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeComponent,
    }
},
{
    initialRouteName: 'Welcome',
    mode: 'modal',
    headerMode: 'none',
});

const MapNavigator = createStackNavigator({
        Map: {
            screen: MapContainer,
        }
    },
    {
        initialRouteName: 'Map',
        mode: 'modal',
        headerMode: "float",
    });

const RoutesNavigator = createStackNavigator(
    {
        Main: {
            screen: MainContainer,
        },
        Welcome: {
            screen: WelcomeNavigator,
        },
        Map: {
            screen: MapNavigator,
        },
    },
  {
    initialRouteName: 'Main',
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RoutesNavigator);

export default class Routes extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
