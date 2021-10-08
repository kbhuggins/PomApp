import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

/**
 *
 * @desctription creates option screen
 * @todo set up dark/light mode config, color scheme change config (presets only) & timer sounds
 */
const optionsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Options screen</Text>

      <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Back</Text>
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
    textAlign: 'center',
    paddingVertical: 30,
    alignContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'white',
    height: 75,
    width: 150,
    borderColor: '#FFE0F1',
    borderWidth: 2,
    marginVertical: 25,
    borderRadius: 6
  },
  buttonText: {
    fontSize: 30,
    color: '#FFE0F1',
    paddingVertical: 15,
    textAlign: 'center'
  }
})

export default optionsScreen
