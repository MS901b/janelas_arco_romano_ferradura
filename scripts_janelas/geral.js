function monitora_texto(item)
{
	var valor = $('SalvaLocal').Pega(nomeSoft, PosicaoAtual.Atividade + item);
	if(valor != 'undefined')
		$(item).setValue(valor);
	$(item).observe('change', function(ev)
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
	
	func1=func1.replace(/pi/gi,"π");
	var funcBkp = func1;
	
	var calcula = false;
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