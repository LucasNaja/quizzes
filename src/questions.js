const questions=[['Complete: Sueline est\xE1 ___, pois dormiu ___ durante a noite.','Qual conjunto de palavras est\xE1 correto?','Na ordem da conversa, qual a coloca\xE7\xE3o correta? Jo\xE3o: ___ \xE9 separado? Bia: ____ n\xE3o \xE9 junto! Jo\xE3o: Mas ___? Bia: O ____ eu n\xE3o sei.','"Engodar" \xE9 o sin\xF4nimo de:','Complete: Siga ___ e ___ seus medos.','Qual destas palavras n\xE3o \xE9 sin\xF4nimo de "Rubicundo".','Qual o plural correto de couve-flor, girassol, pudim, giz e l\xE1pis?','Complete corretamente a ora\xE7\xE3o: ___ noiva chegou ___ atrasada, o casamento come\xE7ou ___ quinze minutos e vai terminar meio-dia e ___.'],['Os ponteiros do rel\xF3gio formam um \xE2ngulo reto ao marcar 3 horas.','40% de 75 \xE9 28.','Todos os lados de um tri\xE2ngulo escaleno t\xEAm o mesmo comprimento.','Quando se divide 1.000 por 0, o resultado \xE9 0.','Se f(X) = 5, ent\xE3o (X + 3X) - (2X + X) \xE9 igual ao valor de X.','7% \xE9 igual a 0,07.','Zero \xE9 um n\xFAmero inteiro e tamb\xE9m um n\xFAmero natural.','De acordo com a Trigonometria, seno(\u03B8) dividido por cosseno(\u03B8) \xE9 igual a secante(\u03B8).','40 - 6 * 4 = 136.','N\xE3o h\xE1 n\xFAmero 0 em numeral romano.','1, 2 e 3 s\xE3o os \xFAnicos n\xFAmeros naturais cuja resposta \xE9 a mesma se adicionados ou multiplicados entre si.','\xC9 poss\xEDvel que voc\xEA n\xE3o marque um n\xFAmero inteiro neste quiz.'],['Quantos movimentos o planeta Terra executa?','Qual \xE9 a principal consequ\xEAncia do movimento de rota\xE7\xE3o?','Qual a principal consequ\xEAncia do movimento de transla\xE7\xE3o?','Qual a forma real da Terra?','Quanto tempo a Terra demora para executar o movimento de rota\xE7\xE3o?','Quanto tempo a Terra demora para executar o movimento de transla\xE7\xE3o?','O que \xE9 litosfera?','O que \xE9 hidrosfera?','O que \xE9 atmosfera?','O que \xE9 biosfera?'],['Qual corpo celeste \xE9 conhecido por "Planeta Vermelho"?','Qual \xE9 o maior planeta do sitema solar?','Em qual gal\xE1xia nosso sistema solar est\xE1 localizado?','Quantas estrelas existem em nosso sistema solar?','Qual o planeta mais frio do nosso sistema solar?','Qual destes planetas n\xE3o possui an\xE9is?','V\xEAnus e ___ s\xE3o os dois planetas que n\xE3o t\xEAm uma lua.','Qual o planeta mais quente do sistema solar?'],['Qual \xE9 a \xFAnica esp\xE9cie de felino que os exemplares raramente s\xE3o encontrados sozinhos?','Qual dos felinos a seguir tem maior o porte?','Qual dos felinos a seguir costuma ca\xE7ar \xE0 noite?','Qual dos felinos a seguir tem menor porte?','O Le\xE3o macho \xE9 o mais lento dentre todos os grandes felinos.','Qual dos felinos \xE1 seguir possui melhor habilidade de escalar \xE1rvores?','Qual dos felinos \xE1 seguir tem maior o costume e habilidade para ca\xE7ar p\xE1ssaros?','Quantas ra\xE7as de gatos dom\xE9sticos existem aproximadamente?']],answers=[['Mal-humorada, mal','Jejum, jeito, gesto, jenipapo','Por que, porque, por qu\xEA e porqu\xEA','Iludir','Em frente e enfrente','Brilhante','Couve-flores, girass\xF3is, pudins, gizes e l\xE1pis','A, meio, h\xE1 e meia'],['Verdadeiro','Falso','Falso','Falso','Verdadeiro','Verdadeiro','Falso','Falso','Falso','Verdadeiro','Verdadeiro','Falso'],['14 Movimentos','A forma\xE7\xE3o dos dias e das noites','A forma\xE7\xE3o das 4 esta\xE7\xF5es do ano','Geoide','23 horas, 56 minutos e 4 segundos','365 dias, 5 horas, 48 minutos e 46 segundos','\xC9 o solo onde pisamos','\xC9 o conjunto de \xE1gua de todo o planeta','\xC9 a camada gasosa que envolve a Terra','\xC9 o conjunto de sistemas vivos do planeta'],['Marte','J\xFApiter','Via L\xE1ctea','1','Urano','V\xEAnus','Merc\xFArio','V\xEAnus'],['Le\xE3o','Tigre','Le\xE3o','Gato do Deserto','Verdadeiro','Leopardo','Caracal','80']],fakeAnswers=[[['Mau humorada, mau','M\xE1-humorada, mal','Mal humorada, mau','M\xE1 humorada, mau'],['Jejum, geito, jesto e genipapo','Gejum, jeito, gesto e jenipapo','Gejum, geito, jesto e jenipapo','Jejum, geito, jeito e genipapo'],['Porque, por qu\xEA, por que e porqu\xEA','Por que, porque, porqu\xEA e por qu\xEA','Por qu\xEA, porqu\xEA, porque e por que','Porqu\xEA, por que, por qu\xEA e porque'],['Encostar','Inverter','Engordar','Respirar'],['Enfrente e enfrente','Em frente e em frenta','Enfrente e em frenta','Em frente e em frente'],['Corado','Avermelhado','Gren\xE1'],['Couves-flor, girass\xF3is, pudim, giz e l\xE1pises','Couve-flores, girassols, pudim, giz e l\xE1pises','Couves-flor, girassols, pudins, gizes e l\xE1pis','Couves-flores, girass\xF3is, pudim, giz e l\xE1pises'],['\xC0, meia, a e meio','\xC0, meia, a e meio','\xC0, meia, a e meio']],[['Falso'],['Verdadeiro'],['Verdadeiro'],['Verdadeiro'],['Falso'],['Falso'],['Verdadeiro'],['Verdadeiro'],['Verdadeiro'],['Falso'],['Falso'],['Verdadeiro']],[['11 movimentos','12 movimentos','13 movimentos','15 movimentos'],['A forma\xE7\xE3o das 4 esta\xE7\xF5es do ano','A forma\xE7\xE3o das chuvas','A forma\xE7\xE3o dos fen\xF4menos naturais'],['A forma\xE7\xE3o das chuvas','A manuten\xE7\xE3o das temperaturas da Terra','A forma\xE7\xE3o do dia e da noite'],['Redonda','Oval','Plana','A Terra n\xE3o tem forma'],['22 horas, 43 minutos e 54 segundos','23 horas, 56 minutos e 40 segundos','24 horas, 56 minutos e 4 segundos'],['24 horas, 56 minutos e 4 minutos','364 dias, 5 horas e 45 segundos','5 horas, 48 minutos e 46 minutos','365 dias, 1 hora e 46 segundos'],['\xC9 o conjunto de \xE1gua de todo o planeta','\xC9 a camada mais extensa da atmosfera','\xC9 o conjunto de sistemas vivos do planeta'],['\xC9 o solo onde pisamos','\xC9 a camada mais extensa da atmosfera','\xC9 o conjunto de sistemas vivos do planeta'],['\xC9 o solo onde pisamos','\xC9 o conjunto de \xE1gua de todo o planeta','\xC9 o conjunto de sistemas vivos do planeta'],['\xC9 o solo onde pisamos','\xC9 o conjunto de \xE1gua de todo o planeta','\xC9 a camada gasosa que envolve a Terra']],[['V\xEAnus','Merc\xFArio','Saturno'],['Urano','Saturno','Netuno'],['Andr\xF4meda','Gal\xE1xia do Sombreiro','Tri\xE2ngulo'],['2','5','10','20','Mais de 10.000'],['Netuno','J\xFApiter','Saturno'],['Urano','Netuno','Saturno'],['Netuno','Saturno','Marte'],['Merc\xFArio','J\xFApiter','Terra']],[['Guepardo','Tigre','Gato','Lince'],['Guepardo','Leopardo','Caracal','On\xE7a'],['Gato','Tigre','Puma','Leopardo'],['Lince','Caracal','Gato Pescador'],['Falso'],['Tigre','Gato','Puma'],['Lince','Gato Dom\xE9stico'],['46','60','100']]];