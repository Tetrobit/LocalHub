import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import {
  Star,
  MapPin,
  Phone,
  Clock,
  ChevronLeft,
  Globe,
  Mail,
  MessageCircle,
} from 'lucide-react-native';
import { BUSINESSES_BY_ID } from '../data/businesses';

export default function BusinessScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const business = BUSINESSES_BY_ID[id];

  if (!business) {
    return (
      <View style={styles.container}>
        <Text>Предприятие не найдено</Text>
      </View>
    );
  }

  const handleCall = () => {
    Linking.openURL(`tel:${business.phone}`);
  };

  const handleEmail = () => {
    if (business.email) {
      Linking.openURL(`mailto:${business.email}`);
    }
  };

  const handleWebsite = () => {
    if (business.website) {
      Linking.openURL(`https://${business.website}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ChevronLeft size={24} color="#0f172a" />
        </Pressable>
        <Text style={styles.headerTitle}>{business.name}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: business.image }} style={styles.image} />

        <View style={styles.infoSection}>
          <View style={styles.ratingContainer}>
            <Star size={20} color="#FFB800" fill="#FFB800" />
            <Text style={styles.rating}>{business.rating}</Text>
            <Text style={styles.reviewCount}>({business.reviewCount} отзывов)</Text>
          </View>

          <Text style={styles.category}>{business.category}</Text>

          {business.description && (
            <Text style={styles.description}>{business.description}</Text>
          )}

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <MapPin size={20} color="#64748b" />
              <Text style={styles.detailText}>{business.address}</Text>
            </View>
            <View style={styles.detailRow}>
              <Clock size={20} color="#64748b" />
              <Text style={styles.detailText}>{business.openHours}</Text>
            </View>
            <Pressable onPress={handleCall} style={styles.detailRow}>
              <Phone size={20} color="#64748b" />
              <Text style={[styles.detailText, styles.link]}>{business.phone}</Text>
            </Pressable>
            {business.website && (
              <Pressable onPress={handleWebsite} style={styles.detailRow}>
                <Globe size={20} color="#64748b" />
                <Text style={[styles.detailText, styles.link]}>{business.website}</Text>
              </Pressable>
            )}
            {business.email && (
              <Pressable onPress={handleEmail} style={styles.detailRow}>
                <Mail size={20} color="#64748b" />
                <Text style={[styles.detailText, styles.link]}>{business.email}</Text>
              </Pressable>
            )}
          </View>
        </View>

        {business.reviews && business.reviews.length > 0 && (
          <View style={styles.reviewsSection}>
            <Text style={styles.sectionTitle}>Отзывы</Text>
            {business.reviews.map(review => (
              <View key={review.id} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.reviewAuthor}>{review.author}</Text>
                  <View style={styles.reviewRating}>
                    <Star size={16} color="#FFB800" fill="#FFB800" />
                    <Text style={styles.reviewRatingText}>{review.rating}</Text>
                  </View>
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.messageButton}>
          <MessageCircle size={20} color="#ffffff" />
          <Text style={styles.messageButtonText}>Написать сообщение</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoSection: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginLeft: 4,
  },
  reviewCount: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 4,
  },
  category: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#0f172a',
    lineHeight: 20,
    marginBottom: 16,
  },
  detailsContainer: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 12,
  },
  link: {
    color: '#0891b2',
    textDecorationLine: 'underline',
  },
  reviewsSection: {
    backgroundColor: '#ffffff',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 16,
  },
  reviewCard: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  reviewRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewRatingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    marginLeft: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    color: '#0f172a',
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0891b2',
    paddingVertical: 12,
    borderRadius: 8,
  },
  messageButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
}); 