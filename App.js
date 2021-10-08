import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import startScreen from './src/screens/startScreen'
import pomDetails from './src/screens/pomDetails'
import timerPage from './src/screens/timerPage'
import optionsScreen from './src/screens/optionsScreen'

const navigator = createStackNavigator(
  {
    Home: startScreen,
    Details: pomDetails,
    Timer: timerPage,
    Options: optionsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Lo-fi Pom'
    }
  }
)

export default createAppContainer(navigator)
