/* 

let sondivimg=document.querySelectorAll(".comp img");
let sondivimgwithclaas=document.getElementsByClassName("imgitem");



let arrOFImag=[];
let anthorarraimg=Array.from(sondivimg);


for(let i=0;i<sondivimg.length;i++){
	
	arrOFImag[i]=sondivimg[i];
	
}

for(let i=0;i<sondivimg.length;i++){
	
	arrOFImag.push(sondivimg[i]);
	
}

console.log(sondivimg);
console.log(sondivimgwithclaas);

console.log(arrOFImag);
console.log(anthorarraimg);


 */
 
 
 
 
 

 
 
 
 
 

let sondiv=document.querySelectorAll(".comp");
let maindiplapic=document.getElementById("fuscrediv");
let sonpic=document.getElementById("sonpic");
let arrOFImag=[];

let prev=document.getElementById("prev");
let nexxx=document.getElementById("nexxx");
let closs=document.getElementById("closs");
let index=0;



let part=[];
for(let i=1;i<=sondiv.length;i++){
 let arrwq=Array.from(document.querySelectorAll(".part"+i+" img"));

 part.push(arrwq);
} 

for(let x=0;x<sondiv.length;x++){
for(let i=0;i<part[x].length;i++){
 if(i==0){
	 part[x][i].style.cssText="display:flex";
	 
 }else{
	  part[x][i].style.cssText="display:none";
 }
 
 
} 
}


console.log(part);

let pareindex=0;



for(let i=0;i<sondiv.length;i++){
	
	arrOFImag[i]=sondiv[i];
	arrOFImag[i].addEventListener("click",function(e){
	maindiplapic.style.cssText="display:flex";
	sonpic.style.backgroundImage=`url(${part[i][0].src})`;
	console.log(`the index of div that clicked on is ${i}`);
	console.log(`the length ${part[i].length}`);

	index=i;
	
	console.log(e)
	
	
	
	});
	
	
}



let r=0;

console.log(part[index][r-1]);
console.log(r);


function prevmouseaction(){
	if(r===0 || r>=part[index].length ){
	r=part[index].length;
	sonpic.style.backgroundImage=`url(${part[index][r-1].src})`;
	--r;
	}else{
	sonpic.style.backgroundImage=`url(${part[index][r-1].src})`;
	--r;
	}
	console.log(r);
}

function nexxmouseaction(){
				
	if(r==part[index].length-1 || r>=part[index].length){
	r=-1;
	sonpic.style.backgroundImage=`url(${part[index][r+1].src})`;
	r++;
	}else{
	sonpic.style.backgroundImage=`url(${part[index][r+1].src})`;
	r++;
	}
	console.log(r);
}

function colsee(){
	maindiplapic.style.cssText="display:none";
	r=0;
	
}

closs.addEventListener("click",colsee);
nexxx.addEventListener("click",nexxmouseaction);
prev.addEventListener("click",prevmouseaction);


document.body.addEventListener("keydown",function(e){
	
	if(e.keyCode==39){
		nexxmouseaction();
	}else if(e.keyCode==37){
		prevmouseaction();
		
	}else if(e.keyCode==27){
		colsee();
	}
})








