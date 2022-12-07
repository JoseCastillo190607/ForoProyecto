import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
} from "react-native";
import { Avatar, Button, Card, IconButton, Paragraph, Title } from "react-native-paper";

export default function Foro({navigation}) {
    return (
        <View styles={styles.container}>
            {/* <TouchableOpacity>
                <Text styles={styles.txtForo}>Foro de Discusion</Text> */}

                {/* <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
            //     /> */}
            {/* // </TouchableOpacity> */}
            <Card>
            {/* <Card styles={styles.containerCard}>
                <Card.Content> */}
                    {/* <TouchableOpacity  */}
                    {/* onPress={() => native.native("ForoIndividual")}
                    > */}
                        {/* <Button
                  
                  onPress={() => navigation.navigate("ForoIndividual")}
                  > */}
                    {/* <Text 
                    >Ir a Foro</Text> */}
                                        <Text>JavaScript</Text>


                {/* </Button> */}
                    {/* </TouchableOpacity> */}
                    {/* <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph> */}
                 {/* </Card.Content> */}
            {/* </Card> */}
            {/* <Text></Text> */}
            {/* <Card styles={styles.containerCard}> */}
            <Text/>
                <Card.Content>
                <Button 
                    //  buttonColor="#fff"
                  onPress={() => navigation.navigate("ForoIndividual")}
                  >
                    <Title>React Native</Title>
                    </Button>
                    <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph>
                </Card.Content>

                <Card.Content>
                    <Button 
                    //  buttonColor="#fff"
                  onPress={() => navigation.navigate("ForoIndividual")}
                  >
                    <Title>React Native</Title>
                    </Button>
                    <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph>
                </Card.Content>

            </Card>
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
        backgroundColor: "",
    },

    txtForo: {
        color: "#1C304A"
    },

    containerCard:{
        marginBottom: 30,
    }
});
