function skillsMember() {
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsPattern = /^[a-zA-Z0-9 ]{2,100}$/;
    if (skillsPattern.test(skills) == true) {
        skillsError.innerHTML = "";
        return true;
    } else {
        skillsError.innerHTML = "Please enter valid skills";
        return false;
    }
}