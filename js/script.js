'use strict'
window.onload = function () {
	// zadacha 1
init();
	function ce(name="div",text,event,fn){
		let x = document.createElement(name);
		if(text!=undefined){
			x.innerHTML=text;
		}

		if(event!=undefined){
			x.addEventListener(event,fn);
		}

		return x;
	}
	
	function init(){
		let pole= ce("form");
		pole.name = "forma";
		
		let table = ce("table");
		let tr = ce("tr");
		let td1 = ce("td");
		let td2 = ce("td");
		
		td1.innerHTML = `<label for="text">Введи число</label>`;
		
		
		let inp = ce("input");
			inp.name = "text";
			inp.id = "text";
		
		let subm = ce("input");
		subm.type="submit";
		subm.value="Найти";
		
		document.body.prepend(pole);
		pole.append(table);
		table.append(tr);
		tr.append(td1);
		tr.append(td2);
		td2.append(inp);
		td2.append(subm);
	}
	
	
	let x = document.querySelector('form');
	x.addEventListener("submit", getFormInfo);
	
	 function getFormInfo(e) {                                                                                    
        e.preventDefault();                                                                                       
        let elem = document.querySelector(`#text`);               
      
		let s = elem.value.trim();
	 
	  	let arr = s.split("");
		let max=[];
	  	for(let i=1;i<arr.length;i++){
	  		if(arr[i]>arr[i+1] &&arr[i]>arr[i-1]) {
				max.push(arr[i]);
			}
		}

	console.log(arr)
	console.log(max)
    }
	

   
}