import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppColors } from '../../utils/theme/app.colors';
import { OnboardingNavigationStackParamsList } from './navigation/navigation.params.type';
import Screen from '../screen';
import { FONTS } from '../../utils/theme/fonts';


/**
 * Contains the onboarding UI.
 */
const WelcomeScreen = (props: StackProps) => {

    const navigation = props.navigation;

    return (
        <Screen>
            <View style={style.container}>
                <Text style={style.header}>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>
                <Text>Welcome Screen</Text>

                <Button
                    title="Log In"
                    onPress={() =>
                        navigation.navigate('LoginScreen')
                    }
                />

                <Button
                    title="Register"
                    onPress={() =>
                        navigation.navigate('RegisterScreen')
                    }
                />
            </View>
        </Screen>
    );
};

type StackProps = NativeStackScreenProps<
    OnboardingNavigationStackParamsList,
    'WelcomeScreen'
>;

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: AppColors.background,
    },
    header: {
        ...FONTS.body1,
        color: AppColors.darkblue
    }
});

export default WelcomeScreen;