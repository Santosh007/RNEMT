import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Events from "./events";
import EventDetails from "./EventDetails";
import AppBar from "./AppBar";

export default class EventStackScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <EventStack.Navigator
                initialRouteName="Events"
                screenOptions={{
                    header: (props) => <AppBar {...props} />
                }}>
                <EventStack.Screen name="Events" component={Events} />
                <EventStack.Screen
                    name="Details"
                    component={EventDetails}
                    options={{
                        headerBackTitle: 'back',
                    }}
                />
            </EventStack.Navigator>
        )
    }
}

const EventStack = createNativeStackNavigator();