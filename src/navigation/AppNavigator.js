import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';
import CustomHeaderTitle from '../components/CustomerHeaderTitle';

const Stack = createStackNavigator();

const studentName = 'Juan Pérez Ocampo';
const studentCycle = 'Ciclo 5';

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#004672',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                animationEnabled: true,
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: () => <CustomHeaderTitle studentName={studentName} studentCycle={studentCycle}/>
                }}
            />
            <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{title: 'Buscar'}}
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{title: 'Mapa'}}
            />
        </Stack.Navigator>
    );
};
export default AppNavigator;
