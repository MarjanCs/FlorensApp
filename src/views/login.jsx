import react,  {useContext, useState,useEffect} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import {ModalPicker} from "../../Componets/ModelPicker"
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styles/styles';
const Login = ({route}) => {
    const navigation = useNavigation();
    //const styles = style();
    const [chooseData, setchoosedata] = useState("Idioma");
    const [isModalVisible, setisModalVisible] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, login,checkUserAuthentication} = useContext(AuthContext);
    useEffect(() => {
		checkUserAuthentication();
	}, []);
    const changeModalVisibility = (bool) =>{
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchoosedata(option)
    }
  	return (
        <View style={styles.container}>
            <Spinner />
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                    <Image
                        source={require('../../img/UTPL.png')}
                        style={{ width: 120, height: 50 }}
                    />
                    <Image
                        source={require('../../img/logo.png')}
                        style={{ width: 50, height: 60 }}
                    />
                </View>
                <Image style={styles.image}
                    source={require('../../img/user.png')}></Image>
                <Text style={styles.textoBien} >Bienvenido de nuevo</Text>
                <Text style={styles.TextoIngr} >Ingresa para continuar</Text>
                <View style={styles.txtInput}>
                    <View style={styles.IconText}>
                        
                        <Text style={styles.TextoUsuario} >Usuario</Text>
                    </View>
                    <TextInput  
                        value={username}
                        placeholder="Ingrese su Usuario"
                        onChangeText={text => setUsername(text)}
                        />
                </View>
                <View style={styles.txtInput}>
                    <View style={styles.IconText}>
                        
                        <Text style={styles.TextoUsuario} >Contraseña</Text>
                    </View>
                    <TextInput secureTextEntry={true} 
                        value={password}
                        placeholder="Ingrese su contraseña"
                        onChangeText={text => setPassword(text)}
                        />
                </View>
                <TouchableOpacity onPress={()=>{login(username, password)}}
                    style={styles.colorBtn}>
                <Text style={styles.colorTxtBtn}>Ingresar</Text>
                </TouchableOpacity>
                <Text> </Text>
                <View style={styles.IconText}>
                    <Text style={{right: -22,}}>No tienes cuenta,</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                        <Text style={styles.colorTxtBtnRegistro}>Crea una cuenta nueva</Text>
                    </TouchableOpacity>
                </View>
          
          
          <TouchableOpacity style={styles.btnStar} 
                onPress = {() => changeModalVisibility(true)} >
                <Text style={styles.textItem}>
                    {chooseData}
                </Text>
            </TouchableOpacity>
            <Modal
                transparent = {true}
                animationType = "fade"
                visible = {isModalVisible}
                nRequestClose={()=> changeModalVisibility(false)}
            >
            <ModalPicker
                changeModalVisibility={changeModalVisibility}
                setData = {setData}
            />
            </Modal> 
            </View>
        </View>
    )
}


export default Login;
