import { saveSurveySubmission} from "./TransientState.js"


/*
    Responsibility: provide UI controls for survey taker to choose 'yes' or 'no' for ownership of blue jeans

    Strategy:
        1. A component function that produces HTML for two radio
            buttons for "Yes" or "No"

    Having two different names allows you to select both Yes and No
    The same name groups the choices together and only allows one choice
*/


export const SaveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)
    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}


 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleSurveySubmissionClick = (clickEvent) => {
        if (clickEvent.target.id === 'saveSubmission') { //refers to data attributes
            saveSurveySubmission()
        }
    }