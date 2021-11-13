import React from 'react';
import {
  View, Text,
} from 'react-native';
import styles from './styles';
import {
  ContainerWrapper, Header, Footer, TextEditor
} from '../../components';

const MainScreen = function () {
  return (
    <View
      style={styles.root}
    >
      <Header />

      <ContainerWrapper>

        <View style={styles.infoWrapper}>
          <Text style={styles.textTitle}>Profile:</Text>
          <Text style={styles.text}>Name: Andrey</Text>
          <Text style={styles.text}>Surname: Bozhenko</Text>
          <Text style={styles.text}>Age: 30</Text>
        </View>

        <TextEditor />

      </ContainerWrapper>
      <Footer />
    </View>
  );
};

export default MainScreen;
