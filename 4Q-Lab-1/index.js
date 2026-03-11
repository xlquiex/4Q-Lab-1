function storeProcess() {
    let customerName = document.forms["store"]["name"].value;
    document.forms["store"]["name"].value = costumerName.trim();
    if (customerName.trim() === "") {
        alert("Enter name!");
        return false;
    }
    return true;
}