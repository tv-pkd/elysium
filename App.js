/*
  Elysium Fields Forever © 2023 by The Volunteer PsyrKaosD (TV-PKD) is licensed under Attribution-NonCommercial-ShareAlike 4.0 International.
  To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-sa/4.0/
*/ 
import { 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native';

import config from './config.js';

import Maps from './components/Maps.js';

import RenderHtml from 'react-native-render-html';

import * as Location from "expo-location";

export default function App() {
  return(
    <View style={styles.container}>
      <View style={styles.search}>

      </View>
      <Maps config={config}/>
      <View style={styles.license}>
        {/* <Text>Elysium Fields Forever © 2023 by The Volunteer PsyrKaosD (TV-PKD) is licensed under CC BY-NC-SA 4.0 </Text> */}
      
        <RenderHtml
          source={{
            html: '<a property="dct:title" rel="cc:attributionURL" href="https://github.com/tv-pkd/elysium">Elysium Fields Forever</a>\
               by \
              <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.psyrkaosd.com/">The Volunteer PsyrKaosD (TV-PKD)</a> \
              is licensed under\
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">\
                  CC BY-NC-SA 4.0</a>'
          }}
        />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  license:{
    padding: 5,
    backgroundColor: "#f1f3f4",
    border: "1px solid #c2cfd5",
  },
  search: {
    // flex: 1,
    // flexGrow: 0,
  },
});