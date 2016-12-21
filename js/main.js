		/////NORMAL FLOW//////
		/*var didScroll = false;
		var nxtPanelNum = 2;
		window.onkeydown = changePanelOnScroll;
		function changePanelOnScroll(e) {
			if(e.keyCode == 40)
    		{	didScroll = true;
    		}
		}
		setInterval(function() {
    		if(didScroll) {
      		didScroll = false;
      		console.log('You scrolled');
      		if(nxtPanelNum < 4)
      		{	changePanel(nxtPanelNum);}
      		nxtPanelNum += 1;
    		}
		}, 300);
		*/
		var instruc = document.getElementById("instruction");
		if (instruc.addEventListener) {
      	instruc.addEventListener("click", changePanel, false);
      } else {
      	instruc.attachEvent('onclick', changePanel);
      }
      
		var nxtPanelNum = 2;
		window.onkeydown = canChangePanel;
		
		function canChangePanel(e){
			if(e.keyCode == 40){	changePanel();}
		}
		
		function changePanel(){
			if(nxtPanelNum < 4){
				document.getElementById('panel-'+(nxtPanelNum-1)).style.display = 'none';
				document.getElementById('panel-'+nxtPanelNum).style.display = 'block';
				nxtPanelNum += 1;
			}
		}
		
		///RELOAD BUTTON////
		var reload = document.getElementById("reload");
      if (reload.addEventListener) {
      	reload.addEventListener("click", reloadPage, false);
      } else {
      	reload.attachEvent('onclick', reloadPage);
      }
      
      function reloadPage() {
      	location.reload()
      }
      
