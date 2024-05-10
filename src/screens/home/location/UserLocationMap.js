import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

import Button from '../../../components/forms/Button';
import {useLocation} from '../../../hooks/LocationContext';
import {AsyncStorage} from 'react-native';

function UserLocationMap() {
  const navigation = useNavigation();
  const [location, setLocationActual] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState('');

  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={styles.address}>Loading...</Text>
      </View>
    );
  }
  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem(
        'locationData',
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      );
    } catch (error) {
      console.error('Error al guardar datos de locacion:', error);
    }
  };

  const handleWelcome = () => {
    saveUserData();
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {location && (
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
          />
        )}
      </MapView>
      <View style={styles.contAddress}>
        <Text style={styles.address}>{address}</Text>
      </View>
      <Button title="Continuar" onPress={handleWelcome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161B21',
  },
  map: {
    width: '100%',
    height: '85%',
  },
  contAddress: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
  },
});

export default UserLocationMap;
