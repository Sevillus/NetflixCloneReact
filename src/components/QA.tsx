import Accordion from "./Accordion";

const QA = () =>{
    return(
        <section style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            padding:"4.5rem 150px",
            color:"white",
            background:"black",
        }}>
            <h2 >Często zadawane pytania</h2>
            <Accordion data={data}/>
        </section>
    )
}

const data = [
    {
        question: 'Czym jest Netflix?',
        answer: "Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą" +
            " korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz" +
            " produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem" +
            "Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą." +
            " Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia."
    },
    {
        question: 'Czym jest Netflix?',
        answer: "Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą" +
            " korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz" +
            " produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem" +
            "Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą." +
            " Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia."
    },
    {
        question: 'Czym jest Netflix?',
        answer: "Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą" +
            " korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz" +
            " produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem" +
            "Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą." +
            " Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia."
    },
    {
        question: 'Czym jest Netflix?',
        answer: "Netflix to usługa przesyłania strumieniowego, dzięki której użytkownicy mogą" +
            " korzystać z szerokiej oferty nagradzanych filmów, seriali, programów, anime oraz" +
            " produkcji dokumentalnych za pośrednictwem tysięcy urządzeń połączonych z internetem" +
            "Możesz oglądać do woli, gdziekolwiek jesteś — bez reklam i za jedną miesięczną opłatą." +
            " Co tydzień dodajemy nowe tytuły, więc zawsze jest coś ciekawego do obejrzenia."
    }
]

export default QA;