import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';



export default function CameraPage({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState (Camera.Constants.Type.back);

    lastTap = null;

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        }) ();
    }, []);

    if(hasPermission === null) {
        return <View />;
    }
    if(hasPermission === false) {
        return (
            <View style = {styles.container}>
                <Text style = {styles.NoPermText}>No access to camera</Text>
                <Text style = {{ fontSize: 15, textAlign: 'center', padding: 10, fontStyle: 'italic' }}>Please go to settings to change camera permissions</Text>
            </View>
        );
    }

    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if(this.lastTap && (now === this.lastTap) < DOUBLE_PRESS_DELAY) {
            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
        }
        else {
            this.lastTap = now;
        }
    } 

    return(
        <TouchableWithoutFeedback onPress = {() => this.handleDoubleTap()}>
            <View style ={{ flex: 1 }}>
                <Camera style={{ flex: 1 }} type={type} ref={ref => {
                    setCameraRef(ref);
                }}>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-start' }}>
                        <TouchableOpacity style={{ flex: 0.1, flexDirection: 'row', alignSelf: 'flex-start', paddingLeft: 20, paddingTop: 40 }}
                            onPress={() => {navigation.navigate("home")}}
                        >
                            <Ionicons name="md-arrow-round-back" size={30} color="white"/>
                            <Text style = {{ color: 'white', fontSize: 20, fontWeight: 'bold', paddingLeft: 8, paddingTop: 2.8 }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ flex: 0.1, alignSelf: 'flex-end', paddingRight: 25, paddingBottom: 30 }}
                            onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
                        }}>
                            <Ionicons name="md-reverse-camera" size={40} color="white"/>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    NoPermText: {
        justifyContent: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
})