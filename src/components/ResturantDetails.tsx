import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#FF5A1F';

const menuItems = [
  {
    id: '1',
    name: 'Margherita',
    desc: 'Fresh mozzarella, basil',
    price: '₹280',
    emoji: '🍕',
  },
  {
    id: '2',
    name: 'Pepperoni Blast',
    desc: 'Double pepperoni, chilli',
    price: '₹340',
    emoji: '🌶️',
  },
];

const RestaurantDetails = () => {
  const [tabs] = useState([
    'All',
    'Pizza',
    'Sides',
    'Drinks',
  ]);

  const [activeTab, setActiveTab] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >

        {/* Main Card */}
        <View style={styles.card}>

          {/* Banner */}
          <View style={styles.banner}>

            {/* Top Buttons */}
            <View style={styles.bannerTop}>
              <Pressable style={styles.iconButton}>
                <Text style={styles.iconText}>←</Text>
              </Pressable>

              <Pressable style={styles.iconButton}>
                <Text style={styles.iconText}>♡</Text>
              </Pressable>
            </View>

            {/* Food Emoji */}
            <Text style={styles.foodEmoji}>
              🍕
            </Text>
          </View>

          {/* Content */}
          <View style={styles.content}>

            {/* Restaurant Name */}
            <Text style={styles.restaurantName}>
              Pizza Palace
            </Text>

            {/* Stats */}
            <View style={styles.statsRow}>

              <View style={styles.statItem}>
                <Text style={styles.statText}>
                  ⭐ 4.8 (240)
                </Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statText}>
                  🕒 25-35 min
                </Text>
              </View>

              <View style={styles.statItem}>
                <Text style={styles.statText}>
                  🚴 Free
                </Text>
              </View>

            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
              {tabs.map((tab, index) => {
                const active = activeTab === tab;

                return (
                  <Pressable
                    key={index}
                    onPress={() => setActiveTab(tab)}
                    style={[
                      styles.tabButton,
                      active && styles.activeTab,
                    ]}
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

            {/* Section Title */}
            <Text style={styles.sectionTitle}>
              🔥 Most Popular
            </Text>

            {/* Menu List */}
            {menuItems.map((item) => (
              <View key={item.id} style={styles.menuCard}>

                {/* Left */}
                <View style={styles.menuLeft}>

                  <View style={styles.foodImage}>
                    <Text style={styles.menuEmoji}>
                      {item.emoji}
                    </Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Text style={styles.menuName}>
                      {item.name}
                    </Text>

                    <Text style={styles.menuDesc}>
                      {item.desc}
                    </Text>
                  </View>

                </View>

                {/* Right */}
                <View style={styles.menuRight}>
                  <Text style={styles.price}>
                    {item.price}
                  </Text>

                  <Pressable style={styles.addButton}>
                    <Text style={styles.addText}>
                      +
                    </Text>
                  </Pressable>
                </View>

              </View>
            ))}

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
  },

  card: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    overflow: 'hidden',
  },

  banner: {
    height: 240,
    backgroundColor: PRIMARY,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bannerTop: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  foodEmoji: {
    fontSize: 90,
    marginBottom: 10,
  },

  content: {
    padding: 20,
  },

  restaurantName: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  statItem: {
    backgroundColor: '#343434',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },

  statText: {
    color: '#f1f1f1',
    fontSize: 13,
    fontWeight: '600',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 24,
    gap: 10,
    flexWrap: 'wrap',
  },

  tabButton: {
    backgroundColor: '#1d1d1d',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
  },

  activeTab: {
    backgroundColor: PRIMARY,
  },

  tabText: {
    color: '#fff',
    fontWeight: '700',
  },

  activeTabText: {
    color: '#fff',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 28,
    marginBottom: 16,
  },

  menuCard: {
    backgroundColor: '#242424',
    borderRadius: 22,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  foodImage: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor: '#f7ece5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  menuEmoji: {
    fontSize: 34,
  },

  menuName: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '800',
  },

  menuDesc: {
    color: '#b3b3b3',
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },

  menuRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 70,
  },

  price: {
    color: PRIMARY,
    fontSize: 22,
    fontWeight: '800',
  },

  addButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
});