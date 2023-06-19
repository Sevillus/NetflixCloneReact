const Navbar = () =>{
    return(
        <div style={{padding:"20px 150px"}}>
            <Row>
                <img src="public/imgs/logo.png" alt="" style={{width:"9.5rem", height:"3.25rem"}}/>
                <Row>
                    <select name="cars" id="cars" style={{width:"auto", height:"2em",background:"inherit", color:"#ffffff", marginRight:"20px"}}>
                        <option value="polish">Polski</option>
                        <option value="english">English</option>
                    </select>
                    <button style={{ height:"2em",padding:"4px 16px",borderRadius:"0.25rem",fontWeight:"600",color:"white" ,background:"#E50914"}}>
                        <p style={{margin:"0", fontSize:"14px"}}>Zaloguj się</p>
                    </button>
                </Row>
            </Row>
        </div>
)
}

import Row from "../context/Row";
export default Navbar;