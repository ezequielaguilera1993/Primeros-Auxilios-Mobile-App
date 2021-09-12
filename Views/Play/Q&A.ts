import { StoreType } from "../../shared/Redux/Store"


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
    i: string;
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
const allQuestionnaires: allQuestionnairesType = {
    InfartoAcv: [
        {
            p: "¿Que es un InfartoAcv?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "B",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    Infarto: [
        {
            p: "¿Que es un Infarto?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    Acv: [
        {
            p: "¿Que es un Acv?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    Heimlich: [
        {
            p: "¿Que es un Heimlich?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    HeimlichBebés: [
        {
            p: "¿Que es un HeimlichBebés?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
        {
            p: "¿Cómo sasda?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
        {
            p: "¿Cómadma?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
        {
            p: "¿Cóefllama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
        {
            p: "¿Cómo 234a?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    HeimlichAdultos: [
        {
            p: "¿Que es un HeimlichAdultos?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    Rcp: [
        {
            p: "¿Que es un Rcp?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    RcpBebés: [
        {
            p: "¿Que es un RcpBebés?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ],
    RcpAdultos: [
        {
            p: "¿Que es un RcpAdultos?",
            o: {

                A: "Es una cas ca scas c",
                B: "asñjasñdkjasmdñas",
                C: "añksjdaksdmasd",
                D: "alskdmñasldkmasd",
            },
            x: "A",
            i: "http://www.maestrosdelweb.com/images/2009/08/crayones_jpg.jpg"
        }
        ,
        {
            p: "¿Cómo se llama?",
            o: {

                A: "aaPaula",
                B: "aaPepa",
                C: "aaCarla",
                D: "aaCuaca",
            },
            x: "B",
            i: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAxaoLG1g0Mb4EWelP7GC14hiN1k2VPErmTPjNOB03nMJuCXPU7yxxWk9xzVwz0vfufE&usqp=CAU"
        }
        ,
    ]
}


//Los exporto
export const { Acv, Heimlich, HeimlichAdultos, HeimlichBebés, Infarto, InfartoAcv, Rcp, RcpAdultos, RcpBebés, } = allQuestionnaires

//Valores iniciales
export const QAinitialState: StoreType = {

    questionnaires: {
        "InfartoAcv": { values: { answeredQuestions: 0, allQuestions: InfartoAcv.length } },
        "Infarto": { values: { answeredQuestions: 0, allQuestions: Infarto.length } },
        "Acv": { values: { answeredQuestions: 0, allQuestions: Acv.length } },
        "Heimlich": { values: { answeredQuestions: 0, allQuestions: Heimlich.length } },
        "HeimlichBebés": { values: { answeredQuestions: 0, allQuestions: HeimlichBebés.length } },
        "HeimlichAdultos": { values: { answeredQuestions: 0, allQuestions: HeimlichAdultos.length } },
        "Rcp": { values: { answeredQuestions: 0, allQuestions: Rcp.length } },
        "RcpBebés": { values: { answeredQuestions: 0, allQuestions: RcpBebés.length } },
        "RcpAdultos": { values: { answeredQuestions: 0, allQuestions: RcpAdultos.length } },
    }

}




