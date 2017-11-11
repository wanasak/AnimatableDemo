import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

const colors = ['#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F']
const animations = ['fadeIn', 'shake', 'rubberBand', 'zoomOut']

export default class App extends Component {

  state = { animation: animations[0] }

  nextAnimation = () => {
    const {animation} = this.state
    const nextIndex = (animations.indexOf(animation) + 1) % animations.length

    this.setState({ animation: animations[nextIndex] })
  }

  renderItem = (color, i) => {
    const {animation} = this.state

    return (
      <Animatable.View
        key={i}
        animation={animation}
        delay={i * 100}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={styles.text}>{i}</Text>
      </Animatable.View>
    )
  }

  render() {
    const {animation} = this.state

    return (
      <TouchableOpacity
        onPress={this.nextAnimation}
        key={animation}
      >
        {colors.map(this.renderItem)}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
})
