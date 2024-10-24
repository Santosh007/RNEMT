import { Component } from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements'

export default class AppBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Appbar.Header>
                {this.props.back ? <Appbar.BackAction onPress={this.props.navigation.goBack}/> : null}
                <Appbar.Content title={getHeaderTitle(this.props.options, this.props.route.name)} />
            </Appbar.Header>
        )
    }
}