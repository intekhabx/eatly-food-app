import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  emoji: string;
};

const PRIMARY = '#FF5A1F';

const cartItems = [
  {
    id: '1',
    name: 'Margherita',
    price: 280,
    quantity: 1,
    emoji: '🍕',
  },
  {
    id: '2',
    name: 'Pepperoni Blast',
    price: 340,
    quantity: 2,
    emoji: '🌶️',
  },
  {
    id: '3',
    name: 'Garlic Bread',
    price: 180,
    quantity: 1,
    emoji: '🍞',
  },
];

const Cart = () => {
  const [cart, setCart] = useState(cartItems);

  const increaseQty = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updated);
  };

  const decreaseQty = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updated);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const taxes = 54;
  const delivery = 0;

  const total = subtotal + taxes + delivery;

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
            paddingBottom: 140,
          }}
        >
          {/* Header */}
          <View style={styles.header}>
            {/* <Pressable style={styles.backButton}>
              <Text style={styles.backIcon}>←</Text>
            </Pressable> */}

            <View style={{ flex: 1 }}>
              <Text style={styles.heading}>
                Your{' '}Cart
              </Text>
            </View>

            <View>
              <Text style={styles.restaurantName}>
                Pizza{'\n'}Palace
              </Text>
            </View>
          </View>

          {/* Cart Items */}
          {cart.map((item) => (
            <View key={item.id} style={styles.card}>
              
              {/* Left */}
              <View style={styles.imageBox}>
                <Text style={styles.foodEmoji}>
                  {item.emoji}
                </Text>
              </View>

              {/* Middle */}
              <View style={styles.cardContent}>
                <Text style={styles.foodName}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  ₹{item.price}
                </Text>
              </View>

              {/* Right */}
              <View style={styles.quantityContainer}>
                <Pressable
                  style={styles.qtyButton}
                  onPress={() =>
                    decreaseQty(item.id)
                  }
                >
                  <Text style={styles.qtyText}>
                    −
                  </Text>
                </Pressable>

                <Text style={styles.quantity}>
                  {item.quantity}
                </Text>

                <Pressable
                  style={styles.qtyButton}
                  onPress={() =>
                    increaseQty(item.id)
                  }
                >
                  <Text style={styles.qtyText}>
                    +
                  </Text>
                </Pressable>
              </View>
            </View>
          ))}

          {/* Bill Summary */}
          <View style={styles.summaryCard}>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Subtotal
              </Text>

              <Text style={styles.summaryValue}>
                ₹{subtotal}
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Delivery fee
              </Text>

              <Text
                style={[
                  styles.summaryValue,
                  {
                    color: '#6BE675',
                  },
                ]}
              >
                Free
              </Text>
            </View>

            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>
                Taxes & fees
              </Text>

              <Text style={styles.summaryValue}>
                ₹{taxes}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.summaryRow}>
              <Text style={styles.totalLabel}>
                Total
              </Text>

              <Text style={styles.totalValue}>
                ₹{total}
              </Text>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Button */}
        <View style={styles.bottomContainer}>
          <Pressable style={styles.orderButton}>
            <Text style={styles.orderButtonText}>
              Place Order · ₹{total}
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  backButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#2d2d2d',
  },

  backIcon: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  heading: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
    lineHeight: 38,
  },

  restaurantName: {
    color: '#9a9a9a',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },

  imageBox: {
    width: 78,
    height: 78,
    borderRadius: 18,
    backgroundColor: '#f8ece7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  foodEmoji: {
    fontSize: 36,
  },

  cardContent: {
    flex: 1,
  },

  foodName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  price: {
    color: PRIMARY,
    marginTop: 6,
    fontSize: 15,
    fontWeight: '800',
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  qtyButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: '#242424',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#343434',
  },

  qtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  quantity: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    minWidth: 20,
    textAlign: 'center',
  },

  summaryCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 28,
    padding: 22,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  summaryLabel: {
    color: '#b0b0b0',
    fontSize: 15,
    fontWeight: '600',
  },

  summaryValue: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },

  divider: {
    height: 1,
    backgroundColor: '#2a2a2a',
    marginBottom: 18,
  },

  totalLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },

  totalValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },

  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  orderButton: {
    backgroundColor: PRIMARY,
    height: 62,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800',
  },
});