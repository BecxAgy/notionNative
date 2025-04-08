import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    gap: 12,
    width: '100%',
  },

  title: {
    fontSize: 16,
 
    color: colors.gray[300],
    paddingLeft:20
  },
  content: {
    gap: 12,
    paddingHorizontal: 20
  }
});
