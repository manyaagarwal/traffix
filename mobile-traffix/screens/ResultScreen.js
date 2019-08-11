import React from 'react'
import {Body, Button, Header, Icon, Left, Title, Container, Item, Content, Card, CardItem, Thumbnail, Right} from "native-base";
import {TextInput, Image, Text} from "react-native";

class ResultScreen extends React.Component {
    render(){
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' onPress={() => navigate('Profile')}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Traffix</Title>
                    </Body>
                </Header>
                <Header searchBar>
                    <Item  style={{borderRadius: 45}}>
                        <Icon name="ios-search" />
                        <TextInput placeholder="Coming From: Your Location" value="Your Location"/>
                    </Item>
                </Header>
                <Header searchBar>
                    <Item  style={{borderRadius: 45}}>
                        <Icon name="ios-search" />
                        <TextInput placeholder="Destination: Work Place" value="Work Place"/>
                    </Item>
                </Header>
                <Content>
                    <Card>
                        <CardItem bordered>
                          <Body style={{display:'flex', flexDirection:'row', verticalAlign:'center', textAlign:'center'}}>
                              <Thumbnail small source={require('../assets/images/walk.png')} />
                              <Thumbnail small source={require('../assets/images/arrow.png')}/>
                              <Thumbnail small source={require('../assets/images/train.png')}/>
                              <Thumbnail small source={require('../assets/images/arrow.png')}/>
                              <Thumbnail small source={require('../assets/images/walk.png')}/>
                              <Right>
                                  <Thumbnail square small source={require('../assets/images/CO2.png')} style={{justifyContent:'center'}}/>
                                  <Text>80 points</Text>
                              </Right>
                              <Right>
                                <Text>60 min</Text>
                              </Right>
                          </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Body style={{display:'flex', flexDirection:'row', verticalAlign:'center', textAlign:'center'}}>
                                <Thumbnail small source={require('../assets/images/train.png')} />
                                <Thumbnail small source={require('../assets/images/arrow.png')}/>
                                <Thumbnail small source={require('../assets/images/walk.png')}/>
                                <Thumbnail small source={require('../assets/images/arrow.png')}/>
                                <Thumbnail small source={require('../assets/images/bus.png')}/>
                                <Right>
                                    <Thumbnail square small source={require('../assets/images/CO2.png')} style={{justifyContent:'center'}}/>
                                    <Text>50 points</Text>
                                </Right>
                                <Right>
                                    <Text>54 min</Text>
                                </Right>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Body style={{display:'flex', flexDirection:'row', verticalAlign:'center', textAlign:'center'}}>
                                <Thumbnail small source={require('../assets/images/bus.png')} />
                                <Thumbnail small source={require('../assets/images/arrow.png')}/>
                                <Thumbnail small source={require('../assets/images/walk.png')}/>
                                <Thumbnail small source={require('../assets/images/arrow.png')}/>
                                <Thumbnail small source={require('../assets/images/bus.png')}/>
                                <Right>
                                    <Thumbnail square small source={require('../assets/images/CO2.png')} style={{justifyContent:'center'}}/>
                                    <Text>60 points</Text>
                                </Right>
                                <Right>
                                    <Text>59 min</Text>
                                </Right>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default ResultScreen;