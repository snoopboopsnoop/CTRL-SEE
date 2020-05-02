import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CameraPage from './camerapage';

export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CTRL-SEE</Text>
      <Image
        style={styles.image}
        source={require("../../assets/haruhi-camera.jpg")}
      />
      <Text style={styles.mainText}>Text Recognition/Copy Through Camera</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate("camera")}
        >
        <Text>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 20,
    letterSpacing: 4,
  },
  mainText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 20,
  },
  image: {
    width: 300,
    height: 175,
    
  },
});