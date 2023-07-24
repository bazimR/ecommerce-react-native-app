import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index'

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'bold',
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: SIZES.xLarge,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    locationName: {
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: SIZES.medium,
        width: SIZES.medium,
        height: SIZES.medium,
        borderRadius: SIZES.medium / 2,
        alignItems: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        zIndex: 9999
    },
    cartText: {
        fontFamily: 'regular',
        fontWeight: "600",
        fontSize: SIZES.xSmall,
        color: COLORS.lightWhite,
        textAlign: 'center',
        marginTop:'auto'
    }
})

export default styles