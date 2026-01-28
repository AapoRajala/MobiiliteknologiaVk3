import React from 'react';
import { Appbar } from 'react-native-paper';
import { StackHeaderProps } from '@react-navigation/stack';

const navigationIcon1 = 'arrow-right';
const navigationIcon2 = 'arrow-left';

export default function CustomAppBar({ navigation, back }: StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? (
        <Appbar.Action
          icon={navigationIcon2}
          onPress={() => navigation.goBack()}
        />
      ) : null}

      <Appbar.Content title="Content" />

      {!back ? (
        <Appbar.Action
          icon={navigationIcon1}
          onPress={() => (navigation as any).navigate('Second')}
        />
      ) : null}
    </Appbar.Header>
  );
}