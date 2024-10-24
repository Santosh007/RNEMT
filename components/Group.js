import { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import Api from "./utils/API";

export default class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: this.props.item,
            nav : this.props.nav
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Card style={styles.cotainer}>
                <Card.Title titleVariant="titleLarge" title={this.state.group.name} subtitle="Details" />
                <Card.Content>
                    <Text variant="bodyMedium">{this.state.group.description}</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Join</Button>
                    <Button>View</Button>
                </Card.Actions>
            </Card>
        );
    }

}

const styles = StyleSheet.create({
    cotainer: {
        padding: 10,
        margin: 5
    }
})