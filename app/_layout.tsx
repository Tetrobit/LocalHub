import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { AuthProvider } from '@/hooks/useAuth';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="account" options={{ headerShown: false }} />
        <Stack.Screen name="business/[id]" options={{ headerShown: false, presentation: 'modal' }} />
        <Stack.Screen name="map" options={{ headerShown: false }} />
        <Stack.Screen name="recycling/[id]" options={{ headerShown: false }} />
      {/* <Tabs.Screen
        name="map"
        options={{
          title: 'Карта',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
          headerShown: false,
        }}
      /> */}
      </Stack>
      <StatusBar style="auto" />
    </AuthProvider>
  );
}