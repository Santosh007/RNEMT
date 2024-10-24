import { Component } from "react";
import { Card, Text, Button } from "react-native-paper";

export default class AddUser extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Card>
                <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        )
    }
}