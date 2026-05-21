import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import {StackParamListType} from '../types/index'


  type OnboardingScreenNavigationProp = StackNavigationProp<StackParamListType, 'Onboarding'>;


const Onboarding = () => {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  return (
    <LinearGradient
      colors={["#FF6B2C", "#FF4500", "#8B2E00", "#2B2B2B"]}
      locations={[0, 0.5, 0.8, 1]}
      style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Text style={{fontSize: 120}}>🍕</Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.hedingText}>Delicious Food</Text>
          <Text style={styles.hedingText}>Delivered Fast🚀</Text>
          {/* <View> */}
            <Text style={[styles.para, {marginTop: 30}]}>Order from your favourite </Text>
            <Text style={styles.para}>restaurants and track delivery</Text>
            <Text style={styles.para}>in real-time.</Text>
          {/* </View> */}
        </View>
        <Pressable style={styles.btn} onPress={()=> navigation.navigate("Login")}>
          <Text style={styles.btnText}>Get Started</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 14
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF8051",
    paddingVertical: 40,
    borderRadius: 200,
    borderColor: "#FF723F",
    borderWidth: 25,
    marginHorizontal: 25
  },
  headingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hedingText: {
    fontSize: 44,
    fontWeight: "bold",
    color: "white"
  },
  para: {
    fontSize: 24,
    color: "aliceblue"
  },
  btn: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 50,
    marginTop: 80,
    margin: 30
  },
  btnText:{
    fontSize: 24,
    fontWeight: "900",
    color: "#FF4500",
    textAlign: "center"
  }
})