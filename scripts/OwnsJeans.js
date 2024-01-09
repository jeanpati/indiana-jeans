import { setOwnsBlueJeans } from "./TransientState.js"


/*
    Responsibility: provide UI controls for survey taker to choose 'yes' or 'no' for ownership of blue jeans

    Strategy:
        1. A component function that produces HTML for two radio
            buttons for "Yes" or "No"

    Having two different names allows you to select both Yes and No
    The same name groups the choices together and only allows one choice
*/


export const OwnJeansChoices = () => {
    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own a pair of blue jeans? </h2>"
    html += "<input type='radio' name='ownsJeans' value='true'/>Yes"
    html += "<input type='radio' name='ownsJeans' value='false'/>No"

    return html
}


 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") { //refers to data attributes
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }