
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
    request.open("GET", `http://localhost:3001/api/orpro/${id.value}`)
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
                    const da = document.createElement('span')
                    da.className = "da";
                    da.textContent = " Order Name"
                
                    const da1 = document.createElement('span')
                    da1.className = "da1";
                    da1.textContent = " Order Status"
                
                    const da2 = document.createElement('span')
                    da2.className = "da2";
                    da2.textContent = " User ID"
                
                    const da3 = document.createElement('span')
                    da3.className = "da3";
                    da3.textContent = " Quantity"
                

                    const dt = document.createElement('span')
                    dt.className = "dt";
                    dt.textContent = " Product Name"

                    const dt1 = document.createElement('span')
                    dt1.className = "dt1";
                    dt1.textContent = "Product Price"

                    const dt2 = document.createElement('span')
                    dt2.className = "dt2";
                    dt2.textContent = "Product Category "

                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = " Order ID"

                    const dt4 = document.createElement('span')
                    dt4.className = "dt4";
                    dt4.textContent = " Product ID"


                    // const oid = document.createElement('h3')
                    const on = document.createElement('h3')
                    const os = document.createElement('h3')
                    const ui = document.createElement('h3')
                    const qu = document.createElement('h3')
                    const pn = document.createElement('h3')
                    const pp = document.createElement('h3')
                    const pc = document.createElement('h3')
                    const oi = document.createElement('h3')
                    const pi = document.createElement('h3')
                    const hr = document.createElement('hr')

                    
                    showData.appendChild(da)
                    showData.appendChild(on)

                    showData.appendChild(da1)
                    showData.appendChild(os)

                    showData.appendChild(da2)
                    showData.appendChild(ui)
                    
                    showData.appendChild(da3)
                    showData.appendChild(qu)
                
                    showData.appendChild(dt)
                    showData.appendChild(pn)
                    
                    showData.appendChild(dt1)
                    showData.appendChild(pp)
                    
                    showData.appendChild(dt2)
                    showData.appendChild(pc)
                    
                    showData.appendChild(dt3)
                    showData.appendChild(oi)

                    showData.appendChild(dt4)
                    showData.appendChild(pi)

                    showData.appendChild(hr)


                    on.textContent = data.data[e].order_name
                    os.textContent = data.data[e].order_status
                    ui.textContent = data.data[e].user_id
                    qu.textContent = data.data[e].quantity
                    pn.textContent = data.data[e].name
                    pp.textContent = data.data[e].price
                    pc.textContent = data.data[e].category
                    oi.textContent = data.data[e].order_id
                    pi.textContent = data.data[e].product_id
                    
                    on.style.color = "#13c0eb"
                    os.style.color = "#13c0eb"
                    ui.style.color = "#13c0eb"
                    qu.style.color = "#13c0eb"
                    pn.style.color = "#13c0eb"
                    pp.style.color = "#13c0eb"
                    pc.style.color = "#13c0eb"
                    oi.style.color = "#13c0eb"
                    pi.style.color = "#13c0eb"

                })
            }
        }
    }
    request.send()
    }
else {
    const request = new XMLHttpRequest()
    request.open("GET", `http://localhost:3001/api/orpro`)
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
                    dt1.textContent = "Quantity"

                    const dt2 = document.createElement('span')
                    dt2.className = "dt3";
                    dt2.textContent = "Order ID "

                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = "  Product ID"

                    const id = document.createElement('h3')
                    const qu = document.createElement('h3')
                    const oid = document.createElement('h3')
                    const pid = document.createElement('h3')
                    const hr = document.createElement('hr')

                    showData.appendChild(dt)
                    showData.appendChild(id)

                    showData.appendChild(dt1)
                    showData.appendChild(qu)

                    showData.appendChild(dt2)
                    showData.appendChild(oid)

                    showData.appendChild(dt3)
                    showData.appendChild(pid)

                    showData.appendChild(hr)
                    id.textContent = data.data[e].id
                    qu.textContent = data.data[e].quantity
                    oid.textContent = data.data[e].order_id
                    pid.textContent = data.data[e].product_id

                    id.style.color = "#13c0eb"
                    qu.style.color = "#13c0eb"
                    oid.style.color = "#13c0eb"
                    pid.style.color = "#13c0eb"

                })
            }
        }
    }
    request.send()
    }
}
//Create A New Order
form[1].onsubmit = (e) => {
    form[1].action = `http://localhost:3001/api/orpro/`

}

//Delete Order/s
form[2].onsubmit = (e) => {
    // if (id4.value !== "") {
        e.preventDefault()
        const request = new XMLHttpRequest()
        request.open("POST", `http://localhost:3001/api/orpro/del/${id4.value}`)
        request.onreadystatechange = () => {
            if (request.status == 200 && request.readyState == 4) {
                const data = JSON.parse(request.responseText)
                if (data.state) {
                
                    state[1].innerHTML = data.state
                } else {
                    state[1].innerHTML = data.message
                }
            }
        }
        request.send()
    }
// }

