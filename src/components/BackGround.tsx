import background from "../../public/imgs/backgroundImg.jpg";

const BackGround = ({children}) =>{
    return(
        <section style={{
            height: "120vh",
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url(${background}),center`
        }} >
            {children}
        </section>
    )
}
export default BackGround