import { Component } from "react";
import { Avatar, Card, Button, List, TextInput, HelperText } from "react-native-paper";
import { StyleSheet, ScrollView, View } from "react-native";
import { DatePickerInput } from "react-native-paper-dates";
import API from "./utils/API";

export default class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            location: '',
            details: '',
            startDate: '',
            endDate: '',
            currentStatus: '',
            price: '',
            userId: this.props.route.params.userId,
            groupIds: this.props.route.params.groupIds,
            multiline: true,
            types: ["Trek", "Cycling", "Marathon"],
            status: ["Upcoming", "Inprogress", "Completed", "Cancelled"],
            validType: false,
            validStatus: false,
            eventId : ''
        }
    }

    addName = (ename) => {
        this.setState({
            name: ename
        })
    }

    addType = (etype) => {
        this.setState({
            type: etype,
            validType: !this.state.types.includes(this.state.type)
        })
    }

    addLoc = (loc) => {
        this.setState({
            location: loc
        })
    }

    addDetails = (details) => {
        this.setState({
            details: details
        })
    }

    addStatus = (status) => {
        this.setState({
            currentStatus: status,
            validStatus: !this.state.status.includes(this.state.currentStatus)
        })
    }

    openCalandar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    addStartDate = (date) => {
        this.setState({
            startDate: date
        })
    }

    addEndDate = (date) => {
        this.setState({
            endDate: date
        })
    }

    addPrice = (price) => {
        this.setState({
            price: price
        })
    }

    AddEvent = () => {
        let event =  {
            name: this.state.name,
            location: this.state.location,
            type: this.state.type,
            details: this.state.details,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: this.state.currentStatus,
            price: this.state.price,
            groupId : this.status.groupIds.at(2)
        }
        API.post("/events", event).then(resp => {
            this.setState({eventId : resp.data.eventId});
        }).catch(e =>{
            console.log(e);
        }).finally(() => {
            this.props.navigation.navigate({
                name: "Profile",
                params: { eventId : this.state.eventId},
                merge: true
            })
        })
        
        let group = {
            name: this.state.name,
            description: '',
            events: [
                {
                    name: this.state.name,
                    location: this.state.location,
                    type: this.state.type,
                    details: this.state.details,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    status: this.state.currentStatus,
                    price: this.state.price
                }
            ]
        }
        /*API.post("/groups", group).then(resp => {
            return resp.data;
        }).then(group => {
            let usergroup = {
                userId: this.state.userId,
                groupId: group.groupId,
                admin: true
            }
            API.post("/usergroup", usergroup).then(response => {
                console.log(response.data);
            }).catch(e => {
                console.log(e);
            })
        }).catch(e => {
            console.log(e);
        });*/


        /*let event = {
            name: this.state.name,
            location: this.state.location,
            type: this.state.type,
            details: this.state.details,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: this.state.currentStatus,
            price: this.state.price
        }

        API.post("/groups", group).then(response => {
            console.log(response.data);
        }).catch(e => {
            console.log(e);
        })*/
    }

    componentDidMount() {
        /*API.get("/users").then(resp => {
            resp.data.map(usr => {
                this.state.user = usr
            })
        }).catch(e => {
            console.log(e);
        })*/
    }

    cancel = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Card style={styles.container}>
                <Card.Title variant="titleLarge" title="Create Event" subtitle="Fill event details" left={LeftContent} />
                <Card.Content style={styles.content}>
                    <ScrollView style={styles.subcontent}>
                        <TextInput
                            label="Event Name"
                            value={this.state.name}
                            onChangeText={ename => this.addName(ename)}
                            mode="outlined"
                        />
                        <View>
                            <TextInput
                                label="Type"
                                value={this.state.type}
                                onChangeText={etype => this.addType(etype)}
                                mode="outlined"
                            />
                            <HelperText type="error" visible={this.state.validType}>Valid Types are {this.state.types}</HelperText>
                        </View>
                        <TextInput
                            label="Location"
                            value={this.state.location}
                            onChangeText={loc => this.addLoc(loc)}
                            mode="outlined"
                        />
                        <TextInput
                            label="Details"
                            value={this.state.details}
                            onChangeText={dets => this.addDetails(dets)}
                            mode="outlined"
                            multiline={this.state.multiline}
                        />
                        <DatePickerInput
                            locale="en"
                            label="Start Date"
                            value={this.state.startDate}
                            onChange={(d) => this.addStartDate(d)}
                            inputMode="start"
                            presentationStyle='formSheet'
                        />
                        <DatePickerInput
                            locale="en"
                            label="End Date"
                            value={this.state.endDate}
                            onChange={(d) => this.addEndDate(d)}
                            inputMode="start"
                            presentationStyle='formSheet'
                        />
                        <View>
                            <TextInput
                                label="Current Status"
                                value={this.state.currentStatus}
                                onChangeText={status => this.addStatus(status)}
                                mode="outlined"
                            />
                            <HelperText type="error" visible={this.state.validStatus}>Valid status are {this.state.status}</HelperText>
                        </View>
                        <TextInput
                            label="Price"
                            value={this.state.price}
                            onChangeText={price => this.addPrice(price)}
                            mode="outlined"
                        />
                    </ScrollView>
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={this.cancel}>Cancel</Button>
                    <Button mode="contained" onPress={this.AddEvent}>Ok</Button>
                </Card.Actions>
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