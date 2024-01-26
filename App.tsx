/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { navigationRef } from './src/navigation/navigation.service';
import { OnboardingNavigationStack } from './src/navigation/root.navigation.stack';
import { NavigationContainer } from '@react-navigation/native';
// props: Props

const App: React.FC<Props> = () => {
  const routeNameRef = React.useRef<String>();

  /**
   * On navigation container ready.
   */
  const onNavContainerReady = () => {
    routeNameRef.current = routeNameRef.current =
      typeof navigationRef?.current?.getCurrentRoute()?.name === 'undefined'
        ? ''
        : navigationRef?.current?.getCurrentRoute()?.name;
  };

  /**
   * On navigation container state change.
   */
  const onNavContainerStateChange = async () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name;

    // if (previousRouteName !== currentRouteName) {
    //   await analytics().logScreenView({
    //     screen_name: currentRouteName,
    //     screen_class: currentRouteName,
    //   });
    // }
    routeNameRef.current =
      typeof currentRouteName === 'undefined' ? '' : currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onNavContainerReady}
      onStateChange={onNavContainerStateChange}>

      {/* {props.onboarding_status ===
          OnboardingStatusNames.onboarding_complete ? (
          <NavigationDrawer />
        ) : ( */}
      <OnboardingNavigationStack />
      {/* )} */}

    </NavigationContainer>

  );
}

// const mapStateToProps = (state: RootState) => ({
//   onboarding_status: state.onboarding.status.name,
//   publicAddress: state.onboarding.publicAddress,
// });

// const mapDispatchToProps = {
//   dispatchFetchMyTransactions: generateActionQueryMyTransactions,
//   dispatchFetchPendingTransactions: generateActionQueryPendingTransactions,
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);

// type ReduxProps = ConnectedProps<typeof connector>;

// interface Props extends ReduxProps {}

interface Props {}

// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
