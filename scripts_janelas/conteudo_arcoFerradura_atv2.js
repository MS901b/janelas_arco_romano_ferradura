/*
	Padronização do ID: 
		- [['p/parte','q/questao','/item'],'_'] vai gerar um id do tipo p1_q2_1
		- [['p/parte','q/questao','/itemletra'],'_'] vai gerar um id do tipo p1_q2_a
	Palavras-chave: questao, parte, item, itemletra, subitem
	Devem ser precedidas de uma barra '/'.
	A palavra-chave subitem será usada somente em questões com mais de um campo
*/
 
var IdPadrao = [['parte/parte','q/questao','/itemletra','/subitem'],'_'];
var Partes = ['1','2','3','4','C'];
/*
	Questoes
	
	Aqui ficam concentrados todos os conteudos das questões da atividade!
	Veja que está separado por Parte/Questão/Item
	
	ATENÇÃO: Cada tipo possui um formato de entrada característico.
*/

var Questoes = 
[
	{ //Parte 1
	    parte1_q1: //Questão 1
		{
			itens: 
			[
				{//A
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_1_a,
					dependente: false,
					enunciado: 'Quanto mede o ângulo alfa?',
					dados: [ 
							[{antes:'&alpha; = ', depois:'&deg;'}]
						],
					msgErro: 'Note que os lados do triângulo C<sub style="color: red;">1</sub>C<sub style="color: red;">2</sub>A são todos raios das circunferências usadas na construção.',
					msgAjuda: 'Digite o valor em graus.'
				},
				{//B
					tipo: 'multiplo_input_com_unidade',
					corrigir: corrige_q_1_b,
					dependente: false,
					enunciado: 'Quanto mede o ângulo beta?',
					dados: [ 
							[{antes:'&beta; = ', depois:'&deg;'}]
						],
					msgErro: 'Lembre-se que a circunferência de baixo foi cortada como uma semicircunferência.',
					msgAjuda: 'Digite o valor em graus.'
				}
			]
		}
	},	
	{ //Parte 2
		parte2_q2: //Questão 2
		{
			enunciadoGeral: 'Seja x a medida da base da janela, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_2_a,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					dependente: false,
					enunciado: 'Qual é a medida do comprimento do arco C<sub>t</sub> em termos de x?',
					selecionada: selecionou_q_2_a,
					msgErro: 'Observe qual é a fração da circunferência que esse arco representa.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_2_b,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					dependente: false,
					enunciado: 'Qual é a medida do comprimento de cada um dos arcos menores em termos de x?',
					selecionada: selecionou_q_2_b,
					msgErro: 'Descubra qual é a fração da circunferência toda que esse arco representa.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_2_c,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					dependente: false,
					enunciado: 'Qual é o comprimento total dos arcos da janela em termos de x?',
					selecionada: selecionou_q_2_c,
					msgErro: 'Use as respostas dos itens anteriores.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				}
			]
		},
		parte2_q3: //Questão 3
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_3_a,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Sabe-se que o comprimento é igual a 400 centímetros. Usando essa informação e a expressão do comprimento total da janela, qual é a expressão da altura (h) do retângulo em função da base (x)?',
					selecionada: selecionou_q_3_a,
					antes: 'h(x) = ',
					depois: ' ',
					msgErro: 'Iguale a expressão do comprimento total da janela em termos de x e h ao valor do comprimento e extraia a expressão para h desta igualdade.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				}
			]
		}	
	},
	{ //Parte 3
		parte3_q4: //Questão 4
		{
			enunciadoGeral: 'Novamente, seja x a medida da base, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_4_a,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Considere a região em destaque (S<sub>p</sub>) na circunferência. Qual é a expressão da área de S<sub>p</sub> em termos de x?',
					selecionada: selecionou_q_4_a,
					msgErro: 'Observe qual é a fração do círculo todo que este setor representa.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_4_b,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Considere a região em destaque na circunferência. Chame-a de "S<sub>m</sub>". Qual é a expressão da área de S<sub>m</sub> em termos de x?',
					selecionada: selecionou_q_4_b,
					msgErro: 'Descubra qual é a fração do círculo todo que este setor representa.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				},
				{//C
					tipo: 'input',
					corrigir: corrige_q_4_c,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Qual é a área do quadrilátero entre os arcos do topo da janela? <br /><em>(se necessário, use sen(60&#176;)=0,87 e sen(30&#176;)=0,5)</em>',
					selecionada: selecionou_q_4_c,
					msgErro: 'Note que a região é um losango, e pode ser dividida em triângulos com ângulos e lados conhecidos.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				}
			]
		},		
		parte3_q5: //Questão 5
		{
			enunciadoGeral: 'Usando a expressão acima, responda:',
			itens:
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_5_a,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Qual é a expressão da área da região retangular em termos de x?',
					selecionada: selecionou_q_5_a,
					msgErro: 'Lembre-se que a área do retângulo é o produto da base pela altura.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_5_b,
					dependente: false,
					caracteres_especiais: ['pi', 'raiz', 'quadrado'],
					enunciado: 'Qual é a expressão da área total da janela em termos de x?',
					selecionada: selecionou_q_5_b,
					msgErro: 'Utilize os resultados das questões anteriores.',
					msgAjuda: 'Como digitar fórmulas: <br /><br />Fração e divisão:  digitar a/b. <br /><br />Multiplicação: digitar a*b ou simplesmente ab. <br /><br />Potência: para escrever p elevado ao quadrado, digitar p^2 ou p*p.<br /><br />Você também pode usar parênteses e o símbolo “&#960;”.'
				}
			]
		}
	},
	{ //Parte 4
		parte4_q6: //Questão 6
		{
			enunciadoGeral: 'Analisando o gráfico, responda:',
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_6_a,
					dependente: false,
					enunciado: 'Qual é a área máxima (em cm²) que pode ser obtida para esse formato de janela respeitando a restrição de comprimento?',
					msgErro: 'Movimente o ponto azul no gráfico para obter a resposta.',
					msgAjuda: 'A resposta deve ser um número real.'
				},
				{//B
					tipo: 'input',
					corrigir: corrige_q_6_b,
					dependente: false,
					enunciado: 'Qual é a medida da base que resulta nessa área?',
					msgErro: 'Verifique a coordenada X do ponto obtido na questão anterior.',
					msgAjuda: 'A resposta deve ser um número real.'
				}
			]
		},
		parte4_q7: //Questão 7
		{
			itens: 
			[
				{//A
					tipo: 'input',
					corrigir: corrige_q_7_a,
					dependente: false,
					enunciado: 'Encontre o valor numérico aproximado da altura total da janela com área máxima.',
					msgErro: 'Substitua na expressão de h(x) o valor de x encontrado e faça os cálculos com ajuda da calculadora se julgar necessário.',
					msgAjuda: 'A resposta deve ser um número real.'
				}
			]
		}
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

