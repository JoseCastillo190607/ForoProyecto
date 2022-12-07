import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, IconButton, Paragraph, Title } from "react-native-paper";

export default function Cartegories({navigation}) {
    return (
        <View styles={styles.container}>
                 {/* <Button 
            onPress={() => native.navigate("Foro")}
            >
            <Text>Foro</Text>
            </Button> */}
            {/* <TouchableOpacity> */}
                {/* <Text styles={styles.txtForo}>Foro de Discusion</Text> */}

                {/* <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                /> */}
            {/* </TouchableOpacity> */}
            {/* <Card> */}
            {/* <Card width={30} styles={styles.containerCard}> */}
                <Button
                  buttonColor="#fff"
                  onPress={() => navigation.navigate("Foro")}
                  >
                    <Text 
                    >Ir a Foro</Text>

                </Button>
                <Button
                  buttonColor="#DEFBAE"
                  onPress={() => navigation.navigate("Articulos")}
                  >
                    <Text>Categoria 1</Text>

                </Button>
                <text marginTop="30"></text>
                <Button 
                  buttonColor="#DEFBAE"
                  onPress={() => navigation.navigate("Articulos")}
                  >
                    <Text>Categoria 2</Text>
   
                </Button>
            {/* </Card> */}
            {/* </Card>
            <Card styles={styles.cardsBetween}></Card>
            <Card  styles={styles.containerCard}> */}
                {/* <Button color="#DEFBAE">
                    <Text>JavaScript2</Text> */}
                    {/* <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph> */}
                {/* </Button> */}
            {/* </Card> */}
            {/* <Text></Text> */}
            {/* <Card styles={styles.containerCard}> */}
           
            {/* </Card> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: "absolute",
        // backgroundColor: "",
        marginLeft:'30%',
        marginRight: '30%'
    },

    txtForo: {
        color: "#1C304A"
    },

    containerCard:{
        margin: 30,
        height: '30%',
        width: 30,
        backgroundColor: '#DEFBAE',
        alignItems: 'center'
    },
    cardsBetween: {
      margin: '10%'
    }
});
