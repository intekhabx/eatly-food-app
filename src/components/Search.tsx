import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const PRIMARY = '#FF5A1F';

const cuisines = [
  {
    id: '1',
    name: 'Italian',
    emoji: '🍕',
    color: '#2A241F',
  },
  {
    id: '2',
    name: 'Japanese',
    emoji: '🍣',
    color: '#1F2624',
  },
  {
    id: '3',
    name: 'Burgers',
    emoji: '🍔',
    color: '#2B281F',
  },
  {
    id: '4',
    name: 'Chinese',
    emoji: '🍜',
    color: '#23232B',
  },
  {
    id: '5',
    name: 'Healthy',
    emoji: '🥗',
    color: '#1F2A26',
  },
  {
    id: '6',
    name: 'Mexican',
    emoji: '🌮',
    color: '#2A221F',
  },
];

const Search = () => {
  const [search, setSearch] = useState('');

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
          contentContainerStyle={{
            paddingBottom: 120,
          }}
        >
          {/* Heading */}
          <Text style={styles.heading}>
            Explore{' '}
            <Text style={{ color: PRIMARY }}>
              🔎
            </Text>
          </Text>

          {/* Search */}
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>
              🔍
            </Text>

            <TextInput
              placeholder="Restaurants, cuisines..."
              placeholderTextColor="#7d7d7d"
              value={search}
              onChangeText={setSearch}
              style={styles.searchInput}
            />
          </View>

          {/* Section */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Browse by Cuisine
            </Text>

            <Text style={styles.sectionSub}>
              Find your favorite food
            </Text>
          </View>

          {/* Cuisine Grid */}
          <View style={styles.grid}>
            {cuisines.map((item) => (
              <Pressable
                key={item.id}
                style={[
                  styles.cuisineCard,
                  {
                    backgroundColor:
                      item.color,
                  },
                ]}
              >
                {/* Glow */}
                <View
                  style={styles.glowCircle}
                />

                {/* Emoji */}
                <View
                  style={styles.emojiContainer}
                >
                  <Text style={styles.emoji}>
                    {item.emoji}
                  </Text>
                </View>

                {/* Name */}
                <Text style={styles.cuisineName}>
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  heading: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
    marginTop: 10,
  },

  searchContainer: {
    marginTop: 24,
    height: 58,
    backgroundColor: '#1d1d1d',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#2d2d2d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },

  sectionHeader: {
    marginTop: 34,
    marginBottom: 22,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },

  sectionSub: {
    color: '#7b7b7b',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '500',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  cuisineCard: {
    width: '48%',
    height: 145,
    borderRadius: 28,
    padding: 18,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2b2b2b',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },

  glowCircle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 999,
    backgroundColor:
      'rgba(255,255,255,0.04)',
    top: -30,
    right: -20,
  },

  emojiContainer: {
    width: 58,
    height: 58,
    borderRadius: 18,
    backgroundColor:
      'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emoji: {
    fontSize: 30,
  },

  cuisineName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 20,
  },
});