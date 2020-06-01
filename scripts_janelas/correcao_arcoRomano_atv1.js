
Event.observe(document, 'dom:safeLoaded', function(ev)
{
	TentaCarregar();
});

function TentaCarregar()
{
	BlocoNotas = new Blocao();

	// initAtividade('atividade_1','parte'+(PosicaoAtual.Parte+1));

	if(PosicaoAtual.Parte==0)
	{
		if ($('SalvaLocal').Pega(nomeSoft, 'atividade_1') != '3')
			$('SalvaLocal').Salva(nomeSoft, 'atividade_1', '2');
		
		$w('parte1_q1_a_1 parte1_q1_a_2 parte1_q1_a_3').each(monitora_radio);
	}

	if(PosicaoAtual.Parte==1)
	{
		$('parte2_q2').select('input').each(monitora_texto);
		$('parte2_q3').select('input').each(monitora_texto);
		$('parte2_q2').select('input').each(function(input)
		{
			trataLinha(input);
			input.observe('change', function(ev){trataLinha(ev.findElement('input'));});
		});
	}
	
	if(PosicaoAtual.Parte>=2)
	{
		BlocoNotas = new SuperBlocao();
		MeuBloco[0]='<em>Tabela da Questão 2<\/em>';
		var suf;
		var area= new Array();
		var altura= new Array();
		var raio= new Array();
		var base=new Array();
		
		for(suf=2;suf<12;suf++) base[suf]=String(getResp('parte2_q2_a_'+suf+'2_correto')).replace(/\./g,",");
		for(suf=2;suf<12;suf++) altura[suf]=String(getResp('parte2_q2_a_'+suf+'3_correto')).replace(/\./g,",");
		for(suf=2;suf<12;suf++) area[suf]=String(getResp('parte2_q2_a_'+suf+'5_correto')).replace(/\./g,",");
		for(suf=2;suf<12;suf++) raio[suf]=String(getResp('parte2_q2_a_'+suf+'4_correto')).replace(/\./g,",");

		for(suf=2;suf<12;suf++){
			if ((base[suf]==null) || (base[suf]=="null")) base[suf]="0";
			if ((altura[suf]==null) || (altura[suf]=="null")) altura[suf]="0";
			if ((area[suf]==null) || (area[suf]=="null")) area[suf]="0";
			if ((raio[suf]==null) || (raio[suf]=="null")) raio[suf]="0";

		}

		
		MeuBloco[1]= 
		[	
			[{value: 'Perímetro', largura: 4},{value: 'Base (x)', largura: 4},{value: 'Altura (h)', largura: 4}, {value: 'Raio', largura: 4}, {value: 'Área (cm²)', largura: 4}],				
			[{value: '400', tipo: 'texto'}, {value: base[2], tipo: 'texto'}, {value: altura[2], tipo: 'texto'}, {value: raio[2], tipo: 'texto'}, {value: area[2], tipo: 'texto'}],				
			[{value: '400', tipo: 'texto'}, {value: base[3], tipo: 'texto'}, {value: altura[3], tipo: 'texto'}, {value: raio[3], tipo: 'texto'}, {value: area[3], tipo: 'texto'}],
			[{value: '400', tipo: 'texto'}, {value: base[4], tipo: 'texto'}, {value: altura[4], tipo: 'texto'}, {value: raio[4], tipo: 'texto'}, {value: area[4], tipo: 'texto'}],
			[{value: '400', tipo: 'texto'}, {value: base[5], tipo: 'texto'}, {value: altura[5], tipo: 'texto'}, {value: raio[5], tipo: 'texto'}, {value: area[5], tipo: 'texto'}],
			[{value: '400', tipo: 'texto'}, {value: base[6], tipo: 'texto'}, {value: altura[6], tipo: 'texto'}, {value: raio[6], tipo: 'texto'}, {value: area[6], tipo: 'texto'}],
			[{value: '400', tipo: 'texto'}, {value: base[7], tipo: 'texto'}, {value: altura[7], tipo: 'texto'}, {value: raio[7], tipo: 'texto'}, {value: area[7], tipo: 'texto'}]
		];

	}

	if(PosicaoAtual.Parte==2)
	{
		$w('parte3_q4_a_11 parte3_q4_a_12 parte3_q4_b').each(monitora_texto);
	}
	
	if(PosicaoAtual.Parte==3)
	{
		$w('parte4_q5_a parte4_q5_b parte4_q6_a parte4_q6_b parte4_q6_c').each(monitora_texto)
	}
	
	if(PosicaoAtual.Parte==4)
	{					
		insereExpressao();
		$w('parte5_q7_a parte5_q8_a').each(monitora_texto);
		$w('parte5_q9_a_1 parte5_q9_a_2 parte5_q9_a_3').each(monitora_radio);
	}
}


