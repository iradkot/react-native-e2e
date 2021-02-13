/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StatusBar,
  Button
} from "react-native";


const App: () => React$Node = () => {
  const [textInputValue, setTextInputValue] = React.useState("");

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "aliceblue" }}
              testID="myContainer">
          <TextInput
            style={{
            height: 40,
            minWidth: 200,
            borderColor: "gray",
            borderWidth: 1,
            placeholderTextColor: "gray",
          }}
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Insert your text!"
            testID="myInput"
          />
          <Button
            onPress={() => setTextInputValue('')}
            title="Clear text"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            testID="myButton"
          />
        </View>
      </SafeAreaView>
    </>
  );
};


export default App;
