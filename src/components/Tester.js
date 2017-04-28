/**
 * Created by huangwx on 28/04/2017.
 */

import React, { Component } from 'react'
import {
  ListView,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native'
import InvertibleScrollView from 'react-native-invertible-scroll-view'

export default class InvertedScrollComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this._data = [];
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <ListView
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          dataSource={this.state.dataSource}
          renderHeader={this._renderHeader.bind(this)}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    );
  }

  _renderHeader() {
    return (
      <TouchableHighlight
        onPress={this._onPress.bind(this)}
        style={styles.button}>
        <Text>Add a row</Text>
      </TouchableHighlight>
    );
  }

  _renderRow(row) {
    return <Text key={row} style={styles.row}>{row}</Text>
  }

  _onPress() {
    this._data.push(`${new Date}`);
    var rows = this._data;
    // It's important to keep row IDs consistent to avoid extra rendering. You
    // may need to reverse the list of row IDs so the so that the inversion
    // will order the rows correctly.
    var rowIds = rows.map((row, index) => index).reverse();
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rows, rowIds),
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    padding: 4,
  },
})
