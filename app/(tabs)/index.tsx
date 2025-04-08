
import Header from '@/components/header';
import PageList from '@/components/page-list';
import RecentList from '@/components/recent-list';

import { DATA } from '@/utils/data';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Tab() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingTop: 30,
        paddingBottom: 100
      }}>
        <RecentList data={DATA.RECENT}/>
        <PageList data={DATA.PAGES}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
    
  },
});
