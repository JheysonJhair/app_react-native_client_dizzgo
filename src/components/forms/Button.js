import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, fonts} from '../../theme/theme';

const Button = ({onPress, title, disabled}) => {
  return (
    <TouchableOpacity
      style={styles.boton}
      onPress={onPress}
      disabled={disabled}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled ? ['#9E9E9E', '#616161'] : [colors.primary, colors.secondary]
        }
        style={styles.linearGradient}>
        <Text style={styles.textoBoton}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  linearGradient: {
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 19,
    fontFamily: fonts.boldMt,
  },
});

export default Button;
