
var a = document.querySelector("#a")
var b = document.querySelector("#b")
var c = document.getElementsByName("gender")
var d = document.querySelector("#d")
var e = document.querySelector("#e")

var a1 = document.querySelector("#a1")
var on = document.querySelector("#one")


function saveinfo(){

    var row = a1.insertRow()
    console.log(row)
    var col1 = row.insertCell(0)
    var col2 = row.insertCell(1)
    var col3 = row.insertCell(2)
    var col4 = row.insertCell(3)
    var col5 = row.insertCell(4)
    var col6 = row.insertCell(5)

    col1.textContent = a.value

    col2.innerHTML = b.value
    
    for(i=0; i<c.length; i++){
        if(c[i].checked){
            col3.textContent = c[i].value
        }
    }
    
    col4.innerHTML = d.value

    col5.innerHTML = e.value

    col6.innerHTML = "<button style='background-color: rgb(239, 70, 70);' id='del' onclick='deleteon(this)'>Delete</button>"

}

function deleteon(r){
    var i = r.parentNode.parentNode.rowIndex
    a1.deleteRow(i)
}

