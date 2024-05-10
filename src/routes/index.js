import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Load from '../screens/home/Load';
import UserLocation from '../screens/home/location/UserLocation';
import UserLocationMap from '../screens/home/location/UserLocationMap';
import Welcome from '../screens/home/Welcome';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      {/*Usuario*/}
      <Stack.Screen
        name="Load"
        component={Load}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserLocation"
        component={UserLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserLocationMap"
        component={UserLocationMap}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#161B21',
          },
          headerTitleStyle: {
            color: '#fff',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          title: 'Mi ubicación',
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
