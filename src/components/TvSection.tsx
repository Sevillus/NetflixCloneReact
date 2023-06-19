import BackVideo from "../../public/imgs/video.mp4"

const TvSection = () =>{
    return(
        <section style={{
            position:"relative",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"4.5rem 150px",
            color:"white",
            background:"black",
        }}>
            <div>
                <h2 style={{
                    fontSize:"3rem",
                    fontWeight:"900"
                }}>
                    Oglądaj na telewizorze
                </h2>
                <p style={{
                    fontSize:"1.5rem",
                    fontWeight:"400",
                    marginTop:"10px"
                }}>
                    Oglądaj na telewizorach Smart TV, konsolach PlayStation i Xbox, odtwarzaczach Chromecast, Apple TV oraz Blu-ray i nie tylko.
                </p>
            </div>
            <div>
                <img src="/public/imgs/tv.png" alt=""/>
                <video className='VideoTag' autoPlay loop muted style={{
                    transform: "scale(0.95)",
                    position:"absolute",
                    right:"235px",
                    top: "170px"
                }}>
                    <source src={BackVideo} type='video/mp4'/>
                </video>
            </div>
        </section>
    )
}
export default TvSection;