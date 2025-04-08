import { StyleSheet } from "react-native";
import { colors } from '@/styles/colors';

export const s = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 16,
    color: colors.gray[300],
    flex: 1,
  },
  listContainer: {
    backgroundColor: colors.gray[700],
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray[600],
  },
  icon: {
    color: colors.gray[300],
  },
});