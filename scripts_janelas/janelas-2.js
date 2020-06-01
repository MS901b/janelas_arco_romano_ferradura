
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


function initVitral()
{
	if(getResp('atividade_2_setado') != '1')
		return;
	var coresArco = new Array(),
	    coresGrade= new Array();
	
	var fat = parseInt(getResp('atividade_2_nfatias'));
	var grad = parseInt(getResp('atividade_2_grade'));
	
	$('vitral').fatias(fat);
	$('vitral').quadradinhos(grad);
	
	for(var i=0;i<fat;i++)
	{   coresArco[i]=getResp('atividade_2_cor_fatia'+i);
	}
	for(var i=0;i<grad;i++)
	{
		for(var j=0;j<grad;j++)
		coresGrade[i*(grad)+j]=getResp('atividade_2_cor_grade'+i+j);
	}
	
	$('vitral').poemCores(coresArco,coresGrade);
	
	switch(PosicaoAtual.Parte) 
	{
		case 0:
			$('fatias').setValue(fat);
			$('grade').setValue(grad);
			selecionarVitral();
		break;
		case 1:
			$('vitral').trava();
		break;
		case 2:
			$('vitral').trava();
		break;
		case 3:
			$('vitral').trava();
		break;
	}
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
	if(id.startsWith('parte2_q2_a'))
	{
		if (atv=='atividade_1' && (id.endsWith('4')||id.endsWith('5')))
		{
			if(Resp!=null) $(id).update(Resp);
		}
	}
}


/**
 * Funcao que plota os pontos gerados na tabela da atividade1 parte3 para o Geogebra da atividade1 parte5.
 */
function plotarPontos() {
	valoresBase = new Array();
	valoresArea = new Array();

	for (l = 2; l <= 7; l++){
		valorBase = processaExpressao(getResp("parte2_q2_a_"+l+"2_correto"));
		valorArea = processaExpressao(getResp("parte2_q2_a_"+l+"5_correto"));
		valoresBase.push(valorBase);
		valoresArea.push(valorArea/40);
		}
	var applet = document.ggbApplet;

	for (l = 0; l < valoresArea.length; l++) {
		applet.deleteObject("PONTO_"+l);
	  	applet.evalCommand("PONTO_"+l+"=(" + valoresBase[l] + "," + valoresArea[l] +")");
	  	applet.setVisible("PONTO_"+l, false);
		applet.setFixed("PONTO_"+l, true);
		applet.setColor("PONTO_"+l, 255, 106, 106);
		applet.setPointSize("PONTO_"+l, 2);
	}
	for (l = 0; l < valoresArea.length; l++) {
	  	applet.setVisible("PONTO_"+l, true);
	}
}

/**
 * Funcao que "traca" mostra o grafico na Atividade1 Parte5.
 */
function tracarGrafico() {
	var applet = document.ggbApplet;
	applet.setFixed('C',false);
	applet.setValue('mostra', 1);
}


