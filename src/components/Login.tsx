import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import {StackParamListType} from '../types/index'


type LoginScreenNavigationProp = StackNavigationProp<StackParamListType, 'Login'>;

const PRIMARY = '#FF4500';

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>()

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          
          {/* Top Section */}
          <View style={styles.topContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoEmoji}>🍔</Text>
            </View>

            <Text style={styles.appName}>Eatly</Text>
          </View>

          {/* Bottom Section */}
          <View style={styles.bottomContainer}>
            <Text style={styles.welcomeText}>
              Welcome back 👋
            </Text>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email address</Text>

              <TextInput
                placeholder="you@email.com"
                placeholderTextColor="#8f8f8f"
                style={styles.input}
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#8f8f8f"
                secureTextEntry
                style={styles.input}
              />
            </View>

            {/* Button */}
            <Pressable style={styles.button} onPress={()=> navigation.navigate("MainTabs")} >
              <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Don't have an account?
              </Text>

              <Pressable onPress={()=> navigation.navigate("Signup")}>
                <Text style={styles.signupText}>
                  {' '}Sign up
                </Text>
              </Pressable>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
  },

  topContainer: {
    height: 300,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoBox: {
    width: 78,
    height: 78,
    borderRadius: 22,
    backgroundColor: '#ff7a4d',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  logoEmoji: {
    fontSize: 34,
  },

  appName: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
  },

  bottomContainer: {
    flex: 1,
    backgroundColor: '#232323',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 40,
    marginTop: -20,
  },

  welcomeText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    marginBottom: 30,
  },

  inputContainer: {
    marginBottom: 22,
  },

  label: {
    color: '#cfcfcf',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '600',
  },

  input: {
    height: 58,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 14,
    paddingHorizontal: 16,
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#2c2c2c',
  },

  button: {
    height: 58,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  footerText: {
    color: '#b5b5b5',
    fontSize: 15,
  },

  signupText: {
    color: PRIMARY,
    fontSize: 15,
    fontWeight: '700',
  },
});