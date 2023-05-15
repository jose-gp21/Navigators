
import { View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Ionicons} from '@expo/vector-icons'
import { useNavigation, DrawerActions } from '@react-navigation/native';


import Inicio from '../screens/home/inicio';
import Report from '../screens/home/cadastrarproblema';
import Info from '../screens/home/info'
import Perfil from '../screens/home/perfil';
import Mapainteiro from '../screens/home/mapa/mapainteiro';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

  const navigation = useNavigation();

  return (

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#cccccc',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#2FAD8F',
            padding: 2,
            height: 50,
            borderRadius: 10,
            bottom: 10,
            marginHorizontal: 10,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 20,
            
          },
        })}
      >
        <Tab.Screen
          name="Informações"
          component={Info}
          options={{
            headerStyle:
            {
              backgroundColor: '#2FAD8F',
              height: 100,
              borderRadius: 15
            },
            headerTitleStyle: {
              color: 'white',
              
            },
            headerShown: true,
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Ionicons name='bookmark' size={22} color={color} />
              }
              return <Ionicons name='bookmark-outline' size={22} color={color} />
            },
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Ionicons name='menu' size={30} color='white' />              
                </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen name="Início" component={Inicio} 
        options={{
          headerShown: true,
          headerStyle:
            {
              backgroundColor: '#2FAD8F',
              height: 100,
              borderRadius: 15
            },
            headerTitleStyle: {
              color: 'white',
              
            },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='home' size={22} color={color} />
            }
            return <Ionicons name='home-outline' size={22} color={color} />
          },
          headerRight: () => {
            return (
              <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                 <Ionicons name='menu' size={30} color='white' />              
              </TouchableOpacity>
            );
          },
        }}/>
        
        <Tab.Screen name="Mapa" component={Mapainteiro} 
        options={{
          headerShown: true,
          headerStyle:
            {
              backgroundColor: '#2FAD8F',
              height: 100,
              borderRadius: 15
            },
            headerTitleStyle: {
              color: 'white',
              
            },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='map' size={22} color={color} />
            }
            return <Ionicons name='map-outline' size={22} color={color} />
          }
        }}/>

        <Tab.Screen name="Reportar" component={Report} 
        options={{
          headerShown: true,
          headerStyle:
            {
              backgroundColor: '#2FAD8F',
              height: 100,
              borderRadius: 15
            },
            headerTitleStyle: {
              color: 'white',
              
            },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='add' size={40} color={color} />
            }
            return <Ionicons name='add-outline' size={22} color={color} />
          }
        }}/>

        <Tab.Screen name="Perfil" component={Perfil} 
        options={{
          headerShown: true,
          headerStyle:
            {
              backgroundColor: '#2FAD8F',
              height: 100,
              borderRadius: 15
            },
            headerTitleStyle: {
              color: 'white',
              
            },
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='person' size={22} color={color} />
            }
            return <Ionicons name='person-outline' size={22} color={color} />
          }
        }}/>

      </Tab.Navigator>
  );
}