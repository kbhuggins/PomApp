/**
 * @author Kahrin Huggins
 * @description start screen to give brief app description + start button.
 * START BUTTON GOES TO POM DETAILS SCREEN
 */

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

/**
 *
 * @description introduction to app
 * @todo make more stylish (use animations?) and concise (mostly related to text)
 */
const startScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Lo-fi Pom</Text>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText} onPress={() => props.navigation.navigate('Details')}>Start</Text>
      </TouchableOpacity>

      <Text style={styles.infoStyle}>
        The Pomodoro Technique is a time management method developed
        to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.
      </Text>
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
  infoStyle: {
    color: '#D5BDBD',
    marginVertical: 50,
    marginHorizontal: 40,
    textAlign: 'center'
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
    width: 150,
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
  }
})

export default startScreen
