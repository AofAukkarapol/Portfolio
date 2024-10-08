window.onload = Myfunction;
function Myfunction()
{
    document.getElementById('top').innerText = "Welcome to the Forum";
}

let postCount = 0;

function postFunction()
{
    let message = document.getElementById('message').value;

    if (message.trim() === "") //ทริมหัว-ท้าย
    {
        alert('Please type some messages')
    }

    postCount++;

    if (postCount === 1) 
    {    
        document.getElementById('topic').innerText = message;
        clearOnlyFunction()
    } 
    else if (postCount === 2) 
    {
        
        document.getElementById('reply1').innerText = message;
        clearOnlyFunction()
    } 
    else if (postCount === 3) 
    {    
        document.getElementById('reply2').innerText = message;
        clearOnlyFunction()
    }
    else if(postCount != 1,2,3,4)
    {
        postCount = 1;
        document.getElementById('topic').innerText = message;
        clearOnlyFunction()
    }
}

function clearFunction()
{
    document.getElementById('topic').innerText = "";
    document.getElementById('reply1').innerText = "";
    document.getElementById('reply2').innerText = "";
    clearOnlyFunction();

    postCount = 0;
}

function clearOnlyFunction() //ไว้เคลียร์เฉพาะกล่องข้อความ
{
    document.getElementById('message').value = "";
}