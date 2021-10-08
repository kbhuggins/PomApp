/**
 * @author Kahrin Huggins
 * @description Screen where user enters in the details (work time, break time & looping) for the timer
 * CAN GO TO TIMER AND/OR OPTIONS SCREEN
 */
import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch, Image, Alert } from 'react-native'

const createAlert = () =>
  Alert.alert(
    'Taking Breaks',
    'Remember to take a big break in between your Pom Sessions!',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ]
  )
/**
 *
 * @description form for timer information
 * @todo implement form submission to use in other screens.
 */
const pomDetails = (props) => {
  const [shouldShow, setShouldShow] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.textStyle}> Timer Details </Text>

        <Text style={styles.formStyle}> Work Duration </Text>
        <TextInput
          placeholder='minutes'
          keyboardType='numeric'
          style={styles.inputStyle}
          maxLength={2}
        />

        <Text style={styles.formStyle}>Break Duration</Text>
        <TextInput
          placeholder='minutes'
          keyboardType='numeric'
          style={styles.inputStyle}
          maxLength={2}
        />

        <Text style={styles.formStyle}>Loop?</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#FEF4FA' }}
          onChange={() => setShouldShow(!shouldShow)}
          thumbColor={isEnabled ? '#767577' : '#FEF4FA'}
          value={isEnabled}
          onValueChange={toggleSwitch}
        />

        {shouldShow ? (
          <View>
            <Text style={styles.formStyle}> How many loops? </Text>
            <TextInput
              placeholder='loops'
              keyboardType='numeric'
              style={styles.inputStyle}
              maxLength={2}
            />
          </View>
        ) : <Text>Press me</Text>}

        <TouchableOpacity onPress={createAlert}>
          <Image style={styles.imageStyle} source={require('../../assets/helpImg.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Timer')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle} onPress={() => props.navigation.navigate('Options')}>
          <Text style={styles.buttonText}>Options</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

/**
 * @description stylesheet
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%'
  },
  formBox: {
    alignItems: 'center'
  },
  textStyle: {
    color: 'pink',
    fontSize: 40,
    marginHorizontal: 30,
    paddingVertical: 30,
    alignContent: 'center'
  },
  buttonStyle: {
    backgroundColor: 'white',
    height: 75,
    width: 150,
    borderColor: '#FFE0F1',
    borderWidth: 2,
    marginVertical: 20,
    borderRadius: 6
  },
  buttonText: {
    fontSize: 30,
    color: '#FFE0F1',
    paddingVertical: 15,
    textAlign: 'center'
  },
  inputStyle: {
    height: 35,
    width: 100,
    fontSize: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 20
  },
  formStyle: {
    fontSize: 15
  },
  imageStyle: {
    height: 15,
    width: 15
  }
})

export default pomDetails
