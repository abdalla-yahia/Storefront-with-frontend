
const showData = document.getElementById('showData');

const form = document.forms

const id = document.getElementById('id')
const id2 = document.getElementById('id2')
const id3 = document.getElementById('id3')
const id4 = document.getElementById('id4')


const state = document.querySelectorAll('.state')
const name = document.getElementById('name')
const price = document.getElementById('price')
const category = document.getElementById('category')
// const password = document.getElementById('password')

//Get Order/s
form[0].onsubmit = (e) => {
e.preventDefault()
if (id.value !== "") {
    const request = new XMLHttpRequest()
    request.open("GET", `http://localhost:3001/api/order/${id.value}`)
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
                    dt.textContent = " User F-Name"

                    const dt1 = document.createElement('span')
                    dt1.className = "dt1";
                    dt1.textContent = "User L-Name"

                    const dt2 = document.createElement('span')
                    dt2.className = "dt2";
                    dt2.textContent = "Quantity "

                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = " Order Status"


                    // const oid = document.createElement('h3')
                    const fn = document.createElement('h3')
                    const ln = document.createElement('h3')
                    const qu = document.createElement('h3')
                    const os = document.createElement('h3')
                    const hr = document.createElement('hr')

                    
                    showData.appendChild(dt)
                    showData.appendChild(fn)
                    
                    showData.appendChild(dt1)
                    showData.appendChild(ln)
                    
                    showData.appendChild(dt2)
                    showData.appendChild(qu)
                    
                    showData.appendChild(dt3)
                    showData.appendChild(os)

                    showData.appendChild(hr)
                    // oid.textContent = data.data[e].id
                    fn.textContent = data.data[e].firstname
                    ln.textContent = data.data[e].lastname
                    qu.textContent = data.data[e].quantity
                    os.textContent = data.data[e].order_status
                    fn.style.color = "#13c0eb"
                    ln.style.color = "#13c0eb"
                    qu.style.color = "#13c0eb"
                    os.style.color = "#13c0eb"
                })
            }
        }
    }
    request.send()
    }
else {
    const request = new XMLHttpRequest()
    request.open("GET", `http://localhost:3001/api/order`)
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
                    dt.textContent = " ID"

                    const dt1 = document.createElement('span')
                    dt1.className = "dt1";
                    dt1.textContent = "Order Name"

                    const dt2 = document.createElement('span')
                    dt2.className = "dt3";
                    dt2.textContent = "Quantity "

                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = "  Order Status"

                    const dt4 = document.createElement('span')
                    dt4.className = "dt4";
                    dt4.textContent = "  User ID"

                    const oid = document.createElement('h3')
                    const on = document.createElement('h3')
                    const qu = document.createElement('h3')
                    const os = document.createElement('h3')
                    const uid = document.createElement('h3')
                    const hr = document.createElement('hr')
                    showData.appendChild(dt)
                    showData.appendChild(oid)
                    showData.appendChild(dt1)
                    showData.appendChild(on)
                    showData.appendChild(dt2)
                    showData.appendChild(qu)
                    showData.appendChild(dt3)
                    showData.appendChild(os)
                    showData.appendChild(dt4)
                    showData.appendChild(uid)
                    showData.appendChild(hr)
                    oid.textContent = data.data[e].id
                    on.textContent = data.data[e].order_name
                    qu.textContent = data.data[e].quantity
                    os.textContent = data.data[e].order_status
                    uid.textContent = data.data[e].user_id

                    oid.style.color = "#13c0eb"
                    on.style.color = "#13c0eb"
                    qu.style.color = "#13c0eb"
                    os.style.color = "#13c0eb"
                    uid.style.color = "#13c0eb"
                })
            }
        }
    }
    request.send()
    }
}
//Create A New Order
form[1].onsubmit = (e) => {

    form[1].action = `http://localhost:3001/api/order/`

}
//Update Order
form[2].onsubmit = (e) => {

    form[2].action = `http://localhost:3001/api/order/${id3.value}`

}


//Delete Order/s
form[3].onsubmit = (e) => {
    if (id4.value !== "") {
        e.preventDefault()
        const request = new XMLHttpRequest()
        request.open("POST", `http://localhost:3001/api/order/del/${id4.value}`)
        request.onreadystatechange = () => {
            if (request.status == 200 && request.readyState == 4) {
                const data = JSON.parse(request.responseText)
                if (data.state) {
                
                    state[2].innerHTML = data.state
                } else {
                    state[2].innerHTML = data.message
                }
            }
        }
        request.send()
    }
}

