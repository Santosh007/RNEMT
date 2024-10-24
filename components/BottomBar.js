import { Component } from "react";
import { BottomNavigation } from "react-native-paper";
import User from "./User";
import TrekGroups from "./TrekGroups";
import AddUser from "./AddUser";
import Events from "./events";
import Profile from "./Profile";

export default class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'me', title: 'Me', focusedIcon: 'account-circle', unfocusedIcon: 'account-circle-outline' },
                { key: 'events', title: 'Events', focusedIcon: 'alpha-e-circle', unfocusedIcon: 'alpha-e-circle-outline' },
                { key: 'groups', title: 'Groups', focusedIcon: 'account-group', unfocusedIcon: 'account-group-outline' }
            ]
        }
    }

    updateIndex = (index) => {
        this.setState({
            index : index
        })
    }

    render() {
        return (
            <BottomNavigation
                navigationState={{...this.state}}
                onIndexChange={index => this.updateIndex(index)}
                renderScene={renderScene}
            />
        )
    }
}

const renderScene = BottomNavigation.SceneMap({
    me: Profile,
    events: Events,
    groups: TrekGroups
})
