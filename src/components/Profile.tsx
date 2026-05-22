import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const PRIMARY = '#FF5A1F';

const Profile = () => {
  const navigation = useNavigation<any>();

  return (
    <LinearGradient
      colors={['#ff5a1f', '#111', '#111']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>

            <View>
              <Text style={styles.name}>User</Text>
              <Text style={styles.email}>user@example.com</Text>
            </View>
          </View>

          {/* MENU */}
          <View style={styles.menuContainer}>
            
            <MenuItem
              icon="🛒"
              title="My Orders"
              onPress={() => {
                // console.log('clicked My Orders');
                navigation.navigate('MyOrders');
              }}
            />

            <MenuItem
              icon="📍"
              title="Saved Addresses"
              // onPress={() => console.log('addresses')}
            />

            <MenuItem
              icon="⚙️"
              title="Settings"
              // onPress={() => console.log('settings')}
            />

            <MenuItem
              icon="❓"
              title="Help & Support"
              // onPress={() => console.log('help')}
            />

          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const MenuItem = ({ icon, title, onPress }: any) => {
  return (
    <Pressable onPress={onPress} style={styles.menuItem}>
      <View style={styles.left}>
        <View style={styles.iconBox}>
          <Text style={styles.icon}>{icon}</Text>
        </View>

        <Text style={styles.menuText}>{title}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    backgroundColor: PRIMARY,
    borderRadius: 30,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 10,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 28,
  },

  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },

  email: {
    color: '#ffe3d6',
    marginTop: 4,
    fontSize: 13,
    fontWeight: '500',
  },

  menuContainer: {
    marginTop: 28,
    gap: 14,
  },

  menuItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 18,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 18,
  },

  menuText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  arrow: {
    color: '#777',
    fontSize: 22,
    fontWeight: '700',
  },
});