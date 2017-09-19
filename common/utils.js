import React, {
	Component
} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	PixelRatio
} from 'react-native';

module.exports = {
	size: {
		height: Dimensions.get('window').height,
		width: Dimensions.get('window').width
	},
	pixel: 1 / PixelRatio.get(),
	ajax: function(url, successcallback, failcallback) {
		fetch(url)
			.then(response => response().text())
			.then(responseText => {
				successcallback(JSON.parse(responseText));
			})
			.catch(function(err) {
				failcallback(err);
			});
	}
};