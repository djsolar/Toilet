import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Utils from '../../common/utils'

class About extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.center}>
                    <Text style={styles.text}>附近卫生间并导航</Text>
                    <View style={styles.items}>
                        <Image
                        resizeMode="contain"
                        style={styles.icon}
                        source={{uri: 'http://123.57.39.116:3000/help_1.png'}}/>
                    </View>
                </View>

                <View style={styles.center}>
                    <Text style={styles.text}>实时天气预报</Text>
                    <View style={styles.items}>
                        <Image
                            resizeMode="contain"
                            style={styles.icon}
                            source={{uri: 'http://123.57.39.116:3000/help_2.png'}}/>
                    </View>
                </View>
                <View style={styles.center}>
                    <Text style={styles.text}>阅读美好文章</Text>
                    <View style={styles.items}>
                        <Image
                            resizeMode="contain"
                            style={styles.icon}
                            source={{uri: 'http://123.57.39.116:3000/help_3.png'}}/>
                    </View>
                </View>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 55
    },
    center: {
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 300,
        marginTop: 15,
        marginBottom:15,
        marginLeft:10
    },
    items: {
        width: 300,
        marginBottom: 10,
        shadowOpacity: 1,
        shadowColor: '#ccc',
        shadowOffset: { width: 1 * Utils.pixel, height: Utils.pixel}
    },
    icon: {
        width: 300,
        height: 530
    }
});