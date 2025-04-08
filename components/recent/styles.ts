import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    height: 134,
    width: 134,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.gray[600],
  },
  content: {
    padding: 12,
  },
  icon: {
    position: 'absolute',
    top: -17,
    left: 7,
  },
  title: {
    fontSize: 16,
    color: colors.gray[100],
    marginTop: 10,
  },
});