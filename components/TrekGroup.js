import { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";

class TrekGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "This is Good Treking group",
        };
    }

    render() {
        return (
            <Card style={styles.cotainer}>
                <Card.Title title={this.props.children.name} subtitle="Details" />
                <Card.Content>
                <Text variant="bodyMedium">{this.state.description}</Text>
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

export default TrekGroup;