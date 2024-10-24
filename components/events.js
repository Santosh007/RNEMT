import { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Event from "./Event";
import Api from "./utils/API";

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events : []
        }
    }

    componentDidMount() {
        Api.get("/events").then(response => {
            this.setState({
                events: response.data
            })
        }).catch( error => {
            console.log(error)
        });
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.events}
                renderItem={({ item }) => <Event item = {item} nav = {this.props.navigation}/>}
                keyExtractor={item => item.eventId}
            />
        )
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
