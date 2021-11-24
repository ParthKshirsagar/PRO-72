import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ReadDetails from './screens/ReadDetails';
import EnterDetails from './screens/EnterDetails';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  "Enter Details": EnterDetails,
  "Read Details": ReadDetails
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName == "Enter Details"){
        return(
          <Image 
            source={require('./assets/write.png')}
            style={{width: 40, height: 40}}
          />
        )
      } else if(routeName === "Read Details"){
        return(
          <Image 
            source={require('./assets/job2.webp')}
            style={{width: 40, height: 40}}
          />
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator);