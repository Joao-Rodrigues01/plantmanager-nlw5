import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Wellcome } from '../pages/Wellcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator(); 

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator 
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      },
    }}
  >
    <stackRoutes.Screen 
      name="Wellcome"
      component={Wellcome}
    />

    <stackRoutes.Screen 
      name="UserIdentification"
      component={UserIdentification}
    />

    <stackRoutes.Screen 
      name="Confirmation"
      component={Confirmation}
    />

    <stackRoutes.Screen 
      name="PlantSelect"
      component={PlantSelect}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes;