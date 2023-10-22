import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="About" component={About} />
                <Drawer.Screen name="Contact" component={Contact} />
            </Drawer.Navigator>
        </NavigationContainer> 
    );
}

