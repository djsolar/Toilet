import React, {
    Component
}
    from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
    Navigator,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
    StatusBar
} from 'react-native';
import Utils from '../common/utils'

class settingView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity style={styles.image_view}>
                    <Image style={styles.icon} source={{uri: 'http://ogxr430c8.bkt.clouddn.com/logo.png'}}
                           esizeMode="contain"/>
                    <Text style={styles.version}>V1.0.0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.text_view, styles.text_margin]}
                >
                    <Text style={styles.text}>功能介绍</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text_view}>
                    <Text style={styles.text}>帮助中心</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.text_view}>
                    <Text style={styles.text}>服务条款</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.text_view, styles.text_view_bottom]}>
                    <Text style={styles.text}>关于</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    // 显示详情
    _showDetail(module, title, type) {
        props.navigator.push({
            component: module,
            title: title,
            barTintColor: '#fff',
            type: type
        });
    }
}

class settingPage extends Component {
    render() {
        var NavigationBarRouteMapper = {
            LeftButton: function (route, navigator, index, navState) {
                if (index > 0) {
                    return (<View style={[styles.navContainer, styles.touch]}>
                        <TouchableOpacity underlayColor='transparent'
                                          onPress={() => {
                                              if (index > 0) {
                                                  navigator.pop()
                                              }
                                          }}>
                            <Text style={styles.leftNavButtonText}>
                                返回
                            </Text>
                        </TouchableOpacity>
                    </View>)
                }
            },
            RightButton: function (route, navigator, index, navState) {
                if (index > 0) {
                    return (<View style={[styles.navContainer, styles.touch]}>
                        <TouchableOpacity
                            onPress={() => route.onPress()}>
                            <Text style={styles.rightNavButtonText}/>
                        </TouchableOpacity>
                    </View>)
                }
            },
            Title: function (route, navigator, index, navState) {
                var title = route.title || '设置';
                return (
                    <View style={[styles.navContainer, styles.navTitle]}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                    </View>
                );
            }

        };
        return (
            <Navigator
                style={{flex: 1}}
                initialRoute={{component: settingView}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navContainer}/>
                }/>
        );
    }

    configureScene(route, routeStack) {
        if (route.type === 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        var url = route.passProps ? route.passProps.url : '';
        var isMargin = route.passProps ? route.passProps.isMargin : '';
        return <route.component navigator={navigator} url={url} isMargin={isMargin}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 55
    },
    image_view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    text_view: {
        borderTopWidth: Utils.pixel,
        borderTopColor: '#ccc',
        height: 40,
        justifyContent: 'center',
        paddingLeft: 20
    },
    text_margin: {
        marginTop: 30
    },
    icon: {
        width: 88,
        height: 100
    },
    version: {
        color: '#666666'
    },
    text_view_bottom: {
        borderBottomWidth: Utils.pixel,
        borderBottomColor: '#ccc'
    },
    navContainer: {
        flex: 1,
        backgroundColor: '#007aff',
        height: 55
    },
    touch: {
        flex: 1,
        width: 65
    },
    leftNavButtonText: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 15
    },
    rightNavButtonText: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        paddingTop: 15
    },
    navTitle:{
        marginRight:72,
        width: Utils.size.width - 145
    }
});
module.exports = settingPage