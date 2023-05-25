var lista = [
	"<b> -- &nbsp Regra 1 &nbsp -- <br> <br> <br> Os usuários e a equipe do Laboratório devem preservar o silêncio na sala para que esta se configure como um ambiente de estudo;",
	"<b> -- &nbsp Regra 2 &nbsp -- <br> <br> <br> É proibido o consumo de qualquer tipo de alimento ou bebida nos Laboratórios.",
	"<b> -- &nbsp Regra 3 &nbsp -- <br> <br> <br> O ambiente deve preservar o estado de limpeza e organização de que foi encontrado. Lixo deve ser depositado na lixeira, organizar cadeiras e demais recursos utilizados durante a aula.",
	"<b> -- &nbsp Regra 4 &nbsp -- <br> <br> <br> Ao término do uso do laboratório, certifique-se de desligar o PC com a respectiva tela, fechando todos os programas e finalizando o sistema operacional.",	
	"<b> -- &nbsp Regra 5 &nbsp -- <br> <br> <br> É proibido acessar páginas da Internet que possam ser consideradas ilegais ou ofensivas à moral pessoal ou coletiva. Por exemplo, páginas de relacionamentos, pornográficas, de caráter racista, discriminatórias ou que incitem a violência;",
	"<b> -- &nbsp Regra 6 &nbsp -- <br> <br> <br> Não é permitido usar indevidamente os recursos disponíveis na Internet, como utilizar a internet para acessar site de compras, jogos, redes sociais ou quaisquer outros assuntos não pertinentes a aula. No caso de jogos só serão permitidos aqueles que foram designados pelo instrutor com o objetivo didático-pedagógico.",
	"<b> -- &nbsp Regra 7 &nbsp -- <br> <br> <br> Não é permitido utilizar recursos de comunicação instantânea (MSN, salas de bate-papo, googletalk, whatsapp, telegram, entre outros similares) que não estejam previstos em atividades didático-pedagógicas;",
	"<b> -- &nbsp Regra 8 &nbsp -- <br> <br> <br> É proibido perturbar o ambiente com brincadeiras, algazarras e/ou qualquer outra atividade alheia às atividades didático-pedagógicas como também exercer atividades não relacionadas com o uso específico deste Laboratório;",
	"<b> -- &nbsp Regra 9 &nbsp -- <br> <br> <br> Não é permitido trocar cabos ou equipamentos periféricos e/ou acessórios (teclados, mouses, etc.) Caso algum equipamento apresente defeito ou não ligue, informar o instrutor para que esse comunique a área de TI responsável por manutenções.",
	"<b> -- &nbsp Regra 10 &nbsp -- <br> <br> <br> É proibida a instalação de qualquer tipo de programa (mesmo que freeware ou de uso livre) sem a expressa autorização da Supervisão Técnica da Unidade",
	"<b> -- &nbsp Regra 11 &nbsp -- <br> <br>  Os arquivos criados devem ser copiados para seu Google Drive (no caso de alunos que possuem a conta SENAI aluno) e/ou enviados para o seu e-mail pessoal. Observando-se que os arquivos deixados no computador podem ser alterados e apagados por qualquer usuário. Portanto, evite deixar arquivos importantes. Não é permitido utilizar pendrive e outros dispositivos similares.",
	"<b> -- &nbsp Regra 12 &nbsp -- <br> <br> <br> Proibido desenvolver e/ou disseminar vírus nos equipamentos dos Laboratórios de Informática;",
	"<b> -- &nbsp Regra 13 &nbsp -- <br> <br> <br> É proibida a alteração de qualquer componente instalado nos equipamentos (hardware ou software);",
	"<b> -- &nbsp Regra 14 &nbsp -- <br> <br>  Desmontar qualquer equipamento ou acessório dos Laboratórios de Informática, sob qualquer pretexto, assim como remover equipamentos do local a eles destinados (mesmo dentro do recinto), desde que não esteja previsto em atividades didático-pedagógicas",
];

var cont = 0;

function prox() {
	var label = document.getElementById("labelregras"); 
	label.innerHTML = lista[cont];
	cont += 1;
	console.log(cont)
	if(cont>lista.length){
		label.innerHTML = "<b> Sempre respeite nossos termos <br> <br> - Atenciosamente Equipe Senai ";
		cont -= 1;
		console.log(cont)
}
}

function atras() {
	var label = document.getElementById("labelregras");
	cont -= 2;
	label.innerHTML = lista[cont];
	
	console.log(cont)
	cont++
	if(cont<0){
		label.innerHTML = "Vamos Começar!";
		cont += 1;
		console.log(cont)
}
}