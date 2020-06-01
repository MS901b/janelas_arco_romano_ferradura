function duascores()
{
	var cores = $('vitral').pegaCores();
	var fat = $('fatias').value;
	var grad = $('grade').value;
	
	// pra cada cor da fatia
	for(var i=0;i<fat;i++)
	{
		// ve se alguma cor de fatia próxima é diferente
		for(var k=i+1;k<fat;k++)
		{
			if(cores[0][i]!=cores[0][k]) return 1;
		}
		// ve se alguma cor da grade é diferente
		for(var k=0;k<grad;k++)
		{
			for(var j=0;j<grad;j++)
				if(cores[0][i]!=cores[1][k][j]) return 1;
		}
	}
	return 0;
}

function permeabilidadeTrecho(tip,j,k)
{
	var cores = $('vitral').pegaCores();
	
	if(tip=='f')var desejada = parseInt(cores[0][j]);
	else 		var desejada = parseInt(cores[1][j][k]);
	
	var fator = achaFator(desejada);
	return fator;
}


function achaFator(desejada)
{
	
   switch(parseInt(desejada))
   {
		case 39168:		return (3); break; //verde
		case 16776960:	return (8); break; //amarelo
		case 16777215:	return (9); break; //branco
		case 16711680:	return (2); break; //vermelho
		case 255:		return (1); break; //azul
		case 16711935:	return (4); break; //rosa
		case 65535:		return (7); break; //ciano
		default: alert('cor nao reconhecida');
	}
}


function mediaPermeabilidade()
{
	var medPerme=0;
	var fat=getResp('atividade_2_nfatias');
	for(var i=0;i<fat;i++)
	{
		medPerme+=parseInt(permeabilidadeTrecho('f',i,0));
	}

	return medPerme/(10*fat);
}


function medRetPermeabilidade()
{
	var grad = getResp('atividade_2_grade');
	var media = 0;
	var cores = $('vitral').pegaCores();
 
	for(var i=0;i<grad;i++)
		for(var j=0;j<grad;j++)
			media=media+parseInt(permeabilidadeTrecho('q',i,j));
	
	media=media/(10*grad*grad);
    return media;
}