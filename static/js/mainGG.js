
document.getElementById("a1").addEventListener("change", myFunction);

function myFunction() {
	$( ".rows" ).empty();
	for(var i = 0; i< $(".a1").val(); i++)
     $(".rows").append('<div class="flex-table" id="flex-table">\
					<div class="row" id="row">\
						<input class="r1" id="r1" type="text"/>\
						<input class="r2" id="r2" type="number" step=".01"/>\
						<input class="r3" id="r3" type="number" step=".01"/>\
						<input class="r4" id="r4" type="number" step=".01" readonly="readonly"/>\
						<input hidden class="r5" id="r5" type="number" step=".01" readonly="readonly"/>\
					</div>\
				</div>');
	  
}
if(!($(".temp1").hasClass("subtemp1"))){
	for(var i = 0; i< $(".a1").val(); i++)
     $(".rows").append('<div class="flex-table" id="flex-table">\
					<div class="row" id="row">\
						<input class="r1" id="r1" type="text"/>\
						<input class="r2" id="r2" type="number" step=".01"/>\
						<input class="r3" id="r3" type="number" step=".01"/>\
						<input class="r4" id="r4" type="number" step=".01" readonly="readonly"/>\
						<input hidden class="r5" id="r5" type="number" step=".01" readonly="readonly"/>\
					</div>\
				</div>');
}

$( "#course1" ).submit(function( event ) {
	event.preventDefault();
	// Total for first column
	var sum = 0.0;
	$('.r2').each(function(){
		if(this.value){
			sum += parseFloat(this.value);
		}
		else{
			sum += parseFloat(0);
		}
		
	});
	// $('.r2').each(sumthis(this.value));
	sum = sumthis(r2);
	$('.rr2').val(sum);
	
	// Total for second column
	var sum2 = 0.0;
	$('.r3').each(function(){
		if(this.value){
			sum2 += parseFloat(this.value);
		}
		else{
			sum2 += parseFloat(0);
		}
	});
	$('.rr3').val(sum2);
	
	
	
	
	
	// Total for fourth column hidden
	var sum4 = 0.0;
	for (i = 1; i <= 3; i++){
		if($(".r3").eq(i).val()){
			sum4 += parseFloat(0);
		}
		else{
			sum4 += parseFloat($(".r2").eq(i).val());
			$(".r5").eq(i).val($(".r2").eq(i).val());
			
		}
	};
	$('.rr5').val(sum4);
	
	
	// calculating % of marks needed in remaining assignments
	var p_expect = parseFloat($('.e1').val());
	var p_needed = parseFloat(parseFloat(p_expect-sum2)/parseFloat(sum4/100));
	// alert("p_needed is"+p_needed+" p_expect is "+p_expect+" sum 2 is "+sum2+" sum4 is "+sum4);
	
	//calculating expected marks for each assessment
	var x=0.0;
	var y=0.0;
	var z=0.0;
	for (i = 1; i <= 3; i++){
		if($(".r3").eq(i).val()){
			x = parseFloat($(".r3").eq(i).val());
			$('.r4').eq(i).val(x);
		}
		else{
			y = parseFloat($(".r2").eq(i).val());
			z = parseFloat(y*p_needed/100);
			$('.r4').eq(i).val(z);
		}
	};
	
	// Total for third column
	var sum3 = 0.0;
	$('.r4').each(function(){
		if(this.value){
			sum3 += parseFloat(this.value);
		}
		else{
			sum3 += parseFloat(0.0);
		}
	});
	$('.rr4').val(sum3);
	
	// adds a subtem1 class to temp1 class which helps to stop resetting values
	$(".temp1").append("<div class='subtemp1'></div>");
	
	event.preventDefault();
});
// function sumthis(b){
	// var total = 0.0;
	// $(b).each(function(){
		// if(this.value){
			// total += parseFloat(this.value);
		// }
		// else{
			// total += parseFloat(0);
		// }
	// return total;
// }

