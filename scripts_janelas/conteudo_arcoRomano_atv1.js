/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];

/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Partes = ['1', '2', '3', '4', '5', 'C'];
var nomeSoft = 'arcoRomanoFerradura';

var Questoes = 
[
	
	{//Parte 1
		parte1_q1: //Questão 1
		{
			
			itens: 
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_1_a,
					enunciado: 'O que acontece com a altura da janela conforme se aumenta a medida de sua base?',
					dados:	[
						{value: 'aumenta', label: 'Aumenta'},
						{value: 'diminui', label: 'Diminui'},
						{value: 'naoaltera', label: 'Não se altera'}
					],
					msgErro: 'Movimente o <a id="bluePoint2">ponto azul</a> e observe o que acontece com a altura da janela conforme varia o tamanho da base.'
				}
			]
		}
	},
	{ //Parte 2
		parte2_q2: //Questão 2
		{
			itens: 
			[
				{//A
					tipo: 'tabela',
					corrigir: corrige_q_2_a,
					enunciado: 'Agora, movimente o <a id="bluePoint3">ponto azul</a>, no canto inferior direito da janela representada no quadro ao lado, e preencha a tabela abaixo com as medidas da base e da altura de 6 arcos romanos diferentes, todos com perímetros iguais a 400 centímetros.',
					dados:	[
							[{value: 'Perímetro', largura: 3},{value: 'Base (x)', largura: 3},{value: 'Altura do retângulo (h)', largura: 3}, {value: 'Raio do semi- círculo (r)', largura: 3}, {value: 'Área (cm²)', largura: 4}],	//header
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}],
							[{value: '400', tipo: 'texto'},	{tipo: 'input'}, {tipo: 'input'}, {tipo: 'calculado'}, {tipo: 'calculado'}]
						],
					msgErro: 'Verifique se você: <br /> 1) repetiu as medidas da base e da altura; <br /> 2) utilizou medidas incorretas, ou seja, medidas que resultam em um perímetro diferente de 400 cm.',
					msgAjuda: 'Preencha a tabela com o valor da base e da altura para que o valor da área e o raio do semi-círculo sejam calculados automaticamente.'
				}
			]
		},
		parte2_q3: //Questão 3
		{
			enunciadoGeral: 'Ainda explorando a janela, no quadro ao lado, responda: ',
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_3_a,
					dependente: false,
					enunciado: 'Qual é o maior valor que se pode atribuir para a base da janela?',
					dados: [ 
							[{antes: 'x = ', depois:'cm'}]
						],	
					msgAjuda: 'Note que em casos extremos a janela pode ser "degenerada", ou seja, possuir área igual a 0. Mesmo assim, esses casos devem ser considerados na análise desta questão.',
					msgErro: 'Esse valor não está correto. Movimente o <a id="bluePoint4">ponto azul</a> e tente novamente.'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_3_b,
					dependente: false,
					enunciado: 'E qual é o menor valor possível para a base?',
					dados: [
							[{antes: 'x = ', depois:'cm'}]
						],
						msgAjuda: 'Note que em casos extremos a janela pode ser "degenerada", ou seja, possuir área igual a 0. Mesmo assim, esses casos devem ser considerados na análise desta questão.',
						msgErro: 'Esse valor não está correto. Movimente o <a id="bluePoint5">ponto azul</a> e tente novamente.'
				}
			]
		}
	},
	{ //Parte 3
		parte3_q4: //Questão 4
		{
			enunciadoGeral: 'Com base nos valores que você preencheu na tabela da questão 2, responda:',
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_4_a,
					dependente: false,
					enunciado: 'Quais são as dimensões da janela com a maior área?',
					dados:	[
							 [{antes:'base (x) = ', depois: 'cm'}, {antes: 'altura (h) = ', depois: 'cm'}]
						],
					msgErro: ' Observe com atenção os valores das áreas na tabela do seu bloco de notas. Identifique a janela com a maior área. Quais são as suas dimensões?'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_4_b,
					dependente: false,
					enunciado: 'Qual é o valor dessa área?',
					antes: 'área = ', 
					depois: 'cm²',
					msgErro: 'Observe com atenção os valores das áreas na tabela do seu bloco de notas. Identifique a maior área dentre todas as outras registradas na tabela.'
				}	
			]
		}
	},
	{ //Parte 4
		parte4_q5: //Questão 5
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_a,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Qual é a medida, c(x), do comprimento do arco da semi-círcunferência em termos da medida x da base?',
					selecionada: selecionou_q_5_a,
					antes: 'c(x) = ',
					depois: ' ',
					msgErro: 'Lembre-se que o comprimento total de uma circunferência é igual a 2*π*r. No cálculo do comprimento da semi-circunferência assuma o valor de π com pelo menos duas casas decimais: o valor de π é aproximadamente 3.14.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Para o número π, você pode usar o valor aproximado 3.14. <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_5_b,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Qual é a medida da altura h do retângulo em termos de x?',
					selecionada: selecionou_q_5_b,
					antes: 'h(x) = ',
					depois: ' ',
					msgErro: 'Isole h na expressão 400 = c + x + 2h.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Para o número π, você pode usar o valor aproximado 3.14. <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".'
				}
			]
		},
		parte4_q6: //Questão 6
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					selecionada: selecionou_q_6_a,
					antes: 'A<sub>c</sub> = ',
					depois: ' ',
					enunciado: 'Qual é a área do semicírculo (A<sub>c</sub>) em termos de x?',					
					msgErro: 'Lembre-se que a área de uma circunferência é π*r², em que r é o raio da circunferência.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Para o número π, você pode usar o valor aproximado 3.14. <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_6_b,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					selecionada: selecionou_q_6_b,
					antes: 'A<sub>r</sub> = ',
					depois: ' ',
					enunciado: 'Qual é a área do retângulo (A<sub>r</sub>) em termos de x?',					
					msgErro: 'Lembre-se que a área de um retângulo é base*altura.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Para o número π, você pode usar o valor aproximado 3.14. <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_6_c,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					selecionada: selecionou_q_6_c,
					antes: 'A<sub>t</sub> = ',
					depois: ' ',
					enunciado: 'Qual é a área total (A<sub>t</sub>) da janela em termos de x?',					
					msgErro: 'A área da janela é a soma das duas áreas anteriores.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Para o número π, você pode usar o valor aproximado 3.14. <br /><br />Fração e divisão:  digitar "a/b". <br /><br />Multiplicação: digitar "a*b". <br /><br />Potência: para escrever "p elevado ao quadrado", digitar "p^2" ou "p*p".'
				}		
			]
		}
	},
	{ // Parte 5
		parte5_q7: //Questão 7
		{
			enunciadoGeral: 'Analisando visualmente o gráfico, responda:',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_7_8_a,
					enunciado: 'Qual é a medida da base da janela com a maior área?',
					antes: 'base = ', 
					depois: 'cm',
					msgErro: 'Observe o gráfico com atenção. Estamos interessados na janela de maior área. Qual é a medida de sua base?'
				}
			]
		},
		parte5_q8: //Questão 8
		{
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_7_8_a,
					enunciado: 'Qual é a altura total da janela com a maior área?',
					antes: 'altura = ', 
					depois: 'cm',
					msgErro: 'Utilize a medida da base e as equações encontradas na parte anterior.'
				}
			]
		},
		parte5_q9: //Questão 9
		{
			itens:
			[
				{//A
					tipo: 'multipla_escolha',
					corrigir: corrige_q_9_a,
					enunciado: 'Com base nas respostas das questões 7A e 8A,  assinale uma das alternativas abaixo, assumindo que uma delas é correta.',
					dados:	[
						{value: 'basedobro', label: 'A medida da base é igual ao dobro da altura total da janela.'},
						{value: 'alturadobro', label: 'A altura total é igual ao dobro da medida da base.'},
						{value: 'iguais', label: 'A medida da base e a altura total da janela são iguais.'}
					],
					msgErro: 'Movimente o <a id="bluePoint6">ponto azul</a>  e observe o que acontece com a altura da janela ao variar o tamanho da base.'
				}
			]	
		}	
	},
	{//Parte C
	}
]

/*
	Bloco de Notas
	
	Nesse Array ficam os dados que aparecem no Bloquinho de notas.
	Se você for na linha 35 do exemplo_correcao.js verá que está sendo criada uma instância
	de "Blocao", uma classe de bloco de notas que permite tabelas no conteúdo. Se não for
	usar tabelas no Software, altere para "Bloco". Ambas classes utilizam a variavel global
	MeuBloco para preencher o seu conteúdo.
*/

var MeuBloco = new Array();