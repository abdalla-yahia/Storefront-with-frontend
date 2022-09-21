
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

//Get Products
form[0].onsubmit = (e) => {
    e.preventDefault()
    const request =new XMLHttpRequest()
    request.open("GET",`http://localhost:3001/api/product/${id.value}`)
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
                    dt1.textContent = "Name "
                    const dt2 = document.createElement('span')
                    dt2.className = "dt3";
                    dt2.textContent = "Price "
                    const dt3 = document.createElement('span')
                    dt3.className = "dt3";
                    dt3.textContent = " Category"
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
                    fn.textContent = data.data[e].name
                    ln.textContent = data.data[e].price
                    em.textContent = data.data[e].category
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
//Create A New Product
form[1].onsubmit = (e) => {

    form[1].action = `http://localhost:3001/api/product/`

}
//update
form[2].onsubmit = (e) => {

    form[2].action = `http://localhost:3001/api/product/${id3.value}`

}


//Delete users
form[3].onsubmit = (e) => {
    if (id4.value !== "") {
        e.preventDefault()
        const request = new XMLHttpRequest()
        request.open("POST", `http://localhost:3001/api/product/del/${id4.value}`)
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

