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
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 15,
    flexDirection: 'column',
  },
  footerCompensation: {
    paddingBottom: 60
  }
});

const ContainerWrapper = function (props) {
  const { children, noScroll } = props;

  const WrapperComponent = noScroll ? View : ScrollView;

  return (
    <View style={styles.root}>
      <WrapperComponent style={[styles.scrollContainer, noScroll && styles.footerCompensation]}>
        {children}
      </WrapperComponent>
    </View>
  );
};

ContainerWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  noScroll: PropTypes.bool
};

ContainerWrapper.defaultProps = {
  noScroll: false
};

export default ContainerWrapper;
