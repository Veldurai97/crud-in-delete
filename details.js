let details=[];
display()
function myfunction(){
    let obj={
        firstname:document.getElementById("fname").value,
        lastname:document.getElementById("lname").value,
        age:document.getElementById("age").value,
        genter:document.querySelector( 'input[name="genter"]:checked').value,
        }
        // if (document.getElementById('genter').checked) {
        //    let rate_value = document.getElementById('genter').value;
        //     console.log(rate_value)
        //   }
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("age").value="";
    details.push(obj)
    display() 
    
    
}
function display(){
    let data = ""
    for(let i=0; i<details.length; i++){

        data += '<tr>';
        data += '<td>' + details[i].firstname + '</td>';
        data += '<td>' + details[i].lastname + '</td>';
        data += '<td>' + details[i].age + '</td>';
        data += '<td>' + details[i].genter + '</td>';
        data += '<td><button onclick="Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';

    }
    return document.getElementById("display").innerHTML = data
}
function Delete(item)  {
    console.log(details)
    // Delete the current row
    details.splice(item, 1);
    
    // Display the new list
    display();
  };


      
 
 