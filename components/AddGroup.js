import { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Avatar, TextInput, Button } from "react-native-paper";
import Api from "./utils/API";

export default class AddGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: this.props.route.params.userId,
            name : '',
            desc : '',
            groupId : ''
        }
    }

    addGroup = () => {
        let payload = {
            name : this.state.name,
            description : this.state.desc
        }
        Api.post("/groups", payload).then(res => {
            return res.data;
        }).then(group => {
            let usergroup = {
                userId: this.state.userId,
                groupId: group.groupId,
                admin: true
            }
            this.setState({
                groupId : group.groupId
            })
            Api.post("/usergroup", usergroup).then(response => {
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            })
        }).catch(e => {
            console.log(e);
        }).finally(() =>
            this.props.navigation.navigate({
                name: "Profile",
                params: {groupId : this.state.groupId},
                merge: true
            })
        )
    }

    cancel = () => {
        this.props.navigation.goBack();
    }

    addGroupName = (gname) => {
        this.setState({
            name : gname
        })
    }

    addDescription = (gdesc) => {
        this.setState({
            desc : gdesc
        })
    }

    render(){
        return(
            <Card style={styles.container}>
                <Card.Title variant="titleLarge" title="Create group" subtitle="Create a group to host events" left={LeftContent} />
                <Card.Content>
                    <TextInput
                        label="Group Name"
                        value={this.state.name}
                        onChangeText={gname => this.addGroupName(gname)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Description"
                        value={this.state.desc}
                        onChangeText={gdesc => this.addDescription(gdesc)}
                        mode="outlined"
                    />
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={this.cancel}>Cancel</Button>
                    <Button mode="contained" onPress={this.addGroup}>Ok</Button>
                </Card.Actions>
            </Card>
        )
    }
}

const LeftContent = props => <Avatar.Icon {...props} icon="account-group" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
});