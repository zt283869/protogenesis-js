			function $(str){
				return document.getElementById(str);
			}
			//字符
			function toArray(att,att2,att3){
				var fg_inp1 = $(att).value;
				var fg_sap = $(att2);
				var fg_inp2 = $(att3).value;
				var arr = [];
				var arr2 = [];
				var w = fg_inp1.split(",");					
				var doc = w.join(fg_inp2);	
					arr.push(doc);
					fg_sap.innerHTML = arr;						
			}
			$("fg_but").onclick = function(){
				toArray("fg_inp1","fg_sap","fg_inp2");
			}
			
			
			//切割字符
			function mySubString(att1,att2,att3,att4){
				var qg_inp = $(att1).value;
				var qi_inp = $(att2).value;
				var js_inp = $(att3).value;
				var qg_sp = $(att4);
				
				var strnum = qg_inp.substr(qi_inp,js_inp);
				qg_sp.innerHTML = strnum;
			}
			$("qg_but").onclick = function(){
				mySubString("qg_inp","qi_inp","js_inp","qg_sp")
			}
			//创建节点
			function $create(yertt,text){
					var yert = document.createElement(yertt);
					yert.style.cssText="position: absolute;width: 100%;height: 200px;background: red;color:white;";					
					var txt = document.createTextNode(text);
					yert.appendChild(txt);
					$("box").appendChild(yert);									
			}			
			$("cjbut").onclick = function(){
				if($("yuanse").value==""){
					alert("请输入元素");
				}
				$create($("yuanse").value,$("textnode").value);
				
			}
			
			
			//去重
			function objqc(){
				var str = $("qc").value;
				var arr = [];
				for(var i=0;i<str.length;i++){
					if(arr.indexOf(str[i])>-1){
						continue;
					}
					arr.push(str[i]);
				}
				return $("qcsp").innerHTML = arr;
			}
			$("qcbut").onclick = function(){
				objqc();
			}