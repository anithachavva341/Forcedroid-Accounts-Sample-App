import React from 'react';
import { Text, View, TextInput } from 'react-native';

const AccountEdit = () => {

	return (
		<View style={styles.formStyle}>
			<View style={styles.rowStyle}>
				<Text style={styles.labelStyle}>Phone</Text>
				<TextInput style={styles.textInputStyle}></TextInput>
			</View>
		</View>
	);
};

const styles = {
	formStyle: {
		flex: 1,
		flexDirection: 'column'
	},
	rowStyle: {
		justifyContent: 'space-around', 
		flexDirection: 'row',
		height: 40,
		marginTop: 10
	},
	labelStyle: {
		color: '#000000',
		fontSize: 20,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 2
	},
	textInputStyle: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5
	}
}

export default AccountEdit;