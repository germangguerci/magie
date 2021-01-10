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
        alignItems: "center",
        margin: "10px 0",
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
    },
}));

export const useStylesCartItem = makeStyles(theme => ({
    imageItem: {
        width: "70%",
        minWidth: "60px",
    },
    productName: {
        display: "flex",
        alignSelf: "center",
        height: "fit-content",
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    removeButtonDiv: {
        display: "flex",
        alignSelf: "center",
        height: "fit-content",
        justifyContent: "center",
    },
    removeButton: {
        display: "flex",
        border: "none",
        background: "none",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    totalPriceItem: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    incDecQuantityInCart: {
        border: "none",
        background: "none",
        width: "fit-content",
        padding: 0,
        "&:hover": {
            cursor: "pointer"
        }
    },
    quantity: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    value: {
        width: "fit-content",
    },
    quantityContainer: {
        display: "flex",
        maxHeight: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "50px",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    separator: {
        minWidth: "30px",
    }
}));

export const useStylesLoginModal = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display:'flex',alignItems:'center',justifyContent:'center',
        backgroundColor: 'none',
     
    },   
    toolbarOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover':{
            textDecoration: "underline"
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    goSingInBtn: {
        display: "flex",
        justifyContent: "center",
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
  }));