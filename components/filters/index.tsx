import React from 'react';
import { View } from 'react-native';

import OrderFilter from '@/components/order-filter';
import { styles } from './styles';

export default function Filters() {
  return (
    <View style={styles.filtersContainer}>
      <OrderFilter />
    </View>
  );
}