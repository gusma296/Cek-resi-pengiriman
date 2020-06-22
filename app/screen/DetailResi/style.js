import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#00cdac',
  },
  flex: {
    flex: 1,
    paddingHorizontal: 12,
  },
  backButton: {
    height: 53,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#00cdac',
  },
  textBack: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    // padding: 16,
  },
  imageCourier: {
    width: 70,
    height: 60,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 16,
  },
  divider: {
    width: 1,
    backgroundColor: '#abdbd4',
    height: '100%',
    marginTop: -1,
  },
  viewDivider: {
    alignItems: 'center',
    marginRight: 8,
  },
  textDesc: {
    fontSize: 16,
  },
  textDate: {
    fontSize: 14,
  },
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      height: 0.5,
      width: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 24,
    marginHorizontal: 16,
    marginTop: 16,
  },
  imageLine: {
    width: 85,
    height: 85,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCourir: {
    fontSize: 18,
    marginLeft: 12,
    lineHeight: 24,
    marginVertical: 2,
  },
  textResi: {
    fontSize: 18,
    marginLeft: 12,
    lineHeight: 24,
    marginVertical: 2,
  },
  date: {
    width: 100,
    alignItems: 'flex-end',
    marginRight: 8,
  },
  rowText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
});
