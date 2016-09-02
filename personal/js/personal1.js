var rains=[];
		var can=document.querySelector("#fcan");
		var ct=can.getContext("2d");
		init();
		
		setInterval(function(){
			rainsNum();
			ct.clearRect(0,0,800,600);
			init();
			dropDown();
		},50);
		//初始化
		function init(){
			ct.rect(0,0,800,600);
			ct.fillStyle='#000';
			ct.fill();
		}
		//产生随机雨滴
		function createRain(){
			var ix=Math.random()*800;
			var iy=Math.random()*50;
			var ir=Math.random()*4;
			var ivy=Math.random()*5+2;
			var rain={
				x:ix,
				y:iy,
				r:ir,
				vy:ivy,
				g:8
			};
			rains.push(rain);
		}
		function rainsNum(){
			createRain();
		}	
		//落下
		function dropDown(){
			var len=rains.length;
			for(var i=0;i<len;i++){
				drawRain(rains[i].x,rains[i].y,rains[i].r,ct);
				rains[i].v+=rains[i].g;
				rains[i].y+=rains[i].vy;
			}
		}
		//画雪花
		function drawRain(x,y,r,obj){
			obj.fillStyle='#fff';
			obj.beginPath();
			obj.arc(x,y,r,0,Math.PI*2,true);
			obj.closePath();
			obj.fill();
		}




