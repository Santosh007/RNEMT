import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import Api from "./utils/API";
import Group from "./Group";

export default class Groups extends Component {

    constructor(props){
        super(props);
        this.state = {
            groupIds: this.props.route.params.groupIds,
            groups : []
        }
    }

    componentDidMount() {
        Api.get("/groups?ids="+this.state.groupIds.valueOf()).then(response => {
            this.setState({
                groups: response.data
            })
        }).catch( error => {
            console.log(error)
        });
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.groups}
                renderItem={({ item }) => <Group item = {item} nav = {this.props.navigation}/>}
                keyExtractor={item => item.groupId}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
});