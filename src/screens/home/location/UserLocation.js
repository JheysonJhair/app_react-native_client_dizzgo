import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import InputCommon from '../../../components/forms/InputCommon';
import Button from '../../../components/forms/Button';

import {MapPin} from 'lucide-react-native';
import {colors, fonts} from '../../../theme/theme';

function UserLocation() {
  const [location, setLocation] = useState('');
  const [showButton, setShowButton] = useState(false);
  const navigation = useNavigation();

  const handleLocationChange = text => {
    setLocation(text);
    setShowButton(text.trim().length > 0);
  };

  const handleContinue = () => {
    console.log('Ubicacion ' + location);
    navigation.navigate('Welcome');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agrega tu ubicación o escoge una</Text>
      <InputCommon
        placeholder="Ingresa una dirección de entrega"
        onChangeText={handleLocationChange}
        value={location}
      />

      <TouchableOpacity onPress={() => navigation.navigate('UserLocationMap')}>
        <View style={styles.locationContainer}>
          <View style={styles.iconContainer}>
            <MapPin color={colors.border} size={22} />
          </View>
          <Text style={styles.locationText}>Activar mi ubicación</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line}></View>
      <Text style={styles.deliveryText}>
        A esta dirección te entregaremos tu pedido
      </Text>

      {showButton && <Button title="Continuar" onPress={handleContinue} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontFamily: fonts.boldMt,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'blue',
    marginRight: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: '#212834',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontFamily: fonts.boldMt,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  deliveryText: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: fonts.mediumMt,
  },
  line: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    height: 0.2,
    width: '100%',
  },
});

export default UserLocation;
