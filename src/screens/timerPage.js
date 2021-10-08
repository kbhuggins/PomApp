/**
 * @author Kahrin Huggins
 * @description Actual timer page. Configurations based on the details on the previous page. Allows for timer pause and stop
 * SHOULD BE LEADING TO SUMMARY PAGE
 */
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

/**
 *
 * @description timer configuration
 */
const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={20}
    colors={[
      ['#FFE0F1', 0.4],
      ['#EB60AC', 0.4],
      ['#F38C8C', 0.2]
    ]}
    style={styles.textStyle}
  >
    {({ remainingTime, animatedColor }) => (
      <Animated.Text style={{ color: animatedColor }}>
        {remainingTime}
      </Animated.Text>
    )}
  </CountdownCircleTimer>
)

/**
 *
 * @param {props}
 * @description the timer functionality and the two buttons
 * @todo create form submission for data to be saved for summary/analytics
 */
const timerPage = (props) => {
  return (
    <View style={styles.container}>
      <UrgeWithPleasureComponent />

      <Text style={styles.textStyle}>Timer Page</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Start Timer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Stop Timer</Text>
      </TouchableOpacity>
    </View>
  )
}

/**
 * @description stylesheet
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  textStyle: {
    color: 'pink',
    fontSize: 40,
    marginHorizontal: 30,
    paddingVertical: 30
  },
  buttonStyle: {
    backgroundColor: 'white',
    height: 75,
    width: 160,
    borderColor: '#FFE0F1',
    borderWidth: 2,
    borderRadius: 6,
    marginVertical: 20
  },
  buttonText: {
    fontSize: 30,
    color: '#FFE0F1',
    textAlign: 'center',
    paddingVertical: 15
  },
  imageStyle: {
    height: 200,
    width: 250
  }
})

export default timerPage
