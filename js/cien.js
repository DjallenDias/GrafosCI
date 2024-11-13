
function changecien() {
    if(typeof mycall !== 'undefined'){
        if(mycall==false){
            resetcookies();
        }
    }
    window.nodesSet = new vis.DataSet([

	    {level: 1, id: '1103177', label: 'Cálculo I', title: '1103177 CÁLCULO DIFERENCIAL E INTEGRAL I', y: -1200},
	    {level: 1, id: '1103118', label: 'Vetorial', title: '1103118 CÁLCULO VETORIAL E GEOMETRIA ANALÍTICA', y: -1100},
	    {level: 1, id: '1107136', label: 'Int. a Programação', title: '1107136 INTRODUÇÃO A PROGRAMAÇÃO', y: -1000},
	    {level: 1, id: '1107259', label: 'Discreta', title: '1107259 MATEMÁTICA DISCRETA', y: -900},
		{level: 1, id: 'DINF00045', label: 'Metodologia', title: 'DINF00045 METODOLOGIA DO TRABALHO CIENTÍFICO PARA CIÊNCIA DA COMPUTAÇÃO', y: -800},
		{level: 1, id: 'DINF00046', label: 'Into. CC', title: 'DINF00046 INTRODUÇÃO À CIÊNCIA DA COMPUTAÇÃO', y: -700},
		{level: 1, id: 'DINF00056', label: 'Pesquisa Aplicada', title: 'DINF00056 PESQUISA APLICADA À COMPUTAÇÃO', y: -600},

	    {level: 2, id: '1103178', label: 'Cálculo II', title: '1103178 CÁLCULO DIFERENCIAL E INTEGRAL II', y: -1200},
	    {level: 2, id: '1103179', label: 'Introdução a Álgebra', title: '1103179 INTRODUÇÃO A ÁLGEBRA LINEAR', y: -1100},
		{level: 2, id: 'GDCOC0079', label: 'Lógica Aplicada', title: 'GDCOC0079	LÓGICA APLICADA A COMPUTAÇÃO', y: -1000},
		{level: 2, id: 'GDCOC0101', label: 'POO', title: 'GDCOC0101	PROGRAMAÇÃO ORIENTADA A OBJETOS', y: -900},
	    {level: 2, id: 'GDSCO0036', label: 'Arq. 1', title: 'GDSCO0036 ARQUITETURA DE COMPUTADORES I', y: -800},

	    {level: 3, id: '1108100', label: 'Probabilidade e Estatística 1', title: '1108100 CÁLCULO DAS PROBABILIDADES E ESTATÍSTICA I', y: -1200},
		{level: 3, id: 'DCOC00062', label: 'Linguagens e Computabilidade', title: 'DCOC00062 LINGUAGENS FORMAIS E COMPUTABILIDADE', y: -1100},
		{level: 3, id: 'DINF00047', label: 'ED 1', title: 'DINF00047 ESTRUTURAS DE DADOS E ALGORITMOS I ', y: -1000},
		{level: 3, id: 'DINF00050', label: 'PF', title: 'DINF00050 PROGRAMAÇÃO FUNCIONAL', y: -900},
		{level: 3, id: 'GDCOC0072', label: 'Cáculo Numérico', title: 'GDCOC0072 CALCULO NUMERICO', y: -800},
		{level: 3, id: 'GDSCO0037', label: 'Arq. 2', title: 'GDSCO0037 ARQUITETURA DE COMPUTADORES II', y: -700},

	    {level: 4, id: '1107128', label: 'Eng. Software', title: '1107128 ENGENHARIA DE SOFTWARE', y: -1200},
		{level: 4, id: '1107191', label: 'IIA', title: '1107191 INTRODUCAO A INTELIGENCIA ARTIFICIAL', y: -1100},
		{level: 4, id: 'DINF00048', label: 'ED 2', title: 'DINF00048 ESTRUTURAS DE DADOS E ALGORITMOS II', y: -1000},
		{level: 4, id: 'GDSCO0055', label: 'Intro. Processamento de Imagens', title: 'GDSCO0055 INTRODUÇÃO AO PROCESSAMENTO DIGITAL DE IMAGENS', y: -900},
		{level: 4, id: 'GDSCO0062', label: 'Redes 1', title: 'GDSCO0062 REDES DE COMPUTADORES I', y: -800},
		{level: 4, id: 'GDSCO0068', label: 'S.O. 1', title: 'GDSCO0068 SISTEMAS OPERACIONAIS I', y: -700},

	    {level: 5, id: '1107180', label: 'Banco de Dados I', title: '1107180 BANCO DE DADOS I', y: -1200},
	    {level: 5, id: '1107184', label: 'Espec. de Requisitos de Software', title: '1107184 ESPECIFICACAO DE REQUISITOS DE SOFTWARE', y: -1100},
	    {level: 5, id: '1107205', label: 'Paradigmas de Linguagens de Prog.', title: '1107205 PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO', y: -1000},
	    {level: 5, id: '1107209', label: 'Sistemas Baseados', title: '1107209 SISTEMAS BASEADOS EM CONHECIMENTO', y: -900},
	    {level: 5, id: 'DINF00049', label: 'Prog. Concorrente e Distribuída', title: 'DINF00049 PROGRAMAÇÃO CONCORRENTE E DISTRIBUÍDA', y: -800},
	    {level: 5, id: 'GDCOC0076', label: 'APA', title: 'GDCOC0076 ANÁLISE E PROJETO DE ALGORITMOS', y: -700},

	    {level: 6, id: '1107202', label: 'Metodos de Proj. Software', title: '1107202 METODOS DE PROJETO DE SOFTWARE', y: -1200},
	    {level: 6, id: 'DINF00051', label: 'Paradigmas de ML', title: 'DINF00051 PARADIGMAS DE APRENDIZAGEM DE MÁQUINA', y: -1100},
	    {level: 6, id: 'DSCO00021', label: 'Segurança Computacional', title: 'DSCO00021 SEGURANÇA COMPUTACIONAL', y: -1000},
	    {level: 6, id: 'DSCO00022', label: 'Sistemas Distribuídos', title: 'DSCO00022 SISTEMAS DISTRIBUÍDOS', y: -900},
	    {level: 6, id: 'DSCO00023', label: 'Empreendedorismo', title: 'DSCO00023 INOVAÇÃO DE BASE CIENTÍFICA-TECNOLÓGICA E EMPREENDEDORISMO', y: -800},
	    {level: 6, id: 'GDSCO0043', label: 'Compiladores 1', title: 'GDSCO0043 CONSTRUÇÃO DE COMPILADORES I', y: -700},

	    {level: 7, id: 'DINF00052', label: 'Eng. Sistemas Distribuídos', title: 'DINF00052 ENGENHARIA DE SISTEMAS DISTRIBUÍDOS', y: -1200},
	    {level: 7, id: 'DINF00053', label: 'Gerenciamento de Projeto de Software', title: 'DINF00053 GERENCIAMENTO DE PROJETO DE SOFTWARE ', y: -1100},
	    {level: 7, id: 'DINF00054', label: 'Teste de Software', title: 'DINF00054 TESTE DE SOFTWARE', y: -1000},
	    {level: 7, id: 'DINF00055', label: 'TCC', title: 'DINF00055 TRABALHO DE CONCLUSÃO DE CURSO PARA CIÊNCIA DA COMPUTAÇÃO', y: -900},
	    {level: 7, id: 'DSCO00024', label: 'Interação Humano-Computador', title: 'DSCO00024 INTERAÇÃO HUMANO-COMPUTADOR', y: -800},
	    {level: 7, id: 'GDADM0110', label: 'Sistema de Informação nas Organizações', title: 'GDADM0110 SISTEMAS DE INFORMAÇÃO NAS ORGANIZAÇÕES ', y: -700},

	    {level: 8, id: 'GDINF0106', label: 'Computadores e Sociedade', title: 'GDINF0106 COMPUTADORES E SOCIEDADE', y: -1200},
	    {level: 8, id: 'GDINF0132', label: 'Estágio', title: 'GDINF0132	ESTÁGIO SUPERVISIONADO - CIÊNCIA DA COMPUTAÇÃO', y: -1100},
    ]);

    window.edgesSet = new vis.DataSet([

		{to: '1103178', from: '1103177'},
		{to: '1103178', from: '1103118'},
		{to: '1103179', from: '1103118'},
		{to: 'GDCOC0079', from: '1107259'},
		{to: 'GDCOC0101', from: '1107136'},
		{to: 'GDSCO0036', from: 'DINF00046'},

		{to: '1108100', from: '1103178'},
		{to: 'DCOC00062', from: 'GDCOC0079'},
		{to: 'DINF00047', from: 'GDCOC0101'},
		{to: 'DINF00050', from: '1107136'},
		{to: 'GDCOC0072', from: 'GDCOC0101'},
		{to: 'GDCOC0072', from: '1103178'},
		{to: 'GDSCO0037', from: 'GDSCO0036'},

		{to: '1107128', from: 'GDCOC0101'},
		{to: '1107191', from: 'GDCOC0079'},
		{to: '1107191', from: 'DINF00047'},
		{to: 'DINF00048', from: 'DINF00047'},
		{to: 'GDSCO0055', from: '1108100'},
		{to: 'GDSCO0055', from: 'DINF00047'},
		{to: 'GDSCO0062', from: 'GDCOC0101'},
		{to: 'GDSCO0068', from: 'GDCOC0101'},
		{to: 'GDSCO0068', from: 'GDSCO0036'},

		{to: '1107180', from: 'DINF00047'},
		{to: '1107184', from: '1107128'},
		{to: '1107205', from: 'DINF00050'},
		{to: '1107205', from: 'DCOC00062'},
		{to: '1107209', from: '1107191'},
		{to: 'DINF00049', from: 'GDSCO0062'},
		{to: 'DINF00049', from: 'GDSCO0068'},
		{to: 'GDCOC0076', from: 'DINF00047'},

		{to: '1107202', from: '1107128'},
		{to: 'DINF00051', from: 'GDCOC0072'},
		{to: 'DINF00051', from: '1107191'},
		{to: 'DSCO00021', from: 'GDSCO0062'},
		{to: 'DSCO00022', from: 'DINF00049'},
		{to: 'GDSCO0043', from: 'DINF00047'},
		{to: 'GDSCO0043', from: 'DCOC00062'},

		{to: 'DINF00052', from: 'DSCO00022'},
		{to: 'DINF00052', from: '1107202'},
		{to: 'DINF00053', from: '1107128'},
		{to: 'DINF00054', from: '1107128'},
		{to: 'DSCO00024', from: '1107128'},

		{to: 'GDINF0132', from: '1107128'},

    ]);
    data2 = {
        nodes: nodesSet,
        edges: edgesSet,
    }
    network.setData(data2);
    nodesSet.forEach(function (node) {
        var edges = edgesSet.get({ returnType: 'Object' });
        var connEdges = network.getConnectedEdges(node.id);

        for (j = 0; j < connEdges.length; j++) {
            if (edges[connEdges[j]].to == node.id
                && taken[edges[connEdges[j]].from] != true) {
                available[node.id] = false;
                node.color = red;
                nodesSet.update(node);
                return;
            }
        }

        available[node.id] = true;
        if(taken[node.id]==true)
            node.color = green;
        else
            node.color = blue;

        nodesSet.update(node);
    });
    document.getElementById("curso").innerHTML = "Ciência da Computação";
	var options = {
		position: { x: -40, y: -850 },
		scale: 0.7,
	  };

	network.moveTo(options);
}