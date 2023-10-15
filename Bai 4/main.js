function find(){
    const text=document.querySelector('.text-field').value;
    const area=document.querySelector('#textarea').value;
    let count=area.split(text).length-1;
    // let arr=area.split(text);
    // console.log(arr);
    document.querySelector('.result').innerHTML=count;
};