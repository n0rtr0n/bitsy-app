import {Text, View} from "react-native";
import {Card, Slider} from "react-native-elements";
import React from "react";

const PulseSolidColorPattern = ({pulseParameters, handlePulseSolidColorPatternUpdate}) => {
  return (
    <Card>
      <Card.Title>Pulse Solid Color</Card.Title>
      <View>
        <Text>Red Value: {pulseParameters.red}</Text>
        <Slider
          maximumValue={255}
          value={pulseParameters.red}
          onValueChange={value => handlePulseSolidColorPatternUpdate({red: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Green Value: {pulseParameters.green}</Text>
        <Slider
          maximumValue={255}
          value={pulseParameters.green}
          onValueChange={value => handlePulseSolidColorPatternUpdate({green: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Blue Value: {pulseParameters.blue}</Text>
        <Slider
          maximumValue={255}
          value={pulseParameters.blue}
          onValueChange={value => handlePulseSolidColorPatternUpdate({blue: parseInt(value)})}
        />
      </View>
      <View>
        <Text>speed: {pulseParameters.pulseSpeed}</Text>
        <Slider
          maximumValue={10}
          value={pulseParameters.pulseSpeed}
          onValueChange={value => handlePulseSolidColorPatternUpdate({pulseSpeed: parseInt(value)})}
        />
      </View>
    </Card>
  )
};

export default PulseSolidColorPattern;