import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {StackScreenProps} from '@react-navigation/stack'

import TopLogin from "../StylesLogin/TopLogin"
import DownLogin from "../DownLogin"


const useForm = ({type}) => {
  const [value, setValue]= useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return { 
    type,
    value,
    onChange
  }

}



export default function Login({navigation}) {


  const username = useForm({type:'text'});
  const password = useForm({type: 'password'});

  return (
    <View style={styles.container} >
      <TopLogin style={styles.TopLogin} /> 
      <Text style={styles.titulo}>Bienvenido!</Text>
      <TextInput
        style={styles.inputUsuario}
        placeholder="username"
       {...username}
      />

      <TextInput style={styles.inputUsuario} 
      placeholder="Contraseña" 
      {...password}
      />

      <Text style={styles.subTitle}>Sing In to your account</Text>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => navigation.navigate("Categories")}
      >
        <Text style={styles.TextBtnLgn}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.subTitle2}>Crear cuenta</Text>
      </TouchableOpacity>
      {/* <TouchableNativeFeedback 
        onPress={() => Alert.alert('Haz olvidado tu contraseña?')}
        // onPress={() => ModalBaseProps}
      >
      <Text style={styles.subTitle2}>¿Olvidaste tu contraseña?</Text>

      </TouchableNativeFeedback>
      <StatusBar style="auto" /> */}
      {/* <DownLogin style={styles.DownLogin} /> */}
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
  },

  titulo: {
    width: "90%",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: "#1C304A",
  },

  subTitle: {
    fontSize: 15,
    color: "#1C304A",
    fontWeight: "bold",
    marginBottom: 15,
  },

  subTitle2: {
    fontSize: 15,
    color: "#1C304A",
    fontWeight: "bold",
    marginTop: 15,
  },

  inputUsuario: {
    borderWidth: 1,
    borderColor: (255, 255, 255, 0.19),
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
    paddingStart: 25,
    padding: 10,
    width: "79%",
    height: 50,
    borderRadius: 12,
    position: "relative",
  },
  TopLogin: {
    // position: "absolute",
    // marginTop:-650
    marginTop: "-72%",
    marginBottom: "30%",
  },
  DownLogin: {
    // marginBottom:-650,
    marginTop: "32%",
    marginBottom: "-71%",
  },
  btnLogin: {
    width: "79%",
    backgroundColor: "#046B99",
    alignItems: "center",
    borderRadius: 10,
    height: "7%",
    padding: "2%",
  },

  TextBtnLgn: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    padding: '2%',
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     height:"60%",
//     width:"100%",
//     position: "absolute"
//   },

//   titulo: {
//     // height:'10%',
//     width: "90%",
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: "bold",
//     fontSize: 40,
//     textAlign: "center",
//     color: "#1C304A",
//   },

//   subTitle: {
//     fontSize: 15,
//     color: "#1C304A",
//     fontWeight: "bold",
//     marginBottom: 15,
//   },

//   subTitle2: {
//     fontSize: 15,
//     color: "#1C304A",
//     fontWeight: "bold",
//     marginTop: 15,
//   },

//   inputUsuario: {
//             // position: "absolute",
//     borderWidth: 1,
//     borderColor: (255, 255, 255, 0.19),
//     borderRadius: 10,
//     marginTop: 10,
//     marginBottom: 15,
//     paddingStart: 25,
//     padding: 10,
//     width: "79%",
//     height: 50,
//     borderRadius: 12,
//     position: "relative"
//   },
//   TopLogin:{
//     position: "absolute",
//     height:"100%",
//     // marginTop:-650
//     marginTop:"720%",
//     // marginBottom:"30%",
//      marginBottom:"-10%",
//   },
//   DownLogin:{
//     // position: "relative",
//     // marginBottom:-650,
//     marginTop:"32%",
//     // marginBottom:"-71%",
//     marginBottom:"-320%",

//   }
// });
