import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const UselessTextInput = (prop) => {
  return <TextInput {...prop} editable maxLength={1000} />;
};

const Write = () => {
  const [value, onChangeText] = React.useState('내용을 입력하세요');

  return (
    <ScrollView
      contentContainerStyle={{
        marginTop: 20,
        flexGrow: 1,
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <TextInput placeholder="제목" style={styles.title} />
        <UselessTextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.subtitle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 50,
  },
  title: {
    fontSize: 26,
    color: '#222',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c4c4',
  },
  subtitle: {
    fontSize: 18,
    color: '#222',
  },
});

export default Write;
