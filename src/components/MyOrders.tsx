import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const PRIMARY = '#FF5A1F';

const orders = [
  {
    id: '1',
    name: 'Pizza Palace',
    items: 'Margherita, Pepperoni x 2',
    price: '₹1,134',
    time: '12 min away',
    status: 'On the way',
    emoji: '🍕',
  },
];

const MyOrders = () => {
  const [selectedTab, setSelectedTab] = useState('Active');

  const tabs = ['Active', 'Past', 'Cancelled'];

  return (
    <LinearGradient
      colors={['#ff5a1f', '#111', '#111']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* Heading */}
          <Text style={styles.heading}>My Orders 📋</Text>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            {tabs.map((tab) => {
              const active = selectedTab === tab;

              return (
                <Pressable
                  key={tab}
                  style={[
                    styles.tabButton,
                    active && styles.activeTab,
                  ]}
                  onPress={() => setSelectedTab(tab)}
                >
                  <Text
                    style={[
                      styles.tabText,
                      active && styles.activeTabText,
                    ]}
                  >
                    {tab}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Order Card */}
          {orders.map((order) => (
            <View key={order.id} style={styles.card}>
              <View style={styles.topRow}>
                <View style={styles.leftSection}>
                  <View style={styles.imageBox}>
                    <Text style={styles.emoji}>{order.emoji}</Text>
                  </View>

                  <View style={{ marginLeft: 12 }}>
                    <Text style={styles.restaurantName}>
                      Pizza{'\n'}Palace
                    </Text>

                    <Text style={styles.orderItems}>
                      Margherita,{'\n'}Pepperoni x 2
                    </Text>
                  </View>
                </View>

                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>
                    On{'\n'}the way
                  </Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.bottomRow}>
                <Text style={styles.priceText}>
                  ₹1,134 · 12 min away
                </Text>

                <Pressable>
                  <Text style={styles.trackText}>
                    Track order →
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MyOrders;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },

  heading: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
    marginTop: 10,
  },

  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1d1d1d',
    alignSelf: 'flex-start',
    borderRadius: 14,
    padding: 4,
    marginTop: 20,
  },

  tabButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  activeTab: {
    backgroundColor: '#2a2a2a',
  },

  tabText: {
    color: '#a1a1a1',
    fontWeight: '700',
    fontSize: 13,
  },

  activeTabText: {
    color: '#fff',
  },

  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    padding: 18,
    marginTop: 24,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftSection: {
    flexDirection: 'row',
    flex: 1,
  },

  imageBox: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 34,
  },

  restaurantName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 24,
  },

  orderItems: {
    color: '#9d9d9d',
    marginTop: 6,
    lineHeight: 18,
    fontSize: 13,
  },

  statusBadge: {
    backgroundColor: '#f7e7df',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },

  statusText: {
    color: PRIMARY,
    fontWeight: '800',
    fontSize: 13,
    textAlign: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: '#2d2d2d',
    marginVertical: 18,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },

  trackText: {
    color: PRIMARY,
    fontSize: 14,
    fontWeight: '800',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 18,
    left: 20,
    right: 20,
    height: 74,
    backgroundColor: '#1c1c1c',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#2c2c2c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 6,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 20,
    opacity: 0.7,
  },

  navText: {
    color: '#8f8f8f',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },

  activeNavIcon: {
    fontSize: 20,
  },

  activeNavText: {
    color: PRIMARY,
    fontSize: 12,
    marginTop: 4,
    fontWeight: '700',
  },

  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: PRIMARY,
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
  },
});