import React from 'react'
import { StyleSheet, Text, View, Image, Platform, StatusBar, FlatList, Modal, TouchableHighlight, Alert } from 'react-native'
import {Button, Icon, Right, Container, Header} from 'native-base'

class ProfileScreen extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <Container>
                <Header>
                    <Right>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        )
    }
}

export default ProfileScreen;