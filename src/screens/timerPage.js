import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const timerPage = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/progressBarDummy.png')}
      />
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
    width: 150,
    borderColor: '#FFE0F1',
    borderWidth: 2
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
