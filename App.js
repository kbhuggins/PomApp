/**
 * @author Kahrin Huggins
 * @description Pomodoro Timer app to make cute repeatable timers.
 * @todo create Summary screen and allow it to store productivity data
 */

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import startScreen from './src/screens/startScreen'
import pomDetails from './src/screens/pomDetails'
import timerPage from './src/screens/timerPage'
import optionsScreen from './src/screens/optionsScreen'

/**
 * @description creates app navigation stack
 */
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
