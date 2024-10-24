import { Component, useState } from "react";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import Api from "./utils/API";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : '',
            lname : '',
            email : ''
        };
    }

    addUser = () => {
        let payload = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            email: this.state.email
        }
        Api.post("/users", payload).then(response => {
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        })
    };

    addFirstName = (fname) => {
        this.setState({
            fname : fname
        })
    }

    addLastName = (lname) => {
        this.setState({
            lname : lname
        })
    }

    addEmail = (email) => {
        this.setState({
            email : email
        })
    }

    render() {
        return (
            <Card style={styles.container}>
                <Card.Title variant="titleLarge" title="SignUp OR Login" subtitle="Login Using" left={LeftContent} />
                <Card.Content>
                    <TextInput
                        label="First Name"
                        value={this.state.fname}
                        onChangeText={fname => this.addFirstName(fname)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Last Name"
                        value={this.state.lname}
                        onChangeText={lname => this.addLastName(lname)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.addEmail(email)}
                        mode="outlined"
                    />
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained">Cancel</Button>
                    <Button mode="contained" onPress={this.addUser}>Ok</Button>
                </Card.Actions>
            </Card>
        )
    }
}

const LeftContent = props => <Avatar.Icon {...props} icon="account" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
});