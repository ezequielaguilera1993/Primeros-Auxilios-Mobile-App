import { StoreType } from "../../../Redux/Store"
import { Acv } from "./atomizeQ&A/Acv"
import { Heimlich } from "./atomizeQ&A/Heimlich"
import { HeimlichAdultos } from "./atomizeQ&A/HeimlichAdultos"
import { HeimlichBebés } from "./atomizeQ&A/HeimlichBebés"
import { Infarto } from "./atomizeQ&A/Infarto"
import { InfartoAcv } from "./atomizeQ&A/InfartoAcv"
import { Rcp } from "./atomizeQ&A/Rcp"
import { RcpAdultos } from "./atomizeQ&A/RcpAdultos"
import { RcpBebés } from "./atomizeQ&A/RcpBebés"
//tipo de una sola pregunta
export type iPregunta = {
    p: string;
    o: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    x: "A" | "B" | "C" | "D";
    i: string
}

//un cuestionario, es un array de preguntas
export type QA = iPregunta[]

//Nombres de los cuestionarios
export type questionnaireNamesTypes = "InfartoAcv" | "Infarto" | "Acv" | "Heimlich" | "HeimlichBebés" | "HeimlichAdultos" | "Rcp" | "RcpBebés" | "RcpAdultos"

//Todos los cuestionarios, es un objeto con keys == nombre de cuestonarios, y values igual QA -un cuestionario-
type allQuestionnairesType = {
    [key in questionnaireNamesTypes]: QA
}

//Es un objeto para asegurarme los nombres de los cuestionarios, por medio de las keys
export const allQuestionnaires: allQuestionnairesType = {
    InfartoAcv,
    Infarto,
    Acv,
    Heimlich,
    HeimlichBebés,
    HeimlichAdultos,
    Rcp,
    RcpBebés,
    RcpAdultos
}



// //Los exporto

// //Valores iniciales
export const QAinitialState: StoreType = {

    questionnaires: {
        "InfartoAcv": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.InfartoAcv.length } },
        "Infarto": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.Infarto.length } },
        "Acv": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.Acv.length } },
        "Heimlich": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.Heimlich.length } },
        "HeimlichBebés": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.HeimlichBebés.length } },
        "HeimlichAdultos": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.HeimlichAdultos.length } },
        "Rcp": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.Rcp.length } },
        "RcpBebés": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.RcpBebés.length } },
        "RcpAdultos": { values: { answeredQuestions: [], allQuestions: allQuestionnaires.RcpAdultos.length } },
    }

}

