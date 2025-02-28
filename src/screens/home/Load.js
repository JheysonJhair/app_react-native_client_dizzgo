import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {AsyncStorage} from 'react-native';

import {loginUser} from '../../services/apiLogin';
import {colors, fonts} from '../../theme/theme';

const Load = () => {
  const navigation = useNavigation();

  const retrieveUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData !== null) {
        const {email: savedEmail, password: savedPassword} =
          JSON.parse(userData);

        const user = await loginUser(savedEmail, savedPassword);
        if (user.msg === 'Ingreso correctamente') {
          navigation.navigate('Home');
        } else {
          navigation.navigate('UserLocation');
        }
      } else {
        navigation.navigate('UserLocation');
      }
    } catch (error) {
      navigation.navigate('UserLocation');
      console.error(
        'Local storage: Error al recuperar datos del usuario.  :',
        error,
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      retrieveUserData();
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Text animation="flipInX" style={styles.containerLogoText}>
          DIZZGO
        </Animatable.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogoText: {
    color: '#fff',
    fontSize: 38,
    fontFamily: fonts.boldMt,
  },
});

export default Load;