/* PARTE 1 */

function corrige_q_1_a(valor)	
{
	return [valor[0]?false:null, valor[1]?true:null, valor[2]?false:null];
} 
 

/* PARTE 2 */
 
function passouteste(valor,pos)
{
	var i;
	for(i=0; i<20 && i!=pos; i=i+2)
	{
		if(valor[i]==valor[pos] && valor[i+1]==valor[pos+1]) return false;
	}
	return[1];
}
	
function passouteste2(v0,v1)
{
	var pi=Math.PI;
	v0 = Number(v0);
	v1 = Number(v1);
	
	return (v0<=156 && v0+2*v1+pi*v0/2<=402 && 
			v0+2*v1+pi*v0/2>=397 && v0>=0 && v1>=0);
}

function corrige_q_2_a(valor)
{
	for(var i = 0; i<valor.length; i++)
		valor[i] = processaExpressao(valor[i]);
		
	var respostas = new Array();
	respostas.push(passouteste2(valor[0],valor[1]) && passouteste(valor,0));
	respostas.push(passouteste2(valor[2],valor[3]) && passouteste(valor,2));
	respostas.push(passouteste2(valor[4],valor[5]) && passouteste(valor,4)); 
	respostas.push(passouteste2(valor[6],valor[7]) && passouteste(valor,6)); 
	respostas.push(passouteste2(valor[8],valor[9]) && passouteste(valor,8)); 
	respostas.push(passouteste2(valor[10],valor[11]) && passouteste(valor,10)); 

	var tudoCerto = ( respostas[0] && respostas[1] && respostas[2] && respostas[3] && respostas[4] && respostas[5] );

	if (tudoCerto)
		for (var i=2;i<(respostas.length+2);i++)
		{
			//base
			setResp('parte2_q2_a_'+i+'2_correto',roundNumber(processaExpressao($('parte2_q2_a_'+i+'2').value),2));
			
			//altura
			setResp('parte2_q2_a_'+i+'3_correto',roundNumber(processaExpressao($('parte2_q2_a_'+i+'3').value),2));
						
			//area
			setResp('parte2_q2_a_'+i+'5_correto',roundNumber(processaExpressao($('parte2_q2_a_'+i+'5').innerHTML),2));
			
			//raio
			setResp('parte2_q2_a_'+i+'4_correto',roundNumber(processaExpressao($('parte2_q2_a_'+i+'4').innerHTML),2));
		}
	
	return [respostas[0], respostas[0],
			respostas[1], respostas[1],
			respostas[2], respostas[2],
			respostas[3], respostas[3],
			respostas[4], respostas[4],
			respostas[5], respostas[5]];
}

//Vários campos dependentes: no caso, uma matriz que somente está correta com um conjunto de respostas
//Veja que o Array possui tamanho 1, apesar de 5 campos na questão!
function corrige_q_3_a(valor)
{
	valor[0] = processaExpressao(valor[0]);
	if(isNaN(valor[0])) return [false]; 
	return [valor[0]>=155.5 && valor[0] <= 156];
}

function corrige_q_3_b(valor)
{
	valor[0] = processaExpressao(valor[0]);
	if(isNaN(valor[0])) return [false];
	return [valor==0];
}



/* PARTE 3 */

function corrige_q_4_a(valor)
{
	var i,j=-1;
	var maior=2, val1, val2, val3;
	var area= new Array();
	var altura= new Array();
 
	for(i=2;i<12;i++) base[i]=getResp('parte2_q2_a_'+i+'2_correto');
	for(i=2;i<12;i++) altura[i]=getResp('parte2_q2_a_'+i+'3_correto');
	for(i=2;i<12;i++) area[i]=getResp('parte2_q2_a_'+i+'5_correto');
	for(i=2;i<12;i++) 
	{
		val1=Number(area[i]);
		val2=Number(area[maior]);
		if(val1>val2) maior=i, j=-1;
		if(val1==val2) j=i;
	}
	val1=processaExpressao(valor[0]);
	val2=processaExpressao(valor[1]);

	if(!(isNaN(val1)) && !(isNaN(val2)))
	{
		val1=Number(val1);
		val2=Number(val2);
		if(val1==base[maior] && val2==altura[maior]) 
			return[true,true];
		else if(j>=0 && val1==base[j] && val2==altura[j])
				return[true,true];
	}
	return[false,false];
}

