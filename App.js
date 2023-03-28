import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from './src/BottomSheet';

export default function App() {

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const stateChange = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity style={[styles.btn,{backgroundColor: bottomSheetVisible ? 'gray' : '#fff'}]} onPress={stateChange}>
        <Text style={[styles.btnText,{color: bottomSheetVisible ? '#fff' : '#000',}]}>Sample Button</Text>
      </TouchableOpacity>
      {bottomSheetVisible && <BottomSheet />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 40,
  },
  btnText:{
    fontSize: 15,
    fontWeight: '500',
  }
});
