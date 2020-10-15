'use strict'
window.onload = function () {
	// zadacha 2

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
		
		pole.addEventListener("submit", getFormInfo)
		
		let table = ce("table");
		let tr = ce("tr");
		let td1 = ce("td");
		let td2 = ce("td");
		
		td1.innerHTML = `<label for="text">Введи полиндром</label>`;
		
		
		let inp = ce("input");
			inp.name = "text";
			inp.id = "text";
		
		let subm = ce("input");
		subm.type="submit";
		subm.value="проверить";
		
		document.body.prepend(pole);
		pole.append(table);
		table.append(tr);
		tr.append(td1);
		tr.append(td2);
		td2.append(inp);
		td2.append(subm);
	}
	
	 function getFormInfo(e) {                                                                                    
        e.preventDefault();                                                                                       
        let elem = document.querySelector(`#text`);               
      
		let s = elem.value.trim();
	 
		let str = s.split("").reverse().join("");
			
			if(s===str && s!=""){
				alert(s + " Это полиндром");
				elem.value="";
			}else{
				alert(s + " Это не полиндром");
				elem.value="";
			}
	
    }
	

   init();
}