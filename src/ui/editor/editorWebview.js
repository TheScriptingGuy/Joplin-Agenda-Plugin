
// Get Form Elements
let nameInput = document.getElementById("nameInput")
let sortOrderInput = document.getElementById("sortOrderInput")
let searchCriteriaInput = document.getElementById("searchCriteriaInput")
let noteIDInput = document.getElementById("noteIDInput")
let showCompletedCheckbox = document.getElementById("showCompletedCheckbox")
let showNoDueCheckbox = document.getElementById("showNoDueCheckbox")
let displayFormatSelect = document.getElementById("displayFormatSelect")
let yearFormatSelect = document.getElementById("yearFormatSelect")
let monthFormatSelect = document.getElementById("monthFormatSelect")
let dayFormatSelect = document.getElementById("dayFormatSelect")
let weekdayFormatSelect = document.getElementById("weekdayFormatSelect")
let timeIs12HourCheckbox = document.getElementById("timeIs12HourCheckbox")
let profileDataInput = document.getElementById("profileDataInput")
let noDueDatesAtEndCheckbox = document.getElementById("noDueDatesAtEndCheckbox")
let weekStartsOnSelect = document.getElementById("weekStartsOnSelect")
let maxDotsPerDayInput = document.getElementById("maxDotsPerDayInput")

// Keep the hidden form value current as soon as any control is edited. Waiting for
// "change" requires a focused field to lose focus before Joplin's native Save button
// collects the form, which can otherwise submit the previous value.
const profileInputs = [
    nameInput,
    sortOrderInput,
    searchCriteriaInput,
    noteIDInput,
    showCompletedCheckbox,
    showNoDueCheckbox,
    displayFormatSelect,
    yearFormatSelect,
    monthFormatSelect,
    dayFormatSelect,
    weekdayFormatSelect,
    timeIs12HourCheckbox,
    noDueDatesAtEndCheckbox,
    weekStartsOnSelect,
    maxDotsPerDayInput,
]
profileInputs.forEach(input => input.addEventListener("input", saveProfileData))

// Load Profile Data
function loadProfileData() {
    if (profileDataInput.value != "<<PROFILE_DATA>>"){
        var profileObject = JSON.parse(decodeURI(atob(profileDataInput.value)))
        nameInput.value = profileObject["name"]
        sortOrderInput.value = profileObject["sortOrder"]
        searchCriteriaInput.value = profileObject["searchCriteria"]
        noteIDInput.value = profileObject["noteID"]
        showCompletedCheckbox.checked = profileObject["showCompleted"]
        showNoDueCheckbox.checked = profileObject["showNoDue"]
        displayFormatSelect.value = profileObject["displayFormat"]
        yearFormatSelect.value = profileObject["yearFormat"]
        monthFormatSelect.value = profileObject["monthFormat"]
        dayFormatSelect.value = profileObject["dayFormat"]
        weekdayFormatSelect.value = profileObject["weekdayFormat"]
        timeIs12HourCheckbox.checked = profileObject["timeIs12Hour"]
        noDueDatesAtEndCheckbox.checked = profileObject["noDueDatesAtEnd"]
        weekStartsOnSelect.value = String(profileObject["weekStartsOn"])
        maxDotsPerDayInput.value = profileObject["maxDotsPerDay"]
    }
}

// Save Profile Data
function saveProfileData(){
    var profileObject = {
        "name": nameInput.value,
        "sortOrder": sortOrderInput.value,
        "searchCriteria": searchCriteriaInput.value,
        "noteID": noteIDInput.value,
        "showCompleted": showCompletedCheckbox.checked,
        "showNoDue": showNoDueCheckbox.checked,
        "displayFormat": displayFormatSelect.value,
        "yearFormat": yearFormatSelect.value,
        "monthFormat": monthFormatSelect.value,
        "dayFormat": dayFormatSelect.value,
        "weekdayFormat": weekdayFormatSelect.value,
        "timeIs12Hour": timeIs12HourCheckbox.checked,
        "noDueDatesAtEnd": noDueDatesAtEndCheckbox.checked,
        "weekStartsOn": weekStartsOnSelect.value,
        "maxDotsPerDay": maxDotsPerDayInput.value
    }
    profileDataInput.value = btoa(encodeURI(JSON.stringify(profileObject)))
}

loadProfileData()
saveProfileData()