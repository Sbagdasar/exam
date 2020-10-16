'use strict';
window.onload = function () {
// задача 2
    init1();
    function init1(){

        let pole= ce("form");
        pole.name = "forma";
        pole.id= "forma";

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

        let hr= ce("hr");

        document.body.prepend(pole);
        pole.append(table);
        pole.append(hr);
        table.append(tr);
        tr.append(td1);
        tr.append(td2);
        td2.append(inp);
        td2.append(subm);

    }

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

	 function getFormInfo(e) {
		 e.preventDefault();
		 let elem = document.querySelector(`#text`);

		 let s = elem.value.trim().toLowerCase();
		 	s.replace(/[^A-Z0-9]/ig, "");

		 // способ 1
		 let str = s.split("").reverse().join("");

		 if (s === str && s != "") {
			 alert(s + " - Это полиндром");
			 elem.value = "";
		 } else {
			 alert(s + " - Это не полиндром");
			 elem.value = "";
		 }
			 // способ 2
			 /* let st = "";
			  for(let i=s.length-1;i>=0;i--){
				 st+=s[i]
			  }
			  (s===st)?alert(s + " - это полидром"):alert(s + " - это не полидром");*/
	 }

}