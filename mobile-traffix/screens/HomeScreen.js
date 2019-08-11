import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View,TextInput, Image, Dimensions } from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right,
  Content,
  Card,
  CardItem
} from 'native-base';
import { MonoText } from '../components/StyledText';
import {ScrollView} from "react-native-web";
import {AppLoading} from "expo";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  static navigationOptions = {
  };
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }


  render() {
    const { navigate } = this.props.navigation;
    let {height, width} = Dimensions.get('window');
    function handleEnter(){
        console.log('Submit')
        navigate('Result')
    }
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
        <Container style={{backgroundColor:'#101010'}}>
          <Header>
            <Left>
              <Button transparent onPress={() => navigate('Profile')}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Traffix</Title>
            </Body>
            <Right />
          </Header>
          <Container style={{height:'100%'}}>
            <Header searchBar rounded>
              <Item  style={{borderRadius: 45}}>
                <Icon name="ios-search" />
                <TextInput placeholder="Enter Destination" onSubmitEditing={handleEnter}/>
              </Item>
            </Header>
            <Content>
              <Image source={require('../assets/images/map.jpg')} style={{height:height, width:width, backgroundColor:'transparent', flex:1}}/>
            </Content>
            <Content>
              <Card>
                <CardItem header bordered style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                  <Text>Saved &nbsp;</Text><Icon name="star-half"/>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      <Icon name="home"/> <Text>&nbsp;Home</Text>
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                      <Icon name="calculator"/> <Text onPress={() => navigate('Result')}>&nbsp;Work</Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem header bordered style={{display:'flex', justifyContent:'center', flexDirection:'row'}}>
                  <Text>Recent</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>
                      DLF Mall of India, Sector 18, Noida, Uttar Pradesh
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
          <Container>
          </Container>
        </Container>
    );
  }
}

export default HomeScreen;