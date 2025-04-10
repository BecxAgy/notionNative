import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: colors.gray[700],
    borderRadius: 12,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: colors.gray[100],
    fontWeight: '500',
    flex: 1,
    
  },
  icon: {
    color: colors.gray[100],
  },
  description: {
       fontSize: 14,
    color: colors.gray[300],
   
  }
});
