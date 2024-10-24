import { Component } from "react";
import { Modal, Portal, Text } from 'react-native-paper';

export default class DropDown extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible : this.props.visible
        }
    }

    hideModal = () => {
        this.setState({
            visible : false
        })
    }

    render(){
        return(
        <Portal>
            <Modal visible = {this.state.visible} onDismiss={this.hideModal}>
            </Modal>
        </Portal>
    )
    }
}