let ricxvebi = prompt('Enter 1 number').split(' '),
    a = +ricxvebi[0],
    jamebiii = 0;

if((a <= 0) || (a >= 100)){
    alert('araswori shualedi');
}else{
    for(var i = 0; i<a; i=i+2){
        jamebiii += i;
    }

    alert(jamebiii);
}