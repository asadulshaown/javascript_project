//object
//object has a key and a value
const object = {
     id: 12,
     name:"joke",
     work:"programmer",
     email:"asa@gmail.com"
}
//get into object in the function
function object1 (id,name){
    if(id===object.id & name===object.name){
        return "id is same as object id:"+ id  + "name is same as object name:" + name;
    }
    else{
        return "please input your id and name:"
    }
}