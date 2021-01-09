import { makeStyles } from '@material-ui/core/styles';
import image from '../Images/street-fashion-fashion-snapshot-jeans-footwear-shopping-1563129-pxhere.com.jpg';


export const useStylesMobile = makeStyles(theme => ({
    cartDiv: {
        height: "40vh",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover"
    },
    cartDivOverlay: {
        height: "-webkit-fill-available",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, .7)",
        alignItems: "center",
        justifyContent: "center",
    },
    cartTitle: {
        color: "white",
    },
    payPart: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    total: {
        alignSelf: "flex-end",
        marginRight: "9.5%"
    },
    payButton: {
        marginBottom: "15px",
        padding: "5px 20px",
        backgroundColor: "white",
        color: "black",
        boxShadow: "1px 7px 15px rgba(0, 0, 0, .5)",
        fontWeight: "bold",
        transition: "color 1s, backgroundColor 1s",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
        }
    },
    headList: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2%",
    },
    titles: {
        padding: "0px 44px",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        }
    },
    productTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    quantityTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    subtotalTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    removeTitle: {
        marginBottom: 0,
    },
    separator: {
        minWidth: "50px",
        
    }
}));

export const useStylesDesktop = makeStyles(theme => ({
    cartDiv: {
        height: "40vh",
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover"
    },
    cartDivOverlay: {
        height: "-webkit-fill-available",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, .7)",
        alignItems: "center",
        justifyContent: "center",
    },
    cartTitle: {
        color: "white",
    },
    payPart: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    total: {
        alignSelf: "flex-end",
        marginRight: "9.5%"
    },
    payButton: {
        marginBottom: "15px",
        padding: "5px 20px",
        backgroundColor: "white",
        color: "black",
        boxShadow: "1px 7px 15px rgba(0, 0, 0, .5)",
        fontWeight: "bold",
        transition: "color 1s, backgroundColor 1s",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
        }
    },
    headList: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1.3%",
    },
    titles: {
        display: "flex",
        alignContent: "center",
        padding: "0px 44px",
    },
    productTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    quantityTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    subtotalTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    removeTitle: {
        marginBottom: 0,
        textAlign: "center",
    }
}));