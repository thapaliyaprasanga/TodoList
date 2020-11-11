var selectedRow = null

function onFormSubmit(){
    if (validate()){
        var formData = readFormData()
        if (selectedRow ===null){
            insertNewRecord(formData)
        }else{
            updateRecord(formData)
        }
        resetForm()
    }
}

function readFormData(){
    var formData = {}
    formData['task'] = document.getElementById('task').value;
    formData['date'] = document.getElementById('date').value;

    return formData
}

function insertNewRecord(data){
    var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow()
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.task

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.date

    cell5 = newRow.insertCell(2)
    cell5.innerHTML = `<a class="edit btn" onclick="onEdit(this)">Edit</a>
                       <a class="delete btn" onclick="onDelete(this)">Delete</a>`
}

function resetForm(){
    document.getElementById("task").value = ""
    document.getElementById("date").value = ""
    selectedRow = null

}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById('task').value = selectedRow.cells[0].innerHTML
    document.getElementById('date').value = selectedRow.cells[1].innerHTML
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.task
    selectedRow.cells[1].innerHTML = formData.date
}

function onDelete(td) {
    if (confirm('Ayou you sure')){
        row = td.parentElement.parentElement
        document.getElementById('employeeList').deleteRow(row.rowIndex)
        resetForm()
    }
}

function validate(){
    isValid = true;
    if (document.getElementById("task").value === ""){
        isValid = false
        document.getElementById("fullNameValidationError").classList.remove("hide")
    }else{
        if(!document.getElementById("fullNameValidationError").classList.contains("hide")){
            document.getElementById("fullNameValidationError").classList.add("hide")
        }
    }
    return isValid
}