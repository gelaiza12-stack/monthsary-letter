function login(){

    let name =
        document.getElementById("name")
        .value
        .trim()
        .toLowerCase();

    let date =
        document.getElementById("date")
        .value;

    if(
        name === "john lloyd angeles" &&
        date === "2026-08-27"
    ){

        document.getElementById("loginPage")
            .style.display = "none";

        document.getElementById("letterPage")
            .style.display = "block";

        window.scrollTo(0,0);

    }else{

        alert("Wrong name or monthsary date ❤️");

    }
}