//COMANDO PARA "OUVIR" QUANDO O DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady.bind(this), false);

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'IRRF Mensal',
    // App id
    id: 'com.wixsite.interappctive', 
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/index/',
            url: 'index.html',
            on: {
                pageInit: function (event, page) {
					
					//DESATIVAR PAINEL ESQUERDO NA ABERTURA
                    app.panel.disableSwipe('left');
					
                    //REMOVER ANIMACAO DE "CORACAO BATENDO" 2 SEGUNDOS
                    setTimeout(function () {
                        $(".Aligner").removeClass("animated lightSpeedIn");
                    }, 2000);
					
					//ANIMAÇÃO DE BATER CORACAO 2 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").addClass("animated heartBeat");
                    }, 2500);

					//REMOVER ANIMACAO DE "CORACAO BATENDO" 3 SEGUNDOS E MEIO
					setTimeout(function () {
                        $(".Aligner").removeClass("animated heartBeat");
                    }, 3500);
					
                    //FAZER NOVAMENTE ANIMACAO DO CORACAO BATENDO 4 SEGUNDOS E MEIO
                    setTimeout(function () {
                        $(".Aligner").addClass("animated lightSpeedOut");
                    }, 4500);
					
					 //REDIRECIONAR PARA HOME EM 5 SEGUNDOS
                    setTimeout(function () {
						
                        app.views.main.router.navigate('/Home/');
                    	
                    }, 5500);
					
					
                    }
               }
        },
		{
            path: '/Home/',
            url: 'Home.html',
            on: {
                pageInit: function (event, page) {
					
					
											
						$("#projeto").on("click", function () {
						var projeto = cordova.InAppBrowser.open('https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2204959', '_blank', 'location=no,zoom=no');
						projeto.show();
						});
						
						//Caminho até o Arquivo Imagem
						var foto = app.photoBrowser.create({
							photos : [
								
								'img/tabela-aliquotas.jpg',
							],
							navbarOfText:'de'
							
						});
						//Open photo browser on click
						$$('#tabela-irrf').on('click', function () {
							foto.open();
							
						});
						
						//BANNER PADRAO COM ID PADRAO
						admob.banner.config({
						 id: 'ca-app-pub-3177867944225980/6128279790', // teste: ca-app-pub-3940256099942544/6300978111 - Vera:ca-app-pub-3177867944225980/6128279790 
						})

						// Create banner
						admob.banner.prepare();

						// Show the banner
						admob.banner.show();
						
						//INTERSTITIAL PROPAGANDA
						//admob.interstitial.config({
						// id: 'ca-app-pub-3177867944225980/4048911369', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/4048911369
						// autoShow: false
						//})
						
					//	admob.interstitial.prepare();
						
						//MOSTRAR DEPOIS DE 10 SEGUNDOS
						//setTimeout(function(){ 
						//admob.interstitial.show();
						//}, 3000);
						
                    }
               }
		},
		{
            path: '/InfoIRPF/',
            url: 'InfoIRPF.html',
            on: {
                pageInit: function (event, page) {
					
					//INTERSTITIAL PROPAGANDA
						//admob.interstitial.config({
						// id: 'ca-app-pub-3940256099942544/1033173712', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/7572176259
						// autoShow: true
						//})
						//Create Interstitial
						//admob.interstitial.prepare();
					
						//CONTEÚDO DA PÁGINA PRINCIPAL AQUI
						
						//CÓDIGO PARA FECHAR O PAINEL
						app.panel.close();
						
						//Caminho até o Arquivo Imagem
						var foto = app.photoBrowser.create({
							photos : [
								
								'../img/Tabela-FGTS.jpeg',
							],
							navbarOfText:'de'
							
						});
						//Open photo browser on click
						$$('#TabelaFGTS').on('click', function () {
							foto.open();
							
						});
						
						//Caminho até o Arquivo Imagem
						var calendario = app.photoBrowser.create({
							photos : [
								
								'../img/Calendário_Saque_Aniversário.jpg',
							],
							navbarOfText:'de'
							
						});
						//Open photo browser on click
						$$('#Calendário_Saque_Aniversário').on('click', function () {
							calendario.open();
							
						});
						
						//ALERTA DO BOTÃO SAIBA MAIS
						$$('simulação_').on('click', function () {
							app.dialog.alert('ligue para 27 99526-3312', '<b>Entre em contato</b>');
						});
						
						// PROMPT NO BOTÃO FAB
						$$('#fab').on('click', function () {
						  app.dialog.prompt('Digite Abaixo', '<b>Qual o seu nome?</b>', function (nome) {
							app.dialog.confirm('Seu nome é ' + nome + '?', '<b>É isso mesmo?</b>', function () {
							  app.dialog.alert('Beleza, seu nome é ' + nome,'OBRIGADO POR CONFIRMAR');
							});
						  });
						});
				}	
			}  
        },
		
		{
            path: '/CalculadoraIRRF/',
            url: 'CalculadoraIRRF.html',
            on: {
                pageInit: function (event, page) {
					
					//INTERSTITIAL PROPAGANDA
						//admob.interstitial.config({
						// id: 'ca-app-pub-3177867944225980/7249789778', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/7249789778
						// autoShow: true
						//})
						//Create Interstitial
						//admob.interstitial.prepare();
						
						
							
							$('#salario').mask("#.##0,00", {reverse: true});
							$('#prev').mask("#.##0,00", {reverse: true});
							$('#pensao').mask("#.##0,00", {reverse: true});
							$('#indeniza').mask("#.##0,00", {reverse: true});
						
						// INÍCIO DA FUNÇAÕ CALCULADORA DO IRRF ATUAL
						$$('#calculadorairrf').on('click', function () {
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE DEPENDENTES
							var ndepndentes = $("#dependentes").val();
							var deducaodependente = ndepndentes*189.59;
							var impdep = deducaodependente;
							
							var impdepfinal = parseFloat(impdep);																
							document.getElementById("isencaodependentes").innerHTML = ""+numberToReal(impdepfinal)+"" ;
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DA PREVIDENCIA OFICIAL
							var prev = $("#prev").val();
							var tirapontoprev = prev.replace('.', '');
							var substituiVirgulaprev = tirapontoprev.replace(',', '.');
							var isenprev = parseFloat(substituiVirgulaprev);
							var iprev = isenprev;
							
							//var pontoPorVirgulaiprev = iprev.replace('.', ',');
							
							document.getElementById("isencaoprev").innerHTML = "R$" +  iprev;
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE PAGAMENTO DE PENSÃO
							var pensao = $("#pensao").val();
							var tirapontopensao = pensao.replace('.', '');
							var substituiVirgulapensao = tirapontopensao.replace(',', '.');
							var isenpensao = parseFloat(substituiVirgulapensao);
							var ipens = isenpensao;
							
							//var pontoPorVirgulaipens = ipens.replace('.', ',');
							
							document.getElementById("isencaopensao").innerHTML = "R$" +  ipens;
							
							//SDEDUÇÃO EM RAZÃO DE OUTRAS INDENIZAÇÕES
							var indeniza = $("#indeniza").val();
							var tirapontoindeniza = indeniza.replace('.', '');
							var substituiVirgulaindeniza = tirapontoindeniza.replace(',', '.');
							var isenindeniza = parseFloat(substituiVirgulaindeniza);
							var iind = isenindeniza;
							
							document.getElementById("isencaoindeniza").innerHTML = "R$" +  iind;
							
							//SOMA DAS DEDUÇÕES
							var somadeducoes = impdep + iprev + ipens + iind;
							var deducoes = somadeducoes;
							
							var deducoesfinal = parseFloat(deducoes);																
							document.getElementById("isencao").innerHTML = ""+numberToReal(deducoesfinal)+"" ;
							
							//CÁLCULO DO IRPF SOBRE A PARCELA TRIBUTÁVEL
							var salariobruto = $("#salario").val();
							var tirapontosal = salariobruto.replace('.', '');
							var substituiVirgulasal = tirapontosal.replace(',', '.');
							var sal = parseFloat(substituiVirgulasal);
							var qsj = sal;
							
							document.getElementById("SALARIO").innerHTML = "R$" +   qsj;
							
							var baseimposto = qsj - deducoes;
							var baseIR = baseimposto;
							
							var baseIRfinal = parseFloat(baseIR);																
							document.getElementById("baseIRPF").innerHTML = ""+numberToReal(baseIRfinal)+"" ;
							
							if(ndepndentes==''|| prev==''|| pensao==''|| indeniza==''|| salariobruto==''){
											app.dialog.alert('Por favor, preencha todos os campos! Insira 0 (zero), para valores nulos.','<b>ATENÇÃO!</b>');
											app.popup.close('.popup-about');
										}else{
							
							var IRPF;
									if (baseIR <= 0) {
										IRPF = "";
									} else if (baseIR <=1903.98) {
										IRPF = 0;
									} else if (baseIR <= 2826.65) {
										IRPF = (baseIR - 1903.98)* 0.075;
									} else if (baseIR <=3751.05) {
										IRPF = (baseIR - 2826.65)* 0.15 + (922.67)* 0.075;
									} else if (baseIR <= 4664.69) {
										IRPF = (baseIR - 3751.05)* 0.225 + (924.4)* 0.15 + (922.67)* 0.075;
									}else{ 
										IRPF = (baseIR - 4664.68)*0.275 + (913.67)* 0.225 + (924.4)* 0.15 + (922.67)* 0.075;
									}
																				
										var IRPF2Dig = IRPF.toFixed(2);
										var IRPF2Digfinal = parseFloat(IRPF2Dig);	
																													
										document.getElementById("valorIRPF").innerHTML = ""+numberToReal(IRPF2Digfinal)+"" ;
										
										
							
														
							//CÁLCULO DA ALÍQUOTA EFETIVA DO IRPF
							var Alíquota = (IRPF/qsj)*100;
							var AlíquotaEfetiva = Alíquota;
										
										var Aliq2Dig = AlíquotaEfetiva.toFixed(2);
										
										var pontoPorVirgulaAliq2Dig = Aliq2Dig.replace('.', ',');
										
										
										document.getElementById("aliquotaefetiva").innerHTML = pontoPorVirgulaAliq2Dig + "%";
										
								//SALÁRIO LÍQUIDO
								var liquido= qsj - iprev - ipens - IRPF2Digfinal;
								document.getElementById("salarioliquido").innerHTML = ""+numberToReal(liquido)+"" ;
										
						}
						
					});
					
						
						//APÓS CALCULAR LIMPAR OS CAMPOS DA PÁGINA DE SIMULAÇÃO
						app.views.main.router.refreshPage();
                    }
               }
        },
		
		{
            path: '/CalculadoranovoIRRF/',
            url: 'CalculadoranovoIRRF.html',
            on: {
                pageInit: function (event, page) {
					
					//INTERSTITIAL PROPAGANDA
						//admob.interstitial.config({
						// id: 'ca-app-pub-3177867944225980/9492809738', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/9492809738
						// autoShow: true
						//})
						//Create Interstitial
						//admob.interstitial.prepare();
						
						$('#salario').mask("#.##0,00", {reverse: true});
						$('#prev').mask("#.##0,00", {reverse: true});
						$('#pensao').mask("#.##0,00", {reverse: true});
						$('#indeniza').mask("#.##0,00", {reverse: true});

                        // INÍCIO DA FUNÇÃO CALCULADORA DO IRRF ATUAL
						$$('#calculadorairrf').on('click', function () {
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE DEPENDENTES
							var ndepndentes = $("#dependentes").val();
							var deducaodependente = ndepndentes*189.59;
							var impdep = deducaodependente;
							
							var impdepfinal = parseFloat(impdep);																
							document.getElementById("isencaodependentes").innerHTML = ""+numberToReal(impdepfinal)+"" ;
							//DEDUÇÃO EM RAZÃO DO NÚMERO DA PREVIDENCIA OFICIAL
							var prev = $("#prev").val();
							var tirapontoprev = prev.replace('.', '');
							var substituiVirgulaprev = tirapontoprev.replace(',', '.');
							var isenprev = parseFloat(substituiVirgulaprev);
							var iprev = isenprev;
							
							//var pontoPorVirgulaiprev = iprev.replace('.', ',');
							
							document.getElementById("isencaoprev").innerHTML = "R$" +  iprev;
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE PAGAMENTO DE PENSÃO
							var pensao = $("#pensao").val();
							var tirapontopensao = pensao.replace('.', '');
							var substituiVirgulapensao = tirapontopensao.replace(',', '.');
							var isenpensao = parseFloat(substituiVirgulapensao);
							var ipens = isenpensao;
							
							//var pontoPorVirgulaipens = ipens.replace('.', ',');
							
							document.getElementById("isencaopensao").innerHTML = "R$" +  ipens;
							
							//SDEDUÇÃO EM RAZÃO DE OUTRAS INDENIZAÇÕES
							var indeniza = $("#indeniza").val();
							var tirapontoindeniza = indeniza.replace('.', '');
							var substituiVirgulaindeniza = tirapontoindeniza.replace(',', '.');
							var isenindeniza = parseFloat(substituiVirgulaindeniza);
							var iind = isenindeniza;
							
							//var pontoPorVirgulaiind = iind.replace('.', ',');
							
							document.getElementById("isencaoindeniza").innerHTML = "R$" +  iind;
							
							//SOMA DAS DEDUÇÕES
							var somadeducoes = impdep + iprev + ipens + iind;
							var deducoes = somadeducoes;
							
							var deducoesfinal = parseFloat(deducoes);																
							document.getElementById("isencao").innerHTML = ""+numberToReal(deducoesfinal)+"" ;
							
							//CÁLCULO DO IRPF SOBRE A PARCELA TRIBUTÁVEL
							var salariobruto = $("#salario").val();
							var tirapontosal = salariobruto.replace('.', '');
							var substituiVirgulasal = tirapontosal.replace(',', '.');
							var sal = parseFloat(substituiVirgulasal);
							var qsj = sal;
							
							//var pontoPorVirgulaqsj = qsj.replace('.', ',');
							
							document.getElementById("SALARIO").innerHTML = "R$" +   qsj;
							
							var baseimposto = qsj - deducoes;
							var baseIR = baseimposto;
							
							var baseIRfinal = parseFloat(baseIR);																
							document.getElementById("baseIRPF").innerHTML = ""+numberToReal(baseIRfinal)+"" ;
							
							if(ndepndentes==''|| prev==''|| pensao==''|| indeniza==''|| salariobruto==''){
											app.dialog.alert('Por favor, preencha todos os campos! Insira 0 (zero), para valores nulos.','<b>ATENÇÃO!</b>');
											app.popup.close('.popup-about');
										}else{
							
								var IRPF;
										if (baseIR <= 0) {
											IRPF = "";
										} else if (baseIR <=1903.98) {
											IRPF = 0;
										} else if (baseIR <= 2826.65) {
											IRPF = (baseIR - 1903.98)* 0.075;
										} else if (baseIR <=3751.05) {
											IRPF = (baseIR - 2826.65)* 0.15 + (922.67)* 0.075;
										} else if (baseIR <= 4664.69) {
											IRPF = (baseIR - 3751.05)* 0.225 + (924.4)* 0.15 + (922.67)* 0.075;
										}else{ 
											IRPF = (baseIR - 4664.68)*0.275 + (913.67)* 0.225 + (924.4)* 0.15 + (922.67)* 0.075;
										}
																					
											var IRPF2Dig = IRPF.toFixed(2);
											var IRPF2Digfinal = parseFloat(IRPF2Dig);	
																														
											document.getElementById("valorIRPF").innerHTML = ""+numberToReal(IRPF2Digfinal)+"" ;
															
								//CÁLCULO DA ALÍQUOTA EFETIVA DO IRPF
								var Alíquota = (IRPF/qsj)*100;
								var AlíquotaEfetiva = Alíquota;
											
											var Aliq2Dig = AlíquotaEfetiva.toFixed(2);
											
											var pontoPorVirgulaAliq2Dig = Aliq2Dig.replace('.', ',');
											
											
											document.getElementById("aliquotaefetiva").innerHTML = pontoPorVirgulaAliq2Dig + "%";
											
								//SALÁRIO LÍQUIDO
								var liquido= qsj - iprev - ipens - IRPF2Digfinal;
								document.getElementById("salarioliquido").innerHTML = ""+numberToReal(liquido)+"" ;
										
							}	
										
						});				
												
						
						// INÍCIO DA FUNÇÃO CALCULADORA DO IRRF CORRIGIDO
						$$('#calculadorairrf').on('click', function () {
							
							
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE DEPENDENTES
							var ndepndentesc = $("#dependentes").val();
							var deducaodependentec = ndepndentesc*386.76;
							var impdepc = deducaodependentec;
							
							var impdepfinalc = parseFloat(impdepc);																
							document.getElementById("isencaodependentesc").innerHTML = ""+numberToReal(impdepfinalc)+"" ;
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DA PREVIDENCIA OFICIAL
							var prev = $("#prev").val();
							var tirapontoprev = prev.replace('.', '');
							var substituiVirgulaprev = tirapontoprev.replace(',', '.');
							var isenprev = parseFloat(substituiVirgulaprev);
							var iprev = isenprev;
							
							
							
							
							//DEDUÇÃO EM RAZÃO DO NÚMERO DE PAGAMENTO DE PENSÃO
							var pensao = $("#pensao").val();
							var tirapontopensao = pensao.replace('.', '');
							var substituiVirgulapensao = tirapontopensao.replace(',', '.');
							var isenpensao = parseFloat(substituiVirgulapensao);
							var ipens = isenpensao;
							
							document.getElementById("isencaopensao").innerHTML = "R$" +  ipens;
							
							//SDEDUÇÃO EM RAZÃO DE OUTRAS INDENIZAÇÕES
							var indeniza = $("#indeniza").val();
							var tirapontoindeniza = indeniza.replace('.', '');
							var substituiVirgulaindeniza = tirapontoindeniza.replace(',', '.');
							var isenindeniza = parseFloat(substituiVirgulaindeniza);
							var iind = isenindeniza;
							
							document.getElementById("isencaoindeniza").innerHTML = "R$" +  iind;
							
							//SOMA DAS DEDUÇÕES
							var somadeducoesc = impdepc + iprev + ipens + iind;
							var deducoesc = somadeducoesc;
							
							var deducoesfinalc = parseFloat(deducoesc);																
							document.getElementById("isencaoc").innerHTML = ""+numberToReal(deducoesfinalc)+"" ;
							
							//CÁLCULO DO IRPF SOBRE A PARCELA TRIBUTÁVEL
							var salariobruto = $("#salario").val();
							var tirapontosal = salariobruto.replace('.', '');
							var substituiVirgulasal = tirapontosal.replace(',', '.');
							var sal = parseFloat(substituiVirgulasal);
							var qsj = sal;
							
							document.getElementById("SALARIO").innerHTML = "R$" +   qsj;
							
							var baseimpostoc = qsj - deducoesc;
							var baseIRc = baseimpostoc;
							
							var baseIRfinalc = parseFloat(baseIRc);																
							document.getElementById("baseIRPFc").innerHTML = ""+numberToReal(baseIRfinalc)+"" ;
							
								var IRPFc;
										if (baseIRc <= 0) {
											IRPFc = "";
										} else if (baseIRc <=3884.12) {
											IRPFc = 0;
										} else if (baseIRc <= 5766.36) {
											IRPFc = (baseIRc - 3884.12)* 0.075;
										} else if (baseIRc <= 7652.14) {
											IRPFc = (baseIRc - 5766.36)* 0.15 + (1822.24)* 0.075;
										} else if (baseIRc <= 9515.96) {
											IRPFc = (baseIRc - 7652.14)* 0.225 + (1885.78)* 0.15 + (1822.24)* 0.075;
										}else{ 
											IRPFc = (baseIRc - 9515.96)*0.275 + (1863.82)* 0.225 + (1885.78)* 0.15 + (1822.24)* 0.075;
										}
																					
											var IRPF2Digc = IRPFc.toFixed(2);
											var IRPF2Digfinalc = parseFloat(IRPF2Digc);	
																														
											document.getElementById("valorIRPFc").innerHTML = ""+numberToReal(IRPF2Digfinalc)+"" ;
											
											
								
															
								//CÁLCULO DA ALÍQUOTA EFETIVA DO IRPF
								var Alíquotac = (IRPFc/qsj)*100;
								var AlíquotaEfetivac = Alíquotac;
											
											var Aliq2Digc = AlíquotaEfetivac.toFixed(2);
											
											var pontoPorVirgulaAliq2Digc = Aliq2Digc.replace('.', ',');
											
											
											document.getElementById("aliquotaefetivac").innerHTML = pontoPorVirgulaAliq2Digc + "%";
											
								//SALÁRIO LÍQUIDO
								var liquidoc= qsj - iind - iprev - ipens - IRPF2Digfinalc;
								document.getElementById("salarioliquidoc").innerHTML = ""+numberToReal(liquidoc)+"" ;
											
						});
						
										
						// INÍCIO DA FUNÇÃO CALCULADORA DO IRRF COM BASE NO PROJETO DE LEI 3129/2019
						$$('#calculadorairrf').on('click', function () {
							
								//DEDUÇÃO EM RAZÃO DO NÚMERO DE DEPENDENTES
								var ndepndentesp = $("#dependentes").val();
								var deducaodependentep = ndepndentesp*398.14;
								var impdepp = deducaodependentep;
								
								var impdepfinalp = parseFloat(impdepp);																
								document.getElementById("isencaodependentesp").innerHTML = ""+numberToReal(impdepfinalp)+"" ;
								
								//DEDUÇÃO EM RAZÃO DO NÚMERO DA PREVIDENCIA OFICIAL
								var prev = $("#prev").val();
								var tirapontoprev = prev.replace('.', '');
								var substituiVirgulaprev = tirapontoprev.replace(',', '.');
								var isenprev = parseFloat(substituiVirgulaprev);
								var iprev = isenprev;
								
								
								
								
								//DEDUÇÃO EM RAZÃO DO NÚMERO DE PAGAMENTO DE PENSÃO
								var pensao = $("#pensao").val();
								var tirapontopensao = pensao.replace('.', '');
								var substituiVirgulapensao = tirapontopensao.replace(',', '.');
								var isenpensao = parseFloat(substituiVirgulapensao);
								var ipens = isenpensao;
								
								
								
								document.getElementById("isencaopensao").innerHTML = "R$" +  ipens;
								
								//SDEDUÇÃO EM RAZÃO DE OUTRAS INDENIZAÇÕES
								var indeniza = $("#indeniza").val();
								var tirapontoindeniza = indeniza.replace('.', '');
								var substituiVirgulaindeniza = tirapontoindeniza.replace(',', '.');
								var isenindeniza = parseFloat(substituiVirgulaindeniza);
								var iind = isenindeniza;
								
								document.getElementById("isencaoindeniza").innerHTML = "R$" +  iind;
								
								//SOMA DAS DEDUÇÕES
								var somadeducoesp = impdepp + iprev + ipens + iind;
								var deducoesp = somadeducoesp;
								
								var deducoesfinalp = parseFloat(deducoesp);																
								document.getElementById("isencaop").innerHTML = ""+numberToReal(deducoesfinalp)+"" ;
								
								//CÁLCULO DO IRPF SOBRE A PARCELA TRIBUTÁVEL
								var salariobruto = $("#salario").val();
								var tirapontosal = salariobruto.replace('.', '');
								var substituiVirgulasal = tirapontosal.replace(',', '.');
								var sal = parseFloat(substituiVirgulasal);
								var qsj = sal;
								
								document.getElementById("SALARIO").innerHTML = "R$" +   qsj;
								
								var baseimpostop = qsj - deducoesp;
								var baseIRp = baseimpostop;
								
								var baseIRfinalp = parseFloat(baseIRp);																
								document.getElementById("baseIRPFp").innerHTML = ""+numberToReal(baseIRfinalp)+"" ;
								
								var IRPFp;
										if (baseIRp <= 0) {
											IRPFp = "";
										} else if (baseIRp <=3922.00) {
											IRPFp = 0;
										} else if (baseIRp <= 5988.00) {
											IRPFp = (baseIRp - 3922.00)* 0.15;
										} else if (baseIRp <= 7984.00) {
											IRPFp = (baseIRp - 5988.00)* 0.20 + (2066.00)* 0.15;
										} else if (baseIRp <= 9980.00) {
											IRPFp = (baseIRp - 7984.00)* 0.225 + (1996.00)* 0.20 + (2066.00)* 0.15;
										} else if (baseIRp <= 33932.00) {
											IRPFp = (baseIRp - 9980.00)* 0.275 + (1996.00)* 0.225 + (1996.00)* 0.20 + (2066.00)* 0.15;
										}else{ 
											IRPFp = (baseIRp - 33932.00)*0.37 + (23952.00)*0.275 + (1996.00)* 0.225 + (1996.00)* 0.20 + (2066.00)* 0.15;
										}
																					
											var IRPF2Digp = IRPFp.toFixed(2);
											var IRPF2Digfinalp = parseFloat(IRPF2Digp);	
																														
											document.getElementById("valorIRPFp").innerHTML = ""+numberToReal(IRPF2Digfinalp)+"" ;
											
											
								
															
								//CÁLCULO DA ALÍQUOTA EFETIVA DO IRPF
								var Alíquotap = (IRPFp/qsj)*100;
								var AlíquotaEfetivap = Alíquotap;
											
											var Aliq2Digp = AlíquotaEfetivap.toFixed(2);
											
											var pontoPorVirgulaAliq2Digp = Aliq2Digp.replace('.', ',');
											
											
											document.getElementById("aliquotaefetivap").innerHTML = pontoPorVirgulaAliq2Digp + "%";
								
								//SALÁRIO LÍQUIDO
								var liquidop= qsj - iind - iprev - ipens - IRPF2Digfinalp;
								document.getElementById("salarioliquidop").innerHTML = ""+numberToReal(liquidop)+"" ;
										
						});
						
						
                    }
               }
        },
		
		
		{
            path: '/SobreoApp/',
            url: 'SobreoApp.html',
            on: {
                pageInit: function (event, page) {
					
					//INTERSTITIAL PROPAGANDA
						admob.interstitial.config({
						 id: 'ca-app-pub-3177867944225980/4240483056', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/4240483056
						 autoShow: true
						})
						//Create Interstitial
						admob.interstitial.prepare();
									
						
						
                    }
               }
        },	
		
		{
            path: '/Politicadeprivacidade/',
            url: 'Politicadeprivacidade.html',
            on: {
                pageInit: function (event, page) {
					
					//INTERSTITIAL PROPAGANDA
						admob.interstitial.config({
						 id: 'ca-app-pub-3177867944225980/1624437318', // teste: ca-app-pub-3940256099942544/1033173712 - Vera: ca-app-pub-3177867944225980/1624437318
						 autoShow: true
						})
						//Create Interstitial
						admob.interstitial.prepare();
					
					
					
                    }
               }
        },
		
		{
            path: '/new/',
            url: 'new.html',
            on: {
                pageInit: function (event, page) {
				
					
					
					

				}
			}  
        },
    ],
    // ... other parameters
});

var $$=Dom7;

function numberToReal(numero) {
    var numero = numero.toFixed(2).split('.');
    numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
}

//QUANDO O DISPOSITIVO ESTIVER PRONTO
function onDeviceReady() {
	
	//DISPOSITIVO PRONTO INICIALIZAR POR ESSA ROTA
    var mainView = app.views.create('.view-main', {
        url: '/index/'
    });
	
	 //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
	 document.addEventListener("backbutton", onBackKeyDown, false);
	 
	//FUNCÃO QUANDO CLICAR NO BOTAO VOLTAR NATIVO
	function onBackKeyDown() {
	
	//VARIAVEL PARA VER EM QUE ROTA ESTAMOS
	var nome=app.views.main.router.url;
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/CalculadoraIRRF/'){
	app.views.main.router.navigate('/Home/');	
	}   
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/CalculadoranovoIRRF/'){
	app.views.main.router.navigate('/Home/');	
	}    
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/Doeseuir/'){
	app.views.main.router.navigate('/Home/');	
	} 
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/SobreoApp/'){
	app.views.main.router.navigate('/Home/');	
	} 
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/Politicadeprivacidade/'){
	app.views.main.router.navigate('/Home/');	
	} 
	
	if (nome=='/CalculadoraIRRF/'){
		if ($('.popup-about').hasClass('modal-in')){
		app.popup.close('.popup-about');
	}else{
	app.views.main.router.navigate('/CalculadoraIRRF/');	
	}
			
	}
	
	if (nome=='/CalculadoranovoIRRF/'){
		if ($('.popup-about').hasClass('modal-in')){
		app.popup.close('.popup-about');
	}else{
	app.views.main.router.navigate('/CalculadoranovoIRRF/');	
	}
			
	}
	
	if (nome=='/Home/'){
		if ($('.popup-about').hasClass('modal-in')){
		app.popup.close('.popup-about');
	}else{
	app.views.main.router.navigate('/Home/');	
	}
			
	}
	
	//EXEMPLO DE VOLTAR:	
	if (nome=='/Home/'){
	app.dialog.confirm('Tem certeza que quer sair?','<b>Sair</b>', function(){
	window.navigator.app.exitApp();
	});
	}
}

}