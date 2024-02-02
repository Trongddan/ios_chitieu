import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom_tab} from '../routes/route';
import {Spacing} from 'assets/spacing';
import {Text} from 'react-native';
import {Colors} from 'constants/color';

export function BottomNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {bottom_tab.map((item, index) => (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <item.icon
                color={'red'}
                width={Spacing.width25}
                height={Spacing.height25}
              />
            ),
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? 'red' : 'green'}}>
                {item.label}
              </Text>
            ),
            tabBarStyle: {backgroundColor: Colors.background, height: 80},
          }}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}
