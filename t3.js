var object = '{"name": "ISRO", "age": 35, "role": "Scientist"}';
var par_obj=JSON.parse(object);
console.log(par_obj);
function convertObjectToList()
{
    return Object.entries(par_obj);
}
console.log(convertObjectToList());