function registerListeners() {
	var applet = document.ggbApplet;
	applet.registerUpdateListener("updateListener");
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

/*função para formatar as células da matriz da questão 2 (atividade 1)*/
function trataLinha(input)
{
	var linha = input.id.substr(12,1);
	
	var base = $('parte2_q2_a_'+linha+'2').value;
	var altura = $('parte2_q2_a_'+linha+'3').value;
	var raio;
	
	if(base.empty() && altura.empty())
		return;
	
	base = processaExpressao(base);
	altura = processaExpressao(altura);
	
	var divRaio = $('parte2_q2_a_'+linha+'4');
	var divArea = $('parte2_q2_a_'+linha+'5');
	
	if(isNaN(altura) || isNaN(base))
	{
		divArea.update('###');
		if(isNaN(base))
			divRaio.update('###');
	}
	
	if(!isNaN(base))
	{
		raio = (base/2).toFixed(2);
		setResp('a1_parte2_q2_a_'+linha+'4', raio);
		divRaio.update(raio);
	}
	
	if(!isNaN(base) && !isNaN(altura))
	{
		var area=(base*altura + (raio*raio*Math.PI)/2).toFixed(2);
		setResp('a1_parte2_q2_a_'+linha+'5', area);	
		divArea.update(area);
	}
	
}


function insereExpressao() {
	var expressao = getResp("atividade_1_resp_q6_c");
	var base = getResp('atividade_1_parte2_q3_a_11');
	
	var elem = $('expressao').update("A(x) = " + expressao + "");
	
	if(base=='undefined') base='155.6';
	$('b1').update(base);
	$('b2').update(base);
}


function insereBase()
{
	var base=getResp('atividade_1_parte2_q3_a_11');
	if(base=='undefined') base='155.6';
	$('baseMax').update(base);
}
	
	
function selecionarVitral()
{
	if($('vitral').tudoPintado())
	{
		if(PosicaoAtual.Parte!=0 || duascores())
		{
			setResp('atividade_2_setado', '1');
			if(PosicaoAtual.Parte==0)
			{
				permiteContinuar(true);
				
				$('fatias').trava();
				$('grade').trava();
				$('valor_inicial').addClassName('desabilitada');
				$('link_valor_inicial').update('Alterar vitral');
				$('link_valor_inicial').stopObserving();
				// $('Inserido').update('Você escolheu um vitral com as cores ao lado. Ele possui '+fat+' fatias no semicírculo e uma grade de dimensão '+grad+'x'+grad+'.');
				
				var fat = $('fatias').value;
				var grad = $('grade').value;
				var cores = $('vitral').pegaCores();
				setResp('atividade_2_nfatias',fat);
				setResp('atividade_2_grade',grad);
				
				for(var i=0;i<fat;i++)
					setResp('atividade_2_cor_fatia'+i,cores[0][i]);
				for(var i=0;i<grad;i++)
					for(var j=0;j<grad;j++)
						setResp('atividade_2_cor_grade'+i+j,cores[1][i][j]);			
				var Perg =  
				{
					conteudo: 'Você deseja alterar o vitral? Isso fará com que você precise refazer as questões que tinham como base esse vitral.',
					layout: ['seta_baixo','direita'],
					largura: 10,
					callback: unset_inicial,
					respostas: [{sim: 'Sim'}, {nao: 'Não'}]
				};
				var tmp = new PopupCallback($('link_valor_inicial'), Perg.conteudo,Perg.layout, Perg.largura, Perg.callback, Perg.respostas);
			}
			$('vitral').trava();
		}
		else
		{
			if(PosicaoAtual.Parte==0)
			{
				window.popup_alert.divText.update('Você precisa usar pelo menos duas cores diferentes no vitral.');
				window.popup_alert.abre();
			}
		}
	}
	else
	{
		window.popup_alert.divText.update('Para definir o vitral é preciso que ele esteja todo colorido.');
		window.popup_alert.abre();
	}

}


function unset_inicial() {
	if (this.resultado == 'sim') {
		setResp('atividade_2_setado',0);
		permiteContinuar(false)
		setResp('automacao_atividade_2_parte_1',0);
		setResp('automacao_atividade_2_parte_2',0);
		setResp('automacao_atividade_2_parte_3',0);
		gerencia_partes();
		$('vitral').destrava();
		$('fatias').destrava();
		$('grade').destrava();
		$('valor_inicial').removeClassName('desabilitada');
		// $('Inserido').update('');
		$('link_valor_inicial').update('Definir vitral');
		Event.stopObserving($('link_valor_inicial'), 'click');
		$('link_valor_inicial').observe('click',selecionarVitral);
	}
}


function roundNumber(num, dec) {
	var result = Math.round( Math.round( num * Math.pow( 10, dec + 1 ) ) / Math.pow( 10, 1 ) ) / Math.pow(10,dec);
	return result;
}
