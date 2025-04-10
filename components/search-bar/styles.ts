import { StyleSheet } from 'react-native';
import { colors } from '@/styles/colors';

export const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 14,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  searchInputContainer: {
    backgroundColor: colors.gray[600],
    padding: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
  },
  searchInput: {
    width: '100%',
    color: colors.gray[300],
    paddingLeft: 10,
  },
  filterButton: {
    backgroundColor: colors.gray[600],
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontWeight: '400',
    color: colors.blue[500],
  },
});