import React from 'react';
import { Text, View, Button } from 'react-native';

const AccountDetail = (props) => {
	const account = props.navigation.state.params.data;
	const { navigate }  = props.navigation;
	return (
		<View>
			<View>
				<Text style={styles.headStyle}>Account Details</Text>
				<Text style={styles.textStyle}>Owner: {account.Owner.Name}</Text>
				<Text style={styles.textStyle}>Phone: {account.Phone}</Text>
				<Text style={styles.textStyle}>Type: {account.Type}</Text>
				<Text style={styles.textStyle}>Billing Address: {account.BillingAddress.street}</Text>
				<Text style={styles.textStyle}>Industry: {account.Industry}</Text>
				<Text style={styles.textStyle}>Website: {account.Website}</Text>
			</View>
			<View style={{marginLeft: 10, marginRight: 10, marginTop: 10}}>
				<Button title="Edit Account" color="blue" onPress={() => navigate('AccountEdit')}/>
			</View>
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