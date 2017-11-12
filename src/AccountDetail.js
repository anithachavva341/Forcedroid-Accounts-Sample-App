import React from 'react';
import { Text, View } from 'react-native';

const AccountDetail = (props) => {
	const account = props.navigation.state.params.data;
	console.log(JSON.stringify(account));
	return (
		<View>
			<Text style={styles.headStyle}>Account Details</Text>
			<Text style={styles.textStyle}>Owner: {account.Owner.Name}</Text>
			<Text style={styles.textStyle}>Phone: {account.Phone}</Text>
			<Text style={styles.textStyle}>Type: {account.Type}</Text>
			<Text style={styles.textStyle}>Billing Address: {account.BillingAddress.street}</Text>
			<Text style={styles.textStyle}>Industry: {account.Industry}</Text>
			<Text style={styles.textStyle}>Website: {account.Website}</Text>
		</View>
	);
};

const styles = {
	headStyle: {
		fontSize: 22,
		color: 'blue',
		textAlign: 'center',
		marginTop: 15
	},	
	textStyle: {
		marginLeft: 10,
		fontSize: 20,
		color: 'brown',
		marginTop: 15
	}
}

export default AccountDetail;