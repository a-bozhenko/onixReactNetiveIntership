import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
  },
  infoWrapper: {
    flex: 1,
    marginBottom: 20,
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

  buttonWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 50,
  },
  buttonIcon: {

  },
  buttonItemActive: {
    backgroundColor: '#c0c0c0'
  },
  listWrapper: {
  },

  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  itemName: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  sectionWrapper: {
    paddingVertical: 30,
    background: '#c0c0c0',
  },
  sectionName: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  sectionFooter: {
    paddingTop: 30,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
});
