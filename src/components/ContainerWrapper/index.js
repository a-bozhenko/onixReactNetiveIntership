import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 5,
    marginTop: 10
  },
  scrollContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

const ContainerWrapper = function (props) {
  const { children } = props;
  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollContainer}>
        {children}
      </ScrollView>
    </View>
  );
};

ContainerWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ContainerWrapper;
