import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import { Avatar, Card, IconButton, Paragraph, Title } from "react-native-paper";
import { TextInput } from "react-native-web";

export default function ForoIndividual() {
    return (
        <View styles={styles.container}>
            <TouchableOpacity>
                {/* <Card.Title
                    title="Card Title"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                    right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
                /> */}
            </TouchableOpacity>
            <Card styles={styles.containerCard}>
                <Card.Content styles={styles.containerCardContent}>
                    <Title>JavaScript</Title>
                    <Text>Jose Castillo</Text>
                    <Paragraph>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doanim id est laborum."</Paragraph>
                </Card.Content>
              
            </Card>
            <Card>
            <Card.Content styles={styles.containerCardContent}>
                <TextInput 
                placeholder="Agrega un comentario..." 
                styles={styles.InputForo}/>
                </Card.Content>
                <Card.Content styles={styles.containerCardContent}>
                <Text 
                styles={styles.TxtForo}>Comentarios!</Text>
                <Paragraph>"Esta discusion estuvo Genial."</Paragraph>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C304A",
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

    containerCard: {
        marginBottom: 30,
        backgroundColor: "#DEFBAE",
    },
    containerCardContent: {
        height: '60%',
        width: '100%'
    },
    InputForo: {
        height: '40%',
        width: '100%',
        backgroundColor: "#DEFBAE",
        borderColor: "#000",
    },
});
