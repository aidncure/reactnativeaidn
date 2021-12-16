import React, { Component, useState, useEffect } from 'react';
import {View, Text, Button, SafeAreaView,StatusBar, StyleSheet,TouchableOpacity,TextInput, Keyboard,TouchableWithoutFeedback} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Fonts, Colors, Sizes } from "../../constant/styles";
import { fetchUser, newUser, } from "../../apiServices";
// import firebase from '../../firebase';
import {firebase, auth, db, firestore} from '../../firebase';
// import db from '../../firebase';
   


// const userDataUrl = "https://aidnpro-7c2db-default-rtdb.firebaseio.com/newUsers.json"
// const db = firebase.firestore()

const UserDataEdit = () => {
    // const [fullName , setFullName] = useState([]);
    // const [gender , setGender] = useState([]);
    // const [age , setAge] = useState([]);
    // const [occupation , setOccupation] = useState([]);
    // const [from , setFrom] = useState([]);
    // const [isLoading , setLoading] = useState(true);
    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //  fetch(userDataUrl)
    //  .then((response)=>response.json())
    //  .then((json) => setUserData(json))
    //  .catch((error) => console.log(error))
    //  .finally(() => setLoading(false));
    // },[]);

    // if (userData !== ''){
    //   console.log('Not Logged in')
    // }else{
    //   console.log('Logged in')
    // }

    const [state , setState] = useState({
        name:'',
        gender:'',
        age:'',
        occupation:'',
        from:'',
        uid:' ',
    });
    const handleChangeText = (name, value) =>{
        setState({...state, [name]:value})
    }
    const userData = firebase.auth().currentUser;
    const db = firebase.firestore()
    const saveUsers = async () => {
        if (state.name === ''){
            alert('Please provide a name')
        }else{
           await db.collection('users' + userData.uid).add({
                name : state.name,
                gender: state.gender,
                age: state.age,
                occupation: state.occupation,
                from: state.from,
                uid:userData.uid,
            })
            alert("Saved")
        //    await firebase.db.collection('users').add({
        //         name : state.name,
        //         gender: state.gender,
        //         age: state.age,
        //         occupation: state.occupation,
        //         from: state.from
        //     })
        //     alert("Saved")
        }
        // console.log(state)
    }

    return(
    <SafeAreaView style={styles.mainContainer}>
    <StatusBar backgroundColor={Colors.dodgerBlue} />
      <View style={styles.backArrowAndSaveContainerStyle}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
        //   color={Colors.dodgerBlue}
          color="#fff"
          onPress={() => navigation.goBack()}
        />
      </View>
      <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss();}}
      >
      <View style={styles.nameContainer}>
          <TextInput        
            // placeholderTextColor= {Colors.dodgerBlue}
            placeholderTextColor= "#fff"
            placeholder='Full name'
            // value={fullName}
            onChangeText={(value) => handleChangeText('name', value)}
            />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss();}}
      >
      <View style={styles.emailContainer}>
          <TextInput        
            // placeholderTextColor= {Colors.dodgerBlue}
            placeholderTextColor= "#fff" 
            placeholder='Gender'
            // value={gender}
            // onChangeText={(text) => setGender(text)}
            onChangeText={(value) => handleChangeText('gender', value)}
            // autoCompleteType = {'email'}
            />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss();}}
      >
      <View style={styles.emailContainer}>
          <TextInput        
            // placeholderTextColor= {Colors.dodgerBlue}
            placeholderTextColor= "#fff" 
            placeholder='Age'
            // value={age}
            // onChangeText={(text) => setAge(text)}
            onChangeText={(value) => handleChangeText('age', value)}
            />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss();}}
      >
      <View style={styles.emailContainer}>
          <TextInput        
            // placeholderTextColor= {Colors.dodgerBlue}
            placeholderTextColor= "#fff" 
            placeholder='Occupation'
            // onChangeText={(text) => setOccupation(text)}
            // value={occupation}
            onChangeText={(value) => handleChangeText('occupation', value)}
            />
      </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
      onPress={()=>{Keyboard.dismiss();}}
      >
      <View style={styles.emailContainer}>
          <TextInput        
            // placeholderTextColor= {Colors.dodgerBlue}
            placeholderTextColor= "#fff" 
            placeholder='Where are you from?'
            // onChangeText={(text) => setFrom(text)}
            // value={from}
            onChangeText={(value) => handleChangeText('from', value)}
            />
      </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonMain}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={saveUsers}
      >
      <View>
        <View style={styles.buttonContainer}>
        <Text style={{ ...Fonts.white16Bold, color:'#000' }}>Let's Go</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
      <View style={styles.buttonMain}>
      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={fetchUser}
      >
      <View>
        <View style={styles.buttonContainer}>
        <Text style={{ ...Fonts.white16Bold, color:'#000' }}>Let's Change</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
    );
   
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:Colors.dodgerBlue
    },
    backArrowAndSaveContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: Sizes.fixPadding * 2.0,
    marginRight: Sizes.fixPadding,
    marginTop: Sizes.fixPadding + 15.0,
  },
  nameContainer:{
    color:'#fff',
    // borderBottomColor:Colors.dodgerBlue,
    paddingLeft:5,
    borderBottomColor:"#fff",
    marginLeft: Sizes.fixPadding * 5.0,
    marginRight: Sizes.fixPadding,
    marginTop:100,
    borderBottomWidth:1,
    width:"80%"
    
  },
  emailContainer:{
    color:'#fff',
    // borderBottomColor:Colors.dodgerBlue,
    paddingLeft:5,
    borderBottomColor:"#fff",
    marginLeft: Sizes.fixPadding * 5.0,
    marginRight: Sizes.fixPadding,
    marginTop:50,
    borderBottomWidth:1,
    width:"80%" 
  },
   buttonContainer:{
    paddingVertical: Sizes.fixPadding + 5.0,
    borderRadius: Sizes.fixPadding * 10.0,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: Sizes.fixPadding * 5.0,
    backgroundColor:Colors.bumbleYellow,
    width:102,
    // marginHorizontal:92
  },
  buttonMain:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:50,
  }
})
export default UserDataEdit;