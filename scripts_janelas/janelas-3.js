
/**
 * Funcao que carrega os valores preenchidas pelo aluno. É chamada no onLoad de cada parte de uma atividade.
 * @param {Object} id	id da atividade e a parte. Ex: A1_P1, A2_P2
 */

function initAtividade(atv,id) {
	if(getResp(atv)==1) setResp(atv,2);
	
	var respostasId = new Array();
	respostasId = pegaNomesResp(id);
	
	for (var i = 0; i < respostasId.length; i++) {
		carregaValorResposta(atv,respostasId[i]);
	}
}



function proximo()
{  		$('ferradura').proximo();
}

function anterior()
{  		$('ferradura').anterior();
}

function repita()
{  		$('ferradura').play();
}

/**
 * Carrega a Resposta quando o aluno dá refresh na página.
 * @param {Object} id 	id da resposta
 */
function carregaValorResposta(atv,id) {
	var elem = $(id);
	var Resp;
	
	Resp = getResp(atv+'_'+id);
	if (Resp=="undefined") Resp=null
	if (elem.type=='radio')
	{
		if(Resp=='true') elem.checked=true;
		else elem.checked=false;
	};
	if (elem.type=='text')
	{		
		elem.value=((Resp!=null) ? Resp : '');
	}

}




// Add listener
function updateListener(objName) {

	var applet = document.ggbApplet;
	if (objName=='E') {
		var coordX=applet.getXcoord(objName);
		var coordY=applet.getYcoord(objName);
		applet.unregisterUpdateListener("updateListener");
		applet.setCoords(objName,roundNumber(coordX,0),coordY);
		applet.registerUpdateListener("updateListener");
		}
		
	
}

function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}

var base= new Array();
var altura= new Array();
var area= new Array();			
var num_init_retries= 0


function tracarGraficoA3() {
	var applet = document.ggbApplet;
	applet.setVisible('A',true);
	applet.setVisible('a',true);
	applet.setVisible('b',true);
	applet.setVisible('f',true);	
}
