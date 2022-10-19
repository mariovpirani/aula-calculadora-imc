import { 
  Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from "react-native";

import Subheader from "./Subheader.component";
import CadastroForm from "./Cadastro.form";
import Footer from "./Footer.component";
import React from "react";

export default function Login(props: any) {
    const { navigation } = props;
  
    return <View style={styles.container}>
      <View style={styles.mainContent}>
        <Subheader />
        <CadastroForm navigation={props.navigation}/>
      </View>
        <Footer />
    </View>
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Dimensions.get('screen').height * 0.05
    },
    mainContent: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });