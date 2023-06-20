import Navbar from "./Navbar";
import background from "../../public/imgs/backgroundImg.jpg"
import {TextField, Button} from "@mui/material"
import BackGround from "./BackGround";


const HomeSection = () =>{
    return(
        <BackGround>
            <Navbar />
            <div style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                marginTop:"10%"}} >
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    color:"white",
                    width:"68%",
                    textAlign:"center"}}>
                    <h1 style={{ fontSize:"3rem",
                        fontWeight:"900"}}>
                        Filmy, seriale i wiele więcej bez ograniczeń
                    </h1>
                    <p style={{
                        fontSize:"1.5rem",
                        fontWeight:"400"}}>
                        Oglądaj wszędzie, anuluj kiedy chcesz.
                    </p>
                    <span style={{
                        fontSize:"1.25rem",
                        fontWeight:"400",
                        lineHeight:"1.875rem"}}>
                        Zaczynamy oglądać? Wprowadź adres e-mail, aby utworzyć lub odnowić konto.
                    </span>
                    <div style={{
                        display:"flex",
                        alignItems:"center",
                        width:"55%",
                        marginTop:"20px"
                    }}>
                        <TextField id="filled-basic" label="Adres e-mail" variant="filled"
                                   sx={{ input: { color: 'white' } ,label:{color: "rgba(255,255,255,0.7)"}}}
                                   style={{
                                       width:"100%",
                                       height:"3.25rem",
                                       background:"rgba(0,0,0,0.7)",
                                       border:"1px solid rgba(255,255,255,0.3)",
                                       borderRadius:"0.35rem"}}
                        />
                        <Button variant="contained" endIcon={">"}
                                style={{
                                    background:"#E50914",
                                    padding:"12px 24px",
                                    fontWeight:"600",
                                    marginLeft:"8px"}}
                        >Rozpocznij</Button>
                    </div>
                </div>
            </div>
        </BackGround>




            )
}
export default HomeSection;