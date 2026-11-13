function Add(){
    let name = document.getElementById('name').value;
    document.getElementById('list').innerHTML+= "<li>" + name;
}