import {BeeIcon} from 'assets/index';
import {Spacing} from 'assets/spacing';
import {Colors} from 'constants/color';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export function Home() {
  return (
    <ScrollView style={style.container}>
      <View style={style.homeContainer}>
        <View style={style.cardTotal}>
          <BeeIcon width={Spacing.width30} height={Spacing.width30} />
        </View>
      </View>
    </ScrollView>
  );
}
const style = StyleSheet.create({
  cardTotal: {
    width: '100%',
    height: Spacing.height200,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  container: {flex: 1, backgroundColor: Colors.background},
  homeContainer: {
    padding: Spacing.width15,

    flex: 1,
  },
});
