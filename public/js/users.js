
const showData = document.getElementById('showData');

const form = document.forms

const id = document.getElementById('id')
const id2 = document.getElementById('id2')
const id3 = document.getElementById('id3')


const state = document.querySelectorAll('.state')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')

//Get users
form[0].onsubmit = (e) => {
    e.preventDefault()
    const request =new XMLHttpRequest()
    request.open("GET",`http://localhost:3001/api/user/${id.value}`)
    request.onreadystatechange = () => {
        if (request.status == 200 && request.readyState == 4) {
            const data = JSON.parse(request.responseText)
            if (data.state) {
                    state[0].innerHTML = data.state
                } else {
                    state[0].innerHTML = data.message
                }
            const dt = Object.keys(data.data)
            if (dt.length > 0) {
                dt.map(e => {
                    const dt = document.createElement('span')
                    dt.className = "dt";
                    dt.textContent = " ID "
                    const dt1 = document.createElement('span')
                    dt1.className = "dt1";
                    dt1.textContent = " First Name"
                    const dt2 = document.createElement('span')
                    dt2.className = "dt3";
                    dt2.textContent = "Last Name "
                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = "Email "
                    const id = document.createElement('h3')
                    const fn = document.createElement('h3')
                    const ln = document.createElement('h3')
                    const em = document.createElement('h3')
                    const hr = document.createElement('hr')
                    showData.appendChild(dt)
                    showData.appendChild(id)
                    showData.appendChild(dt1)
                    showData.appendChild(fn)
                    showData.appendChild(dt2)
                    showData.appendChild(ln)
                    showData.appendChild(dt3)
                    showData.appendChild(em)
                    showData.appendChild(hr)
                    id.textContent = data.data[e].id
                    fn.textContent = data.data[e].firstname
                    ln.textContent = data.data[e].lastname
                    em.textContent = data.data[e].email

                    id.style.color = "#13c0eb"
                    fn.style.color = "#13c0eb"
                    ln.style.color = "#13c0eb"
                    em.style.color = "#13c0eb"
                })
            }
        }
    }
    request.send()
}
//update
form[1].onsubmit = (e) => {
    form[1].action = `http://localhost:3001/api/user/${id2.value}`
}


//Delete users
form[2].onsubmit = (e) => {

    e.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", `http://localhost:3001/api/user/del/${id3.value}`)
    request.onreadystatechange = () => {
        if (request.status == 200 && request.readyState == 4) {
            const data = JSON.parse(request.responseText)
            if (data !== null) {
                state[2].innerHTML = data.message1
            } else {
                if (data.state) {
                    state[2].innerHTML = data.state
                } else {
                    state[2].innerHTML = data.message
                }
            }
        }
    }
    
    request.send()
}

let a = 10, b = 20

// console.log((-a + b))
// console.log((a + -b))
    console.log( a + --b * a + --b * --a * --a * --a)