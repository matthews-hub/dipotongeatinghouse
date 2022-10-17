import { View, Text, SafeAreaView, Image, useWindowDimensions, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import TextField from "../components/TextField";
import styles from "./styles";
import logo from '../assets/logo.png';
import logo3 from '../assets/logo.png';
import CustomeBtn from "../components/CustomeBtn";
import SecondaryBtn from "../components/SecondaryBtn";
import { auth } from "./firebaseConfig/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}) {
    const {height, width} = useWindowDimensions();
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [isLoading,setIsLoading] = useState(false);
    
   async function login(){
      
      if(email&&password){
        setIsLoading(true);
        try{
          await signInWithEmailAndPassword(auth,email,password).then(()=>{
            navigation.navigate('Home');
            setIsLoading(false);
          })
        }catch(e){
          alert(e.message);
          setIsLoading(false);
        }
        
      }else{
        alert('please provide your log In details');
      }
    }

    function signup(){
      navigation.navigate('Signup')
    }
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={{width: width, alignItems: 'center', flex: 1}}>
            <View style={styles.imgContainer}>
                <Image source={logo} resizeMode='contain' style={{width: '50%'}} />
                {/* <Image source={logo3} resizeMode='contain' style={{width: '50%'}} /> */}
            </View>
            <TextField setValue={setEmail} icon='md-mail' returnKeyType='next' name='email' placeholder='Email' />
            <TextField setValue={setPassword} icon='md-lock-closed' returnKeyType='done' name='password' placeholder='Password' />
            <View style={{marginTop: '15%'}} />
            <CustomeBtn name='SIGN IN' onPress={login} />
            {isLoading&&<ActivityIndicator size="large" color="red" />}
            <View style={{marginTop: '6%'}} />
            <SecondaryBtn name='Forgot Password?' />
            <SecondaryBtn name='Dont have an account?' onPress={signup} />

        </KeyboardAvoidingView>                                             
    </SafeAreaView>
  );
}
