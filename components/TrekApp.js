import { Component } from "react";
import TrekGroups from "./TrekGroups";
import AppBar from "./AppBar";
import SignUp from "./SingUp";
import { SafeAreaView, StyleSheet } from "react-native";
import BottomBar from "./BottomBar";

export default class TrekApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style = {styles.container}>
              <AppBar />
              <BottomBar/>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
});
