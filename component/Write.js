import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, Colors } from 'react-native-paper';

const UselessTextInput = (prop) => {
  return <TextInput {...prop} editable maxLength={1000} />;
};

const Write = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <View>
          <TextInput placeholder="제목" style={styles.title} />
          <UselessTextInput
            placeholder="내용을 입력하세요"
            multiline
            numberOfLines={4}
            style={styles.subtitle}
          />
        </View>
        <View>
          <IconButton
            icon="check"
            size={30}
            color="#28bd8b"
            onPress={() => alert('Complete')}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#222',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  subtitle: {
    fontSize: 16,
    color: '#222',
  },
});

export default Write;
