import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
  },
  descText: {
    fontSize: 20,
    color: 'white',
  },
  mulaiButton: {
    paddingVertical: 14,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputname: {
    backgroundColor: 'rgba(255, 255, 255,0.6)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '60%',
    borderRadius: 8,
    fontSize: 18,
  },
});
