import { Component } from "react";
import { StyleSheet } from "react-native";
import { Card, Text, Button, DataTable } from "react-native-paper";

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            nav: this.props.nav
        }
    }

    getDetails = () => {
        this.state.nav.navigate("Details", this.state.item);
    }

    render() {
        return (
            <Card style={styles.cotainer} onPress={this.getDetails}>
                <Card.Title titleVariant="titleLarge" title={this.state.item.name} subtitle={this.state.item.details} />
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <DataTable.Row>
                        <DataTable.Cell><Text variant="bodyMedium">Location</Text></DataTable.Cell>
                        <DataTable.Cell><Text variant="bodyMedium">{this.state.item.location}</Text></DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell><Text variant="bodyMedium">Type</Text></DataTable.Cell>
                        <DataTable.Cell><Text variant="bodyMedium">{this.state.item.type}</Text></DataTable.Cell>
                    </DataTable.Row>
                </Card.Content>
            </Card>
        )
    }

}

const styles = StyleSheet.create({
    cotainer: {
        padding: 10,
        margin: 5
    }
})