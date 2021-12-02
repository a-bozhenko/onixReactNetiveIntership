import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  text: {
    fontSize: 14,
    color: '#333'
  },
  safeAreaViewRoot: {
  },
  infoWrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoText: {
    flex: 4,
  },
  infoAvatarWrapper: {
    flex: 2,
  },
  infoAvatarImageWrapper: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    flex: 1
  },
  infoAvatarImage: {
    height: '100%',
    maxWidth: '100%',
    minHeight: 100
  },
  infoAvatarTitle: {
    fontSize: 14,
    textAlign: 'center'
  },
  infoAvatarChangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  infoAvatarChangeText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 10,
  }
});
