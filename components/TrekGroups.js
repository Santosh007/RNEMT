import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import Api from "./utils/API";
import TrekGroup from "./TrekGroup";

class TrekGroups extends Component {

    constructor(props){
        super(props);
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        Api.get("/groups").then(response => {
            this.setState({
                groups: response.data
            })
        }).catch( error => {
            console.log(error)
        });
    }

    render() {
        return (
            <FlatList
                style={styles.container}
                data={this.state.groups}
                renderItem={({ item }) => <TrekGroup>{item}</TrekGroup>}
                keyExtractor={item => item.groupId}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
});

/*
<List.Item title="First Item" style = {styles.top}/>
                <List.Item title="Second Item" style = {styles.middle}/>
                <List.Item title="Third Item" style = {styles.bottom}/>
<View style={styles.container}>
                <Pressable style={styles.button} onPress={this.onAddGroup}>
                    <Text>Add group</Text>
                </Pressable>
                <View>
                    <FlatList
                        data={this.state.groups}
                        renderItem={({ item }) => <TrekGroup name={item.name} description={item.groupId} />}
                        keyExtractor={item => item.groupId}
                    />
                </View>
            </View>


const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
*/
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});*/

export default TrekGroups;