import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Text,
	WebView,
	View
} from 'react-native';

class TWebView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: this.props.url,
			isError: false,
			isMargin: this.props.isMargin
		};
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.isError ? 
					<View style={styles.errorInfo}>
						<Text style={styles.text}>网络出现问题...</Text>
					</View>
					:
					<WebView startInLoadingState={true}
					onError={this._showError.bind(this)}
					source={{uri: this.state.url}}
					javascriptEnable={true}
					domStorageEnable={true}
					scalesPageToFit={true}
					style={{marginTop: this.state.isMargin || -20}} />
				}
			</View>
		)
	}

	_showError() {
		this.setState({
			isError: true
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	errorInfo: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		fontWeight: '600'
	}
});
module.exports = TWebView;