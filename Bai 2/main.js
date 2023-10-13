function phuong_trinh_bac_2(){
    const a=document.getElementById('a').value;
    const b=document.getElementById('b').value;
    const c=document.getElementById('c').value;
    const delta=b*b-4*a*c;
    if(delta>0){
        const x1=(-b+Math.sqrt(delta))/(2*a);
        const x2=(-b-Math.sqrt(delta))/(2*a);
        document.querySelector('.output').innerHTML = x1+' '+x2;
    }else if(delta==0){
        const x=-b/(2*a);
        document.querySelector('.output').innerHTML = x;
    }else {
        document.querySelector('.output').innerHTML = 'nothing';
    }
}