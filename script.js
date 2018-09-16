$(document).ready(function() {
	
	$('img').hover(function() {
		$(this).addClass('animated pulse');
	}, function() {
		$(this).removeClass('pulse');
	});

	
	// for(var i=1; i<=6; i++) {
	var textos = [
		{
			"titulo": "Desarrollo web",
			"descripcion": "Hoy en el mercado laboral empresa que no exista en internet es empresa que no existe<br>"
		},
		{
			"titulo":"CEO",
			"descripcion":"Deseas que tu página web este en los primeros puestos. Has llegado al sitio indicado. Realizamos un análisis de tu web, en su arquitectura y contenido. Para más info entra aquí."
		},
		{
			"titulo":"E-Commerce",
			"descripcion":"El e-commerce o comercio electrónico es un método de compraventa de bienes, productos o servicios valiéndose de Internet como medios"
		},
		{
			"titulo":"video",
			"descripcion":"Nuestro Sistema que permite la grabación de imágenes y sonidos en una cinta magnética que después puede reproducirse y vella de un televisor"
		},
		{
			"titulo":"foto",
			"descripcion":"Tenemos una gran capa de profesionales a su disposicion para que detalle"
		},
		{
			"titulo":"Youtube",
			"descripcion":"Tenemos una gran capa de profesionales a su disposicion para que detalle"
		}
	];
	var a;
	textos.forEach(elem => {
		a = `<div class="message animated bounce">
  				<h2>${elem.titulo}</h2>
  				<p>${elem.descripcion}</p>
  			</div>`;
  	});
  	for(var i=1; i<=6; i++) {
  		var ids = [];
  		var etiqueta = "item"+i
  		ids.push(etiqueta);
  	}
  	for(var i=1; i<=6; i++) {
  			$("#item"+i).on('click', function() {
  				$.fancybox.open(a);
			});
  		}

		
	// }





















	// $("#item1").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[0].titulo}</h2><p>${textos[0].descripcion}</p></div>`);
	// });
	// $("#item2").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[1].titulo}</h2><p>${textos[1].descripcion}</p></div>`);
	// });
	// $("#item3").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[2].titulo}</h2><p>${textos[2].descripcion}</p></div>`);
	// });
	// $("#item4").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[3].titulo}</h2><p>${textos[3].descripcion}</p></div>`);
	// });
	// $("#item5").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[4].titulo}</h2><p>${textos[4].descripcion}</p></div>`);
	// });
	// $("#item6").on('click', function() {
 //  		$.fancybox.open(`${textohtml} ${textos[5].titulo}</h2><p>${textos[5].descripcion}</p></div>`);
	// });
});