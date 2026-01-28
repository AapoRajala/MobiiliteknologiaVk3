import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 28, }]}>
        Home Screen
      </Text>
      <Button
        textColor="black"
        onPress={() => navigation.navigate('Second')}
      >
        Go to Second Screen
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});