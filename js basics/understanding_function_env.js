var x=1;
a();
b();
c();
function a(){
    var x=10;
    console.log("x in a:",x);
}

function b(){

    var x=20;
    console.log("x in b:",x);
}

function c(){
    console.log("x in c:",x);
}


{
    {
        { 
            {
                console.log("x in line 25:",x)
            }
        }
    }
}







/*
x in a 10
x in b: 20
x in c 1
x in line 25 1
*/






