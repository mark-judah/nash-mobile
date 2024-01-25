import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
import React, {PropsWithChildren} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import { AppColors } from '../navigation/app.colors';
  
  const height = heightPercentageToDP('100.0%');
  
  /**
   * Screen component properties.
   * @typedef {Object} ScreenComponentProps properties expected by the screen component.
   * @property { React.ReactNode } children the components to be rendered on the constructed screen.
   * @property { any } statusBarColor
   * @property { {} } style the additional stylings of the screen.
   */
  
  type ScreenComponentProps = PropsWithChildren<{
    statusBarColor?: string;
    style?: {};
  }>;
  
  const Screen: React.FC<ScreenComponentProps> = props => {
    return (
      <SafeAreaView style={styles.screen}>
        {Platform.OS === 'android' ? (
          <StatusBar
            backgroundColor={props.statusBarColor ?? AppColors.background}
            barStyle="dark-content"
          />
        ) : null}
        <View style={[styles.container, props.style]}>{props.children}</View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: AppColors.background,
      minHeight: height,
    },
  });
  
  export default Screen;