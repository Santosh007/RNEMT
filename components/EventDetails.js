import { Component } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, DataTable } from "react-native-paper";

export default class EventDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: this.props.route.params
        }
    }

    render() {
        return (
            <Card style={styles.container}>
                <Card.Title titleVariant="titleLarge" title={this.state.details.name} subtitle={this.state.details.details} left={LeftContent} />
                <Card.Content style={styles.content}>
                    <ScrollView style={styles.subcontent}>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">Location</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.location}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">Type</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.type}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">Start Date</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.startDate}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">End Date</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.endDate}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">Status</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.status}</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell><Text variant="bodyMedium">Price</Text></DataTable.Cell>
                            <DataTable.Cell><Text variant="bodyMedium">{this.state.details.price}</Text></DataTable.Cell>
                        </DataTable.Row>
                    </ScrollView>
                </Card.Content>
            </Card>
        )
    }
}

const LeftContent = props => <Avatar.Icon {...props} icon="hiking" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
    content: {
        height: '70%'
    },
    subcontent: {
        scrollbar: 'none'
    }
});