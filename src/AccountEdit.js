import React,{ Component } from 'react';
import { Text, View, TextInput, Picker, ScrollView, Button } from 'react-native';

const AccountEdit = () => {

	const state = {
		pickerState: 'Hot'
	}

	const { formStyle, rowStyle, labelStyle, textInputStyle, buttonContainerStyle, buttonStyle } = styles;

	return (
		<ScrollView>
		<View style={formStyle}>
			<View style={rowStyle}>
				<Text style={labelStyle}>Account Owner</Text>
				<Text style={labelStyle}>Rahul Malhotra</Text>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Account Name</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Rating</Text>
				<Picker style={textInputStyle} selectedValue={state.pickerState} onValueChange={(hello) => console.log('picker value changed')}>
					<Picker.Item label="Hot" value="Hot" />
					<Picker.Item label="Warm" value="Warm" />
					<Picker.Item label="Cold" value="Cold" />
				</Picker>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Account Number</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Phone</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Fax</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Website</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Account Site</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Ticker Symbol</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Type</Text>
				<Picker style={textInputStyle} selectedValue={state.pickerState} onValueChange={(hello) => console.log('picker value changed')}>
					<Picker.Item label="Hot" value="Hot" />
					<Picker.Item label="Warm" value="Warm" />
					<Picker.Item label="Cold" value="Cold" />
				</Picker>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Ownership</Text>
				<Picker style={textInputStyle} selectedValue={state.pickerState} onValueChange={(hello) => console.log('picker value changed')}>
					<Picker.Item label="Hot" value="Hot" />
					<Picker.Item label="Warm" value="Warm" />
					<Picker.Item label="Cold" value="Cold" />
				</Picker>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Industry</Text>
				<Picker style={textInputStyle} selectedValue={state.pickerState} onValueChange={(hello) => console.log('picker value changed')}>
					<Picker.Item label="Hot" value="Hot" />
					<Picker.Item label="Warm" value="Warm" />
					<Picker.Item label="Cold" value="Cold" />
				</Picker>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Employees</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Annual Revenue</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>SIC Code</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Client Id</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Sales Rep</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Billing Address</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={rowStyle}>
				<Text style={labelStyle}>Shipping Address</Text>
				<TextInput style={textInputStyle}></TextInput>
			</View>
			<View style={buttonContainerStyle}>
				<Button color='blue' style={buttonStyle} onPress={() => console.log('Save Button Pressed')} title="Save"></Button>
			</View>			
		</View>
		</ScrollView>
	);		
}

AccountEdit.navigationOptions = {
	title: 'Edit Account'
}

const styles = {
	formStyle: {
		flex: 1,
		flexDirection: 'column'
	},
	rowStyle: {
		justifyContent: 'space-around', 
		flexDirection: 'row',
		height: 50,
		marginTop: 2.5,
		marginBottom: 2.5
	},
	labelStyle: {
		color: '#000000',
		fontSize: 20,
		marginLeft: 5,
		flexDirection: 'column',
		flex: 1,
		textAlignVertical: 'center', 
		textAlign: 'center'
	},
	textInputStyle: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5
	},
	buttonContainerStyle: {
		flex: 1,
		justifyContent: 'center',
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 10
	},
	buttonStyle: {
		flex: 1,
		flexDirection: 'row'
	}
};

export default AccountEdit;