import { Button, Box, styled, TextField,  Container, CssBaseline} from "@material-ui/core";
import { Link } from "react-router-dom";

export const BoxStyle = styled(Box)({
    textTransform: "uppercase",
    paddingTop: "50px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    fontSize: "2rem",
    padding: "10px",
    minWidth: "350px",
    height: "350px",
    });
  
  export const LinkRout = styled(Link)({
    margin: "0 auto",
    display: "flex",
    textDecoration: "none",
    });
  
  export const MyButton = styled(Button)({
    marginTop: "10px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    height: 48,
    padding: "0 30px",
    display: "flex",
    margin: "0 auto",
    });

  export const InputStyle = styled(TextField)({ // In SearchPanel
    fontSize: "2rem",
    border: "2px solid grey",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "white",
    width: "350px",
    display: "flex",
    margin: "0 auto"
    });
  export const StyleContainer = styled(Container) ({
     backgroundColor: "#cfe8fc",
     height: "100vh",
     });
  export const StyleCssBaseline = styled(CssBaseline)({
    })
  