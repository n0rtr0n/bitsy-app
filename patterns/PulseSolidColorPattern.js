import {Text, View} from "react-native";
import {Button, Card, CheckBox, Slider} from "react-native-elements";
import React from "react";

const PulseSolidColorPattern = ({pulseParameters, handlePulseSolidColorPatternUpdate, handlePulseGoButton}) => {
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
          maximumValue={14}
          value={pulseParameters.pulseSpeed}
          onValueChange={value => handlePulseSolidColorPatternUpdate({pulseSpeed: parseInt(value)})}
        />
      </View>
      <View>
        <Text>Latch mode enabled: {pulseParameters.latchModeEnabled}</Text>
        <Text>When enabled, will only update when "go" button is pressed</Text>
        <CheckBox  
          center  
          title='Enable/disable latch mode'
          checked={pulseParameters.latchModeEnabled}
          onPress={() => handlePulseSolidColorPatternUpdate({latchModeEnabled: !pulseParameters.latchModeEnabled})}
        />
      </View>
      <View>
        <Text>When latch mode is enabled, press this button to update parameters</Text>
        <Button
          title="Update Pattern"
          onPress={() => handlePulseGoButton({})}
        />
      </View>
    </Card>
  )
};

export default PulseSolidColorPattern;