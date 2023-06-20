import Navbar from "../components/Navbar";
import BackGround from "../components/BackGround";
import "./LoginPage.scss"
import {TextField} from "@mui/material";

const LoginPage = () =>{
    return(
        <BackGround>
            <Navbar displayButton={"false"}/>
            <div className={"LoginPage__container"}>
                <div className="loginPage__login-form">
                    <h1>Zaloguj się</h1>
                    <TextField id="filled-basic" label="E-mail lub numer telefonu" variant="filled"
                               sx={{ input: { color: 'white' } ,label:{color: "rgba(255,255,255,0.7)"}}}

                    />
                    <TextField id="filled-basic" label="E-mail lub numer telefonu" variant="filled"
                               sx={{ input: { color: 'white' } ,label:{color: "rgba(255,255,255,0.7)"}}}

                    />
                </div>
            </div>
        </BackGround>
    )
}
export default LoginPage