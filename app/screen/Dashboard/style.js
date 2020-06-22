import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#00cdac',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  formarea: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
  textname: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  inputForm: {
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    paddingVertical: Platform.OS === 'ios' ? 12 : 0,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  picker: {
    fontSize: 18,
    color: 'rgba(000, 000, 000,0.2)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 12,
  },
  listcontent: {
    flex: 1,
  },
  textHistory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 25,
    marginRight: 12,
  },
  rowCourier: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowHistory: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'white',
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    shadowColor: 'black',
    marginVertical: 6,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.3)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  textHapus: {
    fontSize: 14,
    color: 'red',
    marginBottom: 16,
  },
  contentHistory: {
    flex: 1,
    paddingBottom: 16,
  },
});
