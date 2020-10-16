'use strict'
window.onload = function () {
	// zadacha 1
init1();
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
			inp.addEventListener("keyup",testKey);
		//inp.setAttribute("pattern", "\d+");
		
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
		let k=0;

	  	for(let i=0;i<arr.length;i++){
	  		if(arr[i-1]==undefined && arr[i]>arr[i+1]){
				max.push(arr[i]);
				k++;
			}
			if(arr[i+1]==undefined && arr[i]>arr[i-1]){
				max.push(arr[i]);
				k++;
			}
	  		if(arr[i]>arr[i+1] && arr[i]>arr[i-1]) {


				max.push(arr[i]) ;

				k++;
			}

		}

		let div = ce('div');

	  	let p = ce('p');
	  	p.innerHTML = `Локальные максимумы: ${max.join(", ")} Количество локальных максимумов: ${k}`;
	  	div.append(p);
	  	document.body.append(div);
    }

		function testKey(){
	 		let val = document.querySelector("#text")
			let testVal=  val.value;
			if(+testVal!=val.value) {
				val.value = testVal.substring(0, testVal.length - 1)

			}
		}
   
}