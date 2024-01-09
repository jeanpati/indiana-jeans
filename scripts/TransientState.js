// Set up the transient state data structure and provide initial valuess
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}
export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const saveSurveySubmission = async() => {
    const postOptions = {
        method: "POST", //POST means to create
        headers: { // make the key a string bc the key name has a dash in it so surround with quotes
            "Content-Type": "application/json"
        },
        //can only send strings, convert to string
        body: JSON.stringify(transientState)
    }
    const response = await fetch ("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}