import React, { Component } from 'react';
import { Text, View, TextInput, Picker, ScrollView, Button } from 'react-native';
import { net } from 'react-native-force';

class AccountEdit extends Component {

	state = {
		rating: '--None--',
		type: '--None--',
		ownership: '--None--',
		industry: '--None--'
	}
	
	static navigationOptions = {
		title: 'Edit Account'
	}

	componentDidMount() {
        net.describe('Account',(response) => console.log(response),(error) => console.log('error'+error));		
	}

	render() {

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
					<Picker style={textInputStyle} selectedValue={this.state.rating} onValueChange={(selectedRating) => this.setState({ rating: selectedRating })}>
						<Picker.Item label="--None--" value="--None--" />
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
					<Picker style={textInputStyle} selectedValue={this.state.type} onValueChange={(selectedAccountType) => this.setState({'type': selectedAccountType})}>
						<Picker.Item label="--None--" value="None" />
						<Picker.Item label="Prospect" value="Prospect" />
						<Picker.Item label="Customer - Direct" value="Customer - Direct" />
						<Picker.Item label="Customer - Channel" value="Customer - Channel" />
						<Picker.Item label="Channel Partner / Reseller" value="Channel Partner / Reseller" />
						<Picker.Item label="Installation Partner" value="Installation Partner" />
						<Picker.Item label="Technology Partner" value="Technology Partner" />
						<Picker.Item label="Other" value="Other" />
					</Picker>
				</View>
				<View style={rowStyle}>
					<Text style={labelStyle}>Ownership</Text>
					<Picker style={textInputStyle} selectedValue={this.state.ownership} onValueChange={(selectedOwnership) => this.setState({'ownership': selectedOwnership})}>
						<Picker.Item label="--None--" value="--None--" />
						<Picker.Item label="Public" value="Public" />
						<Picker.Item label="Private" value="Private" />
						<Picker.Item label="Subsidiary" value="Subsidiary" />
						<Picker.Item label="Other" value="Other" />
					</Picker>
				</View>
				<View style={rowStyle}>
					<Text style={labelStyle}>Industry</Text>
					<Picker style={textInputStyle} selectedValue={this.state.industry} onValueChange={(selectedIndustry) => this.setState({'industry': selectedIndustry})}>
						<Picker.Item label="--None--" value="--None--" />
						<Picker.Item label="Agriculture" value="Agriculture" />
						<Picker.Item label="Electronics" value="Electronics" />
						<Picker.Item label="Communications" value="Communications" />
						<Picker.Item label="Banking" value="Banking" />
						<Picker.Item label="Hospitality" value="Hospitality" />
						<Picker.Item label="Insurance" value="Insurance" />
						<Picker.Item label="Other" value="Other" />
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