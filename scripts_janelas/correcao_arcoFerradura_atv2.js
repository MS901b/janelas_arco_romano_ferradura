Event.observe(document, 'dom:safeLoaded', function(){

	BlocoNotas = new Blocao();
	
	// initAtividade('atividade_2','parte'+(PosicaoAtual.Parte+1));
	
	if(PosicaoAtual.Parte==0)
	{
		if ($('SalvaLocal').Pega(nomeSoft, 'atividade_2') != '3')
			$('SalvaLocal').Salva(nomeSoft, 'atividade_2', '2');
		$w('parte1_q1_a_11 parte1_q1_b_11').each(monitora_texto);
	}

	if(PosicaoAtual.Parte==1)
	{
		$w('parte2_q2_a parte2_q2_b parte2_q2_c parte2_q3_a').each(monitora_texto);
	}
	
	if(PosicaoAtual.Parte==2)
	{
		var a = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + 'parte2_q3_a');
		$('altFerradura').update("h(x) = " + a);
		
		$w('parte3_q4_a parte3_q4_b parte3_q4_c parte3_q5_a parte3_q5_b').each(monitora_texto);
	}
	
	if(PosicaoAtual.Parte==3)
	{
		var a = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + 'parte2_q3_a');
		$('altFerradura').update("h(x) = " + a);
		
		var b = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + 'parte3_q5_b');
		$('areaMax').update(b);
		
		$w('parte4_q6_a parte4_q6_b parte4_q7_a').each(monitora_texto);
		
		$('tracar_grafico').observe('click', function(ev)
		{
			var applet = document.ggbApplet;
			applet.setVisible('A',true);
			applet.setVisible('a',true);
			applet.setVisible('b',true);
			applet.setVisible('f',true);
		});
	}
	
	// if(PosicaoAtual.Parte==4)
	// {
		// permiteContinuar(true);
	// }
});


function tudoCerto()
{
	if(PosicaoAtual.Parte==3)
		$('SalvaLocal').Salva(nomeSoft, 'atividade_2', '3');
} 




// Funções de correção

// Parte 1
function corrige_q_1_a(valor)
{if(processaExpressaoParenteses(valor[0])==60) return [true];
  else return [false];
}

function corrige_q_1_b(valor)
{if(processaExpressaoParenteses(valor[0])==30) return [true];
  else return [false];
}


// Parte 2
function corrige_q_2_a(valor)
{return [compararFuncao(valor[0],(4*Math.PI/6)+" x")];
}
 
function corrige_q_2_b(valor)
{return [compararFuncao(valor[0],(Math.PI/12)+" x")];
}

function corrige_q_2_c(valor)
{return [compararFuncao(valor[0],(5*Math.PI/6)+" x")];
}
 
function corrige_q_3_a(valor)
{return [compararFuncao(valor[0],"200-x/2-5*"+Math.PI+"*x/12")];
}


// Parte 3
function corrige_q_4_a(valor)
{return [compararFuncao(valor[0],(Math.PI/6)+" x^2")];
}

function corrige_q_4_b(valor)
{return [compararFuncao(valor[0],(Math.PI/48)+" x^2")];
}

function corrige_q_4_c(valor)
{return [compararFuncao(valor[0],"0.87*x^2/4")];
}

function corrige_q_5_a(valor)
{return [compararFuncao(valor[0],"(200-x/2-5*"+Math.PI+"*x/12)*x")];
}

function corrige_q_5_b(valor)
{return [compararFuncao(valor[0],"(200-x/2-5*"+Math.PI+"*x/12)*x + 0.87*(x^2/4) + 10*"+Math.PI+"*x^2/48")];
}


// Parte 4
function corrige_q_6_a(valor)
{
	var resp = processaExpressaoParenteses(valor[0]);
	return [Math.abs(resp - 10672) < 50];
}

function corrige_q_6_b(valor)   
{
	var resp = processaExpressaoParenteses(valor[0]);
	return [Math.abs(resp - 106.7) < 5];
}

function corrige_q_7_a(valor)   
{
	var resp = processaExpressaoParenteses(valor[0]);
	// Engloba todos os possíveis valores de x aceitos em 6B (101,7 <= x <= 111,7)
	return [Math.abs(resp - 113.66) < 5];
}


function selecionou_q_2_a()
{var applet = document.ggbApplet;
	applet.setVisible('C_m',false);
	applet.setVisible('ct1',false);
	applet.setVisible('ct2',false);
	applet.setVisible('C_p',false);
	applet.setVisible('b',false);
	applet.setVisible('C_t',true);
	applet.setVisible('c_1',true);
}

function selecionou_q_2_b()
{var applet = document.ggbApplet;
	applet.setVisible('C_t',false);
	applet.setVisible('ct1',false);
	applet.setVisible('ct2',false);
	applet.setVisible('C_p',false);
	applet.setVisible('b',false);
	applet.setVisible('C_m',true);
	applet.setVisible('c_1',true);
}

function selecionou_q_2_c()
{var applet = document.ggbApplet;
	applet.setVisible('C_p',false);
	applet.setVisible('C_m',false);
	applet.setVisible('C_t',true);
	applet.setVisible('ct1',true);
	applet.setVisible('b',false);
	applet.setVisible('ct2',true);
	applet.setVisible('c_1',true);
}


function selecionou_q_3_a()
{var applet = document.ggbApplet;
	applet.setVisible('C_m',false);
	applet.setVisible('ct1',false);
	applet.setVisible('ct2',false);
	applet.setVisible('C_p',false);
	applet.setVisible('C_t',false);
	applet.setVisible('c_1',true);
	applet.setVisible('b',true);
}

function selecionou_q_4_a()
{var applet = document.ggbApplet;
	applet.setVisible('S_m',false);
	applet.setVisible('setor2',false);
	applet.setVisible('losango',false);
	applet.setVisible('retangulo',false);
	applet.setVisible('S_p',true);
}

function selecionou_q_4_b()
{var applet = document.ggbApplet;
	applet.setVisible('S_p',false);
	applet.setVisible('losango',false);
	applet.setVisible('retangulo',false);
	applet.setVisible('setor2',false);
	applet.setVisible('S_m',true);
}

function selecionou_q_4_c()
{var applet = document.ggbApplet;
	applet.setVisible('S_m',false);
	applet.setVisible('S_p',false);
	applet.setVisible('retangulo',false);
	applet.setVisible('setor2',false);
	applet.setVisible('losango',true);
}

function selecionou_q_5_a()
{var applet = document.ggbApplet;
	applet.setVisible('S_m',false);
	applet.setVisible('S_p',false);
	applet.setVisible('losango',false);
	applet.setVisible('setor2',false);
	applet.setVisible('retangulo',true);
}

function selecionou_q_5_b()
{var applet = document.ggbApplet;
	applet.setVisible('S_m',true);
	applet.setVisible('S_p',true);
	applet.setVisible('setor2',true);
	applet.setVisible('retangulo',true);
	applet.setVisible('losango',true);
}