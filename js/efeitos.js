	$(function() {
		   	 $(window).on("scroll", function() {
		        if($(window).scrollTop() > 90) {
		            $(".caixa").addClass("caixa2");
		            $(".botao").addClass("botao2");
		            $(".link").addClass("link2");

		        } else {
		            $(".caixa").removeClass("caixa2");
		            $(".botao").removeClass("botao2");
		            $(".link2").removeClass("link2");
		        }
		    });
		});
