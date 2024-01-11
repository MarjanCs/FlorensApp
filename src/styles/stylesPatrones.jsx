import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    Image:{
        width: 60, 
        height: 60,
        resizeMode: 'cover',
        marginRight: 10,
        padding:43,
    },
    anotherImage: {
        width: 40, 
        height: 40, 
        resizeMode: 'cover',
        position: 'absolute',
        top: '40%',  
        left: '47%', 
        transform: [{ translateX: -16.5 }, { translateY: -30.5 }],
        borderRadius: 10, 
    },
    row: {
        flexDirection: 'row',
        marginBottom: -5,
        justifyContent: 'left',
        left: 5,
        top: -15,
    },
    item: {
        backgroundColor: '#FFFFFFB3',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        borderColor: '#003F72',
        margin:5,
        
    },
    title: {
        fontSize: 15,
        color: '#003F72',
        fontWeight: 'bold',
        top: -10,
    },
    titleNumber:{
        fontSize: 13,
        color:"#FFFFFF",
        transform: [{ translateX: -2 }, { translateY: -22.5 }],
        fontWeight: 'bold',
    },
    textoBien: {
        color: '#003F72',
        fontSize: 19,
        textAlign: 'center',
        fontWeight: 'bold',
        padding:10
    },
    
    //estilos descripcion de patrones
    Contenedor:{
		marginRight:100,
		marginLeft:-80
	},
    containerDev: {
		backgroundColor: "#FFFFFF",
        alignItems: 'center',
		justifyContent: 'center',
		flex:1
	},
    anotherImageDev: {
        width: 50, 
        height: 50, 
        resizeMode: 'cover',
        position: 'absolute',
        top: '40%',  
        left: '48%', 
        transform: [{ translateX: -60.5 }, { translateY: -15.5 }],
        borderRadius: 10, 

    },
    txtArea: {
        color: '#003F72',
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold',
        marginLeft: 15,
        marginRight:10
    },
    colorTxtBtn: {
        color: '#003F72',
        fontSize: 20,
        textAlign: 'center',
        width: 200,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    colorBtn: {
        marginTop: 40,
        borderColor: '#EAAB00',
        backgroundColor: '#EAAB00',
        padding: 10,
        marginLeft: 90,
        borderRadius: 10,
        paddingLeft:40,
        paddingRight:40
    },
    colorTxtLogo: {
        color: '#003F72',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:20,
        left: 20,
    },
});

export default styles;