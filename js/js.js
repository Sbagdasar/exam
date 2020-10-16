'use strict';
window.onload = function () {

    init1();
    function init1(){
        // zadacha 1
        let poleZ1= ce("form");
        poleZ1.name = "formaZ1";
        poleZ1.id = "formaZ1";

        let tableZ1 = ce("table");
        let trZ1 = ce("tr");
        let td1Z1 = ce("td");
        let td2Z1 = ce("td");

        td1Z1.innerHTML = `<label for="textZ1">Введи число</label>`;


        let inpZ1 = ce("input");
        inpZ1.name = "textZ1";
        inpZ1.id = "textZ1";
        inpZ1.addEventListener("keyup",testKey);


        let submZ1 = ce("input");
        submZ1.type="submit";
        submZ1.value="Найти";

        let hr = ce("hr");

        document.body.append(poleZ1);
        poleZ1.append(hr);
        poleZ1.append(tableZ1);
        tableZ1.append(trZ1);
        trZ1.append(td1Z1);
        trZ1.append(td2Z1);
        td2Z1.append(inpZ1);
        td2Z1.append(submZ1);

        // zadacha 2
        let divZ1 = ce('div');

        let pZ1 = ce('p');
            pZ1.id = "vivod";

        divZ1.append(pZ1);
        document.body.append(divZ1);

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

        document.body.prepend(pole);
        pole.append(table);
        table.append(tr);
        tr.append(td1);
        tr.append(td2);
        td2.append(inp);
        td2.append(subm);

    }


    let x = document.querySelector('#formaZ1');
    x.addEventListener("submit", getFormInfoZ1);

    function getFormInfoZ1(e) {
        e.preventDefault();
        let elem = document.querySelector(`#textZ1`);
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

        let p = document.querySelector("#vivod")
        p.innerHTML = `Локальные максимумы: ${max.join(", ")} Количество локальных максимумов: ${k}`;
    }

    function testKey(){
        let val = document.querySelector("#textZ1")
        let testVal=  val.value;
        if(+testVal!=val.value) {
            val.value = testVal.substring(0, testVal.length - 1)

        }
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
			 alert(s + "- Это полиндром");
			 elem.value = "";
		 } else {
			 alert(s + "- Это не полиндром");
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