const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData() {
    let name = PARAMS.get("student");
    document.getElementById("Greetings").innerText = `Greetings, ${name}!`;
}
