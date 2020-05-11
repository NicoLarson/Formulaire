document.addEventListener("DOMContentLoaded", () => {

    const login = document.getElementsByName("login")[0]
    /* const password = document.getElementsByName("password")[0] */
    const btn = document.getElementsByTagName("input")[2]
    const elShow = document.querySelector("section a")
    const elForm = document.querySelectorAll("section")[1]
    const elV = document.querySelector("section h2")

    elShow.addEventListener("click", ()=>{
        elForm.classList.toggle("form")
        elV.classList.toggle("checked")
    })

    let warning = document.querySelector("section:nth-child(2) p")

    let User = ({
        username: "a@gmail.com",
        password: 3615
    })

    btn.addEventListener("click", (event) => {
        event.preventDefault()
        if (login.value == User.username && parseInt(password.value) === User.password) {
            warning.style.display = "block"
            warning.classList.add("success")
            warning.innerText = `${User.username} Vous êtes connecté`
        } else {
            warning.style.display = "block"
            warning.classList.add("warning")
        }
        event.stopPropagation()

        /*
                let log = ["Riri", "Fifi", "Loulu"]
                let passwords = ["azerty", "12345", "poiuy"]

            btn.addEventListener("click", (event) => {
            event.preventDefault()
            window.addEventListener("load", () => {})
            login.value && password.value ? true : alert("Remplissez tous les champs!")
            event.stopPropagation()

                for (key in log && passwords)
                    login.value == log[key] && password.value == passwords[key] ? console.log("Acces autorisé") :
                    log.includes(login.value) == false ? console.log("Login invalid") :
                    log.includes(login.value) && passwords.includes(password.value) == false ? console.log("Password invalid") : false
            }) 
        */
    })
})

// V en vert + click fondu enchainer