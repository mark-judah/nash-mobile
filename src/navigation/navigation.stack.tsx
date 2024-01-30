import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';
import { BackButton, DeleteButton } from './navigation.utils';
import WelcomeScreen from '../features/onboarding/welcome.screen';
import { OnboardingRootStack } from '../features/onboarding/navigation/onboarding.navigation.stack';
import LoginScreen from '../features/onboarding/login.screen';
import RegisterScreen from '../features/onboarding/register.screen';

/**
 * Hides the header.
 */
const RootStackScreenHideHeader = {
  headerShown: false,
};

/**
 * Allows users to define header of a screen with a back button.
 * @param onPress 
 * @param title 
 * @returns 
 */
export function RootStackScreenHideHeaderTitle(
  onPress: any,
  title?: string,
): NativeStackNavigationOptions {
  return {
    title: title ?? '',
    headerTransparent: true,
    headerLeft: () => <BackButton onPress={onPress} />,
  };
}

/**
 * Handles pages with headers that have delete batons.
 * @param onPressBack 
 * @param onPressDelete 
 * @param title 
 * @returns 
 */
export function headerWithDeleteButton(
  onPressBack: any,
  onPressDelete: any,
  title?: string,
): NativeStackNavigationOptions {
  return {
    title: title ?? '',
    headerTransparent: true,
    headerLeft: () => <BackButton onPress={onPressBack} />,
    headerRight: () => <DeleteButton onPress={onPressDelete} />,
  };
}

// SetUpRecoveryPhrase
export const onboardingNavigationStack = (
  <>
    {/* <OnboardingRootStack.Navigator initialRouteName="WelcomeScreen"> */}
    <OnboardingRootStack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={RootStackScreenHideHeader}
    />
    <OnboardingRootStack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={RootStackScreenHideHeader}
    />
    {/* </OnboardingRootStack.Navigator> */}
  </>
);
