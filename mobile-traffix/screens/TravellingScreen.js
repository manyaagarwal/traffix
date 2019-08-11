import React from 'react'
import {Body, Button, Header, Icon, Left, Title, Container} from "native-base";

class TravellingScreen extends React.Component {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => navigate('Profile')}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Traffix</Title>
                        </Body>
                    </Header>

            </Container>
        );
    }
}

export default TravellingScreen;