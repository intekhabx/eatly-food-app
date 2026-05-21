import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const PRIMARY = '#FF5A1F';

const restaurantArray = [
  {
    id: '1',
    name: 'Pizza Palace',
    category: 'Italian',
    timeTaken: '25-35 min',
    emoji: '🍕',
    tags: ['Free delivery', 'Popular'],
  },
  {
    id: '2',
    name: 'Sushi World',
    category: 'Japanese',
    timeTaken: '30-45 min',
    emoji: '🍣',
    tags: ['New', 'Trending'],
  },
];

const Home = () => {
  const [tags] = useState(['All', 'Pizza', 'Sushi']);
  const [selectedTag, setSelectedTag] = useState('All');

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
        
        {/* Location */}
        <View style={styles.locationContainer}>
          <Text style={styles.dot}>●</Text>

          <Text style={styles.locationText}>
            Kolkata, India
          </Text>
        </View>

        {/* Heading */}
        <Text style={styles.heading}>
          What are you{'\n'}craving? 🍽️
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>

          <TextInput
            placeholder="Search restaurants..."
            placeholderTextColor="#8e8e8e"
            style={styles.searchInput}
          />
        </View>

        {/* Tags */}
        <View style={styles.tagsContainer}>
          {tags.map((tag, index) => {
            const active = selectedTag === tag;

            return (
              <Pressable
                key={index}
                style={[
                  styles.tagButton,
                  active && styles.activeTag,
                ]}
                onPress={() => setSelectedTag(tag)}
              >
                <Text
                  style={[
                    styles.tagText,
                    active && styles.activeTagText,
                  ]}
                >
                  {tag === 'Pizza'
                    ? '🍕 Pizza'
                    : tag === 'Sushi'
                    ? '🍣 Sushi'
                    : 'All'}
                </Text>
              </Pressable>
            );
          })}
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>
          Featured Restaurants
        </Text>

        {/* Restaurant Cards */}
        {restaurantArray.map((rest) => (
          <View key={rest.id} style={styles.card}>
            
            {/* Left Emoji Box */}
            <View style={styles.imageBox}>
              <Text style={styles.foodEmoji}>
                {rest.emoji}
              </Text>
            </View>

            {/* Right Content */}
            <View style={styles.cardContent}>
              <Text style={styles.restaurantName}>
                {rest.name}
              </Text>

              <Text style={styles.restaurantInfo}>
                {rest.category} • {rest.timeTaken}
              </Text>

              {/* Tags */}
              <View style={styles.cardTags}>
                {rest.tags.map((tag, index) => (
                  <View key={index} style={styles.smallTag}>
                    <Text style={styles.smallTagText}>
                      {tag}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  dot: {
    color: "lightgreen",
    fontSize: 18,
    marginRight: 6,
  },

  locationText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  heading: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 12,
    lineHeight: 42,
  },

  searchContainer: {
    marginTop: 25,
    height: 55,
    backgroundColor: '#1f1f1f',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },

  tagsContainer: {
    flexDirection: 'row',
    marginTop: 22,
    gap: 12,
  },

  tagButton: {
    backgroundColor: '#1f1f1f',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 30,
  },

  activeTag: {
    backgroundColor: PRIMARY,
  },

  tagText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  activeTagText: {
    color: '#fff',
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 30,
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 24,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  imageBox: {
    width: 85,
    height: 85,
    borderRadius: 18,
    backgroundColor: '#f8ece7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },

  foodEmoji: {
    fontSize: 42,
  },

  cardContent: {
    flex: 1,
  },

  restaurantName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },

  restaurantInfo: {
    color: '#a1a1a1',
    marginTop: 4,
    fontSize: 14,
  },

  cardTags: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10,
    flexWrap: 'wrap',
  },

  smallTag: {
    backgroundColor: '#242424',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  smallTagText: {
    color: '#f4c96b',
    fontSize: 12,
    fontWeight: '700',
  },
});