function corrige_q_4_b(valor)
{var i;
 var maior=2, val1, val2;
 var suf;
 var area= new Array();
 
	for(suf=2;suf<12;suf++) area[suf]=getResp('parte2_q2_a_'+suf+'5_correto');
	for(i=2;i<12;i++) 
	{
		val1=Number(area[i]);
		val2=Number(area[maior]);
		if(val1>val2) maior=i;
	}

	val1=processaExpressao(String(valor));
	if(isNaN(val1)) return[false];
	else 
	{  	val1=Number(val1);
		return [val1 == area[maior]];

	}
}

/* PARTE 4 */

function corrige_q_5_a(valor)
{
	return [compararFuncao(valor[0], "pi*x/2")];
}

function corrige_q_5_b(valor)
{
	return [compararFuncao(valor[0], "(400-pi*x/2-x)/2")];
}

function corrige_q_6_a(valor)
{
	return [compararFuncao(valor[0],"(pi*(x/2)^2)/2")];
}

function corrige_q_6_b(valor)
{
	return [compararFuncao(valor[0],"x*(400-pi*x/2-x)/2")];
}

function corrige_q_6_c(valor)
{
	var correto = compararFuncao(valor[0],"pi/2*(x/2)^2+x*(400-pi*x/2-x)/2");
	setResp('atividade_1_resp_q6_c',valor[0]);
	return [correto];
}

/*
	Aqui está um exemplo de função que é chamada pelo popup com pergunta (callback)
*/


function corrige_q_7_8_a(valor)   
{
	valor[0] = processaExpressao(valor[0]);
	return [valor[0] >= 109.5 && valor[0]<=114.2];
}

function corrige_q_9_a(valor)	
{
	return [valor[0]?false:null, valor[1]?false:null, valor[2]?true:null];
}

function ggbOnInit() {
	var applet = document.ggbApplet;
	//registerListeners();
	if(PosicaoAtual.Parte==3)
	{
			applet.setFixed('C',true);
			applet.setVisible('C',false);
			applet.setVisible('func_1',false);
			applet.setVisible('func_2',false);
			applet.setVisible('func_3',false);
			applet.setVisible('RespComparador',false);
	}
	
	if(PosicaoAtual.Parte==4)
	{
		var applet = document.ggbApplet;
		applet.setValue('mostra', 0);
	}
	
}

function questoesCertas(parte) {

}

function tudoCerto()
{
	if(PosicaoAtual.Parte==4)
	{ setResp('atividade_1', '3');
	}
} 

function selecionou_q_5_a()
{var applet = document.ggbApplet;
	applet.setVisible('p_1',true);
	applet.setVisible('s_1',false);
	applet.setLineThickness('d',3);
	applet.setFilling('d',0);
	applet.setVisible('poly2',false);
	applet.setVisible('g_1',false);
}

function selecionou_q_5_b()
{var applet = document.ggbApplet;
	applet.setVisible('p_1',false);
	applet.setVisible('s_1',true);
	applet.setLineThickness('d',3);
	applet.setFilling('d',0);
	applet.setVisible('poly2',false);
	applet.setVisible('g_1',false);
}

function selecionou_q_6_a()
{var applet = document.ggbApplet;
	applet.setVisible('p_1',false);
	applet.setVisible('s_1',false);
	applet.setLineThickness('d',7);
	applet.setFilling('d',0.4);
	applet.setVisible('poly2',false);
	applet.setVisible('g_1',true);
}

function selecionou_q_6_b()
{var applet = document.ggbApplet;
	applet.setVisible('p_1',false);
	applet.setVisible('s_1',false);
	applet.setLineThickness('d',3);
	applet.setFilling('d',0);
	applet.setVisible('poly2',true);
	applet.setVisible('g_1',false);
}

function selecionou_q_6_c()
{var applet = document.ggbApplet;
	applet.setVisible('p_1',false);
	applet.setVisible('s_1',false);
	applet.setLineThickness('d',7);
	applet.setFilling('d',0.4);
	applet.setVisible('poly2',true);
	applet.setVisible('g_1',false);
}
