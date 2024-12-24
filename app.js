let todo = [];
let input = prompt("Enter a Request");

while(true){
    if(input=="quit"){
        console.log("You Quit");
        break;
    }
    if(input=="list"){
        console.log("------------------------------");
        for(i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------------------");
        
    }
    if(input=="add"){
        let task = prompt("Enter Task You Want to Add");
        todo.push(task);
        console.log("Task Added");
    }
    if (input=="delete"){
        let del = prompt('Enter Task No. You Wish to Delete')
        todo.splice(del,1);
        console.log(`Task ${del} Deleted Successfully`);
    }
    else{
        console.log("Wrong Request")
    }
    input = prompt("Enter a Request");
}