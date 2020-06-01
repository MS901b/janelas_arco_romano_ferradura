/********************
 * Funcoes do Flash *
 ********************/

// Retorna uma Array com todas as inputs que começam com "parte"
function pegaNomesResp(id) {
	var allElements = $$('[id^='+id+']');
	var allNames = Array();
	for (var i=0;i<allElements.length;i++) 
	{
		allNames.push(allElements[i].id);
	}
	return allNames.uniq();
}

function setMultiplaEscolha(id,i,qtd)
{
	for(var k=1;k<=qtd;k++)
	{
		if(k!=i) setResp(id+k,false);
		else setResp(id+i,true);
	}
}	


//Funcao que pega no flash o valor da resposta do id passado.
function getResp(id) {
	return $('SalvaLocal').Pega(nomeSoft,id);
}

//Funcao que guarda no flash o valor da resposta do id passado.
function setResp(id,valor) {
	$('SalvaLocal').Salva(nomeSoft,id,valor);
}

// Apaga todas as resposta guardadas.
function apagaTodasResp() {
	return ($('SalvaLocal').ApagaTudo(nomeSoft));
}

function apagaResp(valor) {
	return $('SalvaLocal').Apaga(nomeSoft,valor);
}

function monitora_texto(item)
{
	if(typeof item == 'object')
		item = item.id;
	var valor = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + item);
	if(valor != 'undefined')
		$(item).setValue(valor);
	$(item).observe('change', function(ev)
	{
		var item = Event.element(ev);
		item.fire('input:change');
	});

	$(item).observe('input:change', function(ev)
	{
		var item = Event.element(ev);
		$('SalvaLocal').Salva(nomeSoft, PosicaoAtual.Atividade + item.id, item.value);
	});
}


function monitora_radio(item)
{
	var valor = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + item);
	if(valor != 'undefined')
		$(item).checked = eval(valor);
	
	$(item).observe('change', function(ev)
	{
		ev.findElement('.input_radio').select('input[type=radio]').each(function(item){
			$('SalvaLocal').Salva(nomeSoft, PosicaoAtual.Atividade + item.id, item.checked);
		})
	});
}



function compararFuncao(func1,func2)
{
	var calcula = false;
	
	func1=func1.replace(/pi/gi,"π");
	var funcBkp = func1;


 	if (!func1.empty())
	{
		func1=func1.replace(/[=a-wy-z]/gi,"");
	    if(funcBkp==func1)
		{
			func1=func1.replace(/x/gi, "(x)")
					 .replace(',', '.')
					 .replace(/π/g, "(pi)")
					 .replace(/²/g, "^2")
					 .replace(/√([0-9\.]+)/g, "sqrt($1)")
					 .replace(/√/g, "sqrt");

			calcula = !func1.empty()
		}
	}
	var saida = false;
	
	
	if(calcula)
	{
		var applet = document.ggbApplet;
		applet.setErrorDialogsActive(false);
		
		applet.deleteObject('RespComparador');   
		applet.deleteObject("func_3");   
		applet.deleteObject("func_1");   
		applet.deleteObject("func_2");    
		
		applet.evalCommand('RespComparador = 1');
		applet.evalCommand('RespComparador = Integral[abs(('+func1+')-('+func2+')),-1,1]');
		applet.setVisible('RespComparador', false);
		
		saida = applet.getValue('RespComparador');
	}
	

	if (saida !== false && saida<0.01) 
		return true;
	else
		return false;
}