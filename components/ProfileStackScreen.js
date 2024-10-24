import { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./Profile";
import AddEvent from "./AddEvent";
import AppBar from "./AppBar";
import Groups from "./Groups";
import AddGroup from "./AddGroup";

export default class ProfileStackScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProfileStack.Navigator
                screenOptions={{
                    header: (props) => <AppBar {...props} />
                }}
            >
                <ProfileStack.Screen name="Profile" component={Profile} />
                <ProfileStack.Screen name="Groups" component={Groups} />
                <ProfileStack.Screen name="AddGroup" component={AddGroup} />
                <ProfileStack.Screen name="Create" component={AddEvent} />
            </ProfileStack.Navigator>
        )
    }
}

const ProfileStack = createNativeStackNavigator();