import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {OnboardingNavigationStackParamsList} from '../../features/onboarding/navigation/navigation.params.type';
import {Screen} from 'react-native-screens';
import {AppColors} from '../../utils/theme/app.colors';
import {FONTS} from '../../utils/theme/fonts';

/**
 * Card1 UI.
 */
const Card1 = () => {
  return (
    <View>
      <View style={styles.column2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    column2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: AppColors.darkblue,
        height: 100,
        marginHorizontal: 30,
      },
});

export default Card1;
