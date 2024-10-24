import { Component } from "react";
import { Card, Text, Button, Avatar, List, Divider } from "react-native-paper";
import { StyleSheet } from "react-native";
import API from "./utils/API";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            mygroups : [],
            groupsJoined : []
        }
    }

    componentDidMount() {
        API.get("/users/1").then(resp => {
            const mg = [];
            const jg = [];
            resp.data.userGroups.forEach(ug => {
                if(ug.admin){
                    mg.push(ug.groupId);
                }else{
                    jg.push(ug.groupId)
                }
            })
            this.setState({
                user: resp.data,
                mygroups : mg,
                groupsJoined : jg
            })
        })
    }

    getGroups = () => {
        this.props.navigation.navigate("Groups", {groupIds : this.state.mygroups})
    }

    addGroup = () => {
        this.props.navigation.navigate("AddGroup", {userId : this.state.user.id})
    }

    createEvent = () => {
        this.props.navigation.navigate("Create", {userId : this.state.user.id, groupIds : this.state.mygroups});
    }

    render() {
        let name = this.state.user.firstName + ' ' + this.state.user.lastName;
        return (
            <Card style={styles.container}>
                <Card.Title titleVariant="titleLarge" title={name} subtitle={this.state.user.email} left={LeftContent} />
                <Card.Content>
                    <List.Item
                        title="My Groups"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="account-circle"/>}
                        onPress = {this.getGroups}
                        style = {styles.item}
                    />
                    <Divider/>
                    <List.Item
                        title="Add Group"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="account-group"/>}
                        onPress = {this.addGroup}
                        style = {styles.item}
                    />
                    <Divider/>
                    <List.Item
                        title="Create Event"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="alpha-e-circle"/>}
                        onPress = {this.createEvent}
                        style = {styles.item}
                    />
                </Card.Content>
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
    item : {
        padding: 10,
        margin: 5
    }
});