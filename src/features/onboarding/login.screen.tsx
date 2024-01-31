import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen } from 'react-native-screens';
import { AppColors } from '../../utils/theme/app.colors';
import { OnboardingNavigationStackParamsList } from './navigation/navigation.params.type';

/**
 * Contains the onboarding UI.
 */
const LoginScreen = (props: StackProps) => {
    
    return (
        <Screen>
            <View style={style.container}>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
                <Text>Login Screen</Text>
            </View>
        </Screen>
    );
};

type StackProps = NativeStackScreenProps<
    OnboardingNavigationStackParamsList,
    'LoginScreen'
>;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: AppColors.background,
    },
});

export default LoginScreen;