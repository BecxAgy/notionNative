import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: colors.gray[300],
    flex: 1,
  },
  icon: {
    color: colors.gray[300],
  },
});
