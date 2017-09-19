import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	WebView
} from 'react-native';

import TWebView from './twebview'

class toiletPage extends Component {

	render() {
		let cmapUri = "http://123.57.39.116:3000/html/nearby.html";

		return (
			<View style = {styles.container}>
				<TWebView url={cmapUri} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

module.exports = toiletPage;