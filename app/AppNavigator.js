import 'react-native-gesture-handler';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import DishDetailScreen from './screens/DishDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Icon from './components/Icon';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (<Icon
                    action={() => navigation.toggleDrawer()}
                    name="ios-menu"
                    color="black"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                />),
                headerStyle: {
                    backgroundColor: "#F53B50",

                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold"
                }
            }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} options={({ route }) => ({ title: route.params.dish.name })} />
        </Stack.Navigator>
    )
}

const FavouritesStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator screenOptions={{
            headerRight: () => (<Icon
                action={() => navigation.toggleDrawer()}
                name="ios-menu"
                color="black"
                size={24}
                iconStyle={{
                    paddingRight: 15
                }}
            />),
            headerStyle: {
                backgroundColor: "#F53B50"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}>
            <Stack.Screen name="Favourites" component={FavouriteScreen} />
        </Stack.Navigator>
    )
}

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu Stack" component={MenuStack} />
            <Drawer.Screen name="Favourite Stack" component={FavouritesStack} />
        </Drawer.Navigator>


    )
}



export default AppNavigator;
