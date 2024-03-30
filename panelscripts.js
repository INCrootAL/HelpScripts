
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

document.addEventListener('DOMContentLoaded', function() {
	
		window.addEventListener('scroll', myFunctionForSticky);
		var bottom = document.getElementById("bottom");
		var sticky = bottom.offsetTop;
		
function myFunctionForSticky() {
	if (window.pageYOffset >= sticky) {
		bottom.classList.add("stickyBottom");
	} else 
	{
		bottom.classList.remove("stickyBottom");
		}		
	};
});

document.addEventListener("click", function(e) {

	var sidebar = document.getElementsByClassName("sidebar")[0];

	if (e.target.className=="catalog_header_mob" || e.target.className=="footer_mob_block_catalog" ) {
		
		sidebar.style.display = "block";	
		
	};
	
	$('.title_header_mob a').on('click', function() {
		
		sidebar.style.display = "none"; 
	});
	
});

$(".sidebar_menu_mob a.item_mob span").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).parent().next().slideToggle();
	});
	
$(".sidebar_menu_mob a.item_mob").click(function(e){
		e.preventDefault();
		enableScrollMenu();
		$(".sidebar_menu_mob").hide();
	});

} else {
    $(function() {
					var $window = $(window);
					var $sidebar = $(".menu_wrap");
					var $sidebarTop = $sidebar.position().top;
					var $sidebarHeight = $sidebar.height();
					var $footer = $('.dop-catalog-vive');
					var $footerTop = $footer.position().top;
					var $sidebarCatalog = $(".sidebar");

					$window.scroll(function(event) {
					    $sidebarCatalog.addClass("fixed");
						$sidebar.addClass("fixed");
						var $scrollTop = $window.scrollTop();
						var $topPosition = Math.max(0, $sidebarTop + 73 - $scrollTop);

						if ($scrollTop + $sidebarHeight > $footerTop) {
							var $topPosition = Math.min($topPosition, $footerTop - $scrollTop  - $sidebarHeight);
						}

						$sidebar.css("top", $topPosition);
					});

				});
    
	
document.addEventListener('DOMContentLoaded', function() {
		window.addEventListener('scroll', myFunctionForSticky);

	/* ���������� ���������� � �������� �� ������*/
		var bottom = document.getElementById("bottom");
		var sticky = bottom.offsetTop;
		var dopbanner = document.getElementById("flashsale_wrapper");

	/* ���������� ���������� ��� ��������� �����*/
		var logo = document.getElementById("logo");
		var phone = document.getElementById("phone");
		var search_now = document.getElementById("search_now");
		var numberphone = document.getElementById("numberphone");
		var call_me_has_popup = document.getElementById("call_me_has_popup");tools
		var tools = document.getElementById("tools");




		function myFunctionForSticky()
		{

			if (window.pageYOffset >= sticky) {

	/* CLASS */

				bottom.classList.add("stickyBottom");

	/* STYLE */

				logo.style.width = "180px";
				logo.style.height = "75px";
				logo.style.marginBottom = "50px";
				search_now.style.marginBottom = "36px";
				search_now.style.marginLeft = "-26px";
				phone.style.paddingLeft = "0px";
				phone.style.marginBottom = "50px";
				numberphone.style.fontSize = "15px"
				call_me_has_popup.style.marginLeft = "0px";
				call_me_has_popup.style.top = "-5px";
				tools.style.marginBottom = "36px";
			} else {

	/* CLASS */

				bottom.classList.remove("stickyBottom");

	/* STYLE */

				logo.style.width = "280px";
				logo.style.height = "120px"
				logo.style.marginBottom = "5px";
				search_now.style.marginBottom = "0px";
				search_now.style.marginLeft = "0px";
				phone.style.paddingLeft = "0px";
				phone.style.marginBottom = "8px";
				numberphone.style.fontSize = "18px"
				call_me_has_popup.style.marginLeft = "-8px";
				call_me_has_popup.style.top = "0px";
				tools.style.marginBottom = "0px";
			}
		}
		function myFunctionForResponsive()
		{
			masthead.classList.toggle('responsive');
		}
	});
	
	
document.addEventListener("click", function(e) {

	var dropdownphones = document.getElementById("dropdownphones");

	if (e.target.className=="numberphone" || e.target.className=="tel") {

		dropdownphones.style.display = "block";
	} else {

		dropdownphones.style.display = "none";
	}
});

document.addEventListener("click", function(e) {

	var sidebar = document.getElementsByClassName("sidebar")[0];

	if (e.target.className=="catalog_header_mob" || e.target.className=="footer_mob_block_catalog svg") {
		
		sidebar.style.display = "block";	
		
	};
	
	$('.title_header_mob a ').on('click', function() {
		
		sidebar.style.display = "none"; 
	});	
});

$(window).on('touchmove', function () {
		$(window).trigger('scroll');
	});
	
$(".sidebar_menu_mob a.item_mob span").click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass("active");
		$(this).parent().next().slideToggle();
	});
	
$(".sidebar_menu_mob a.item_mob").click(function(e){
		e.preventDefault();
		enableScrollMenu();
		$(".sidebar_menu_mob").hide();
	});

}
	





