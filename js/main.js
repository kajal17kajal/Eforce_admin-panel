jQuery(document).ready(function () {
    
    jQuery('#pushmenu').click(function(){
    jQuery('body').toggleClass	('sidebar-collapse','slow');
   
    });
   
    $('#pushtruck').click(function() {
      $('.dash_truck').toggleClass('side-expand');
    });
    $('#close-sidebar').click(function() {
      $('.dash_truck').toggleClass('side-expand');
    });

    $('#rightmenu').click(function(){
        $('.vehicle_details').toggleClass('side-open','slow');
        $('#eforce_detail').show();
        // $(".vehicle_details").css("width",'300px');
        // $(".right_sidebar").css("width",'320px');
        });


        //=========for responsive right menu of the enforce detail===========//
        $('#right_menu').click(function(){
          $('.vehicle_details').toggleClass('side-open','slow');
          $('#eforce_detail').show();
          // $(".vehicle_details").css("width",'300px');
          // $(".right_sidebar").css("width",'320px');
          });
        //=====replace div on click=======//
        $.fn.myCustomFunction = function(){
        }
       
        $(".company_info").click(function(){
            $('#company_management').myCustomFunction();
            $("#company_management").hide();
            $('#company_profile').show();
            
          });
        //============Back to div=========//
          $.fn.myFunction = function(){
        }
        $('#c_profile').click(function(){
          $('#company_profile').myFunction();
          $("#company_profile").hide();
          $('#company_management').show();
          });


          $.fn.function_v =function(){
          }

          $("#v_profile").click(function(){
            $("#eforce_detail").function_v();
            $("#eforce_detail").hide();
            $("#map").show();
            
          });

           $.fn.function_c =function(){
          }

          $("#com_profile").click(function(){
            $("#company_managent").function_c();
            $("#company_management").hide();
            $("#map").show();
            
          });
          //=================sidebar menu list click event===================//
          $("#eforce_list").click(function() {
            $(".page").hide();
            $("#eforce_detail").show();
            $("#eforce_detail").css("opacity",'1');
            
            ('#company_profile').hide();
            $('.dash_truck').toggleClass('side-expand');
            
          });
          $("#management_list").click(function() {
            $('.right_content').hide();
           $('.playback').hide();
            $(".page").hide();
            $("#company_management").show();
            $("#company_management").css("opacity",'1');
            
            $('.dash_truck').toggleClass('side-expand');
          });

        //===========header menu list click event====//
                  
          $("#eforce_li").click(function() {
            $(".page").hide();
            $("#eforce_detail").show();
            $("#eforce_detail").css("opacity",'1');
            $("#eforce_detail").css("left",'0');
            $('.dash_truck').toggleClass('side-expand');
            
          });

          $("#management_li").click(function() {
            $('.right_content').hide();
           $('.playback').hide();
            $(".page").hide();
            $("#company_management").show();
            $("#company_management").css("opacity",'1');
            $("#company_management").css("left",'0');
            $('.dash_truck').toggleClass('side-expand');
          });
          
          
          //=============eforce detail click event==========//
      
        $('.truck_detail').click(function(){
        $('.right_content').show();
        $('.playback').show();
        $('#eforce_detail').hide();         
          });

      //===========tab click event======//
      $('#d_info').click(function(){
        $('.right_content').hide();
           $('.playback').hide();
           
      });
      $('#g_info').click(function(){
        $('.right_content').hide();
           $('.playback').hide();
      });
      $('.map-button').click(function() {
        // Replace "latitude" and "longitude" with the actual coordinates of the location
        const lat = "latitude";
        const long = "longitude";
    
        // Construct the URL with the coordinates
        const url = `https://maps.google.com`;
    
        // Redirect to the URL
        window.location.href = url;
      });
      //===========eforce detail scrollbar div height calculation=======//
      var parentDiv = $("#eforce_detail");
      var parentHeight = parentDiv.height();
      console.log("eforce_detail:", parentHeight);

      var div1Height = $(".nav > li").height();
      console.log("tabs:", div1Height);

      const summaryHeight=$('#add').height();
      console.log("summary height...",summaryHeight)

      var div3Height = $(".add_vehicle").height();
      console.log("add_vehicle:", div3Height);

      var totalHeight = div1Height + summaryHeight + div3Height;
      var div4Height = parentHeight - totalHeight;
      console.log("Total height:", div4Height);

      $(".vehicle_list").css("height", div4Height); 
      
     
      //===========company management detail scrollbar div height calculation=======//

      var companyDiv = $("#company_management");
      var companyHeight = companyDiv.height();
      console.log("companyDiv :", companyHeight);

      var divinfo = $(".c_info").height();
      console.log("info:", divinfo);

      var divsearch = $(".input-group").height();
      console.log("info:", divsearch);

      var totalHeight = divinfo + divsearch;

      var divheight = companyHeight - totalHeight;
      console.log("Total height:", divheight);

      $(".mscroll").css("height", divheight); 

       
    //===========draggable======//
    var mydragg = (function() {
      function move(divid, ypos) {
        $(divid).css({          
          top: ypos + 'px'
        });
      }
      function startMoving(divid, container, evt) {
				evt = evt || window.event;
				var posY = evt.clientY,
					divTop = $(divid).css('top'),			
					eHe = parseInt($(divid).css('height')),
				
					cHe = parseInt($(container).css('height'));
				$(container).css('cursor', 'move');
				divTop = divTop.replace('px', '');
				var 	diffY = posY - divTop;
				$(document).on('mousemove', function(evt) {
					evt = evt || window.event;
					var posY = evt.clientY,					
						aY = posY - diffY;			
					if (aY < 0) aY = 0;				
					if (aY + eHe > cHe) aY = cHe - eHe;
					move(divid,  aY);
				});
			}

			function stopMoving(container) {
				$(container).css('cursor', 'default');
				$(document).off('mousemove');
			}

			return {
				move: move,
				startMoving: startMoving,
				stopMoving: stopMoving
			};
		})();

		$('#offcanvasBottom').on('mousedown', function(event) {
			mydragg.startMoving(this, '#container', event);
		}).on('mouseup', function() {
			mydragg.stopMoving('#container');
		});

    $('#offcanvas_Bottom').on('mousedown', function(event) {
			mydragg.startMoving(this, '#container', event);
		}).on('mouseup', function() {
			mydragg.stopMoving('#container');
		});

//=====================responsive====================//
if ($(window).width() <= 767){
  $("#eforce_detail").css("width",'100%');
  $('#company_management').css("width",'100%');
  $(".temperature").css("width",'300px');
  $(".temperature").css("height" ,'210px');
  $(".pressure").css("width",'300px');
  $(".pressure").css("height" ,'210px');
  $('#rightmenu').hide();
  $('.playback').hide();
  $('#company_profile').css("width",'100%');
    $('#company_profile').css("left",'0');
  
  }

  var reset = function(){
    setTimeout(function(){
        $('form')[0].reset();
    },3000);
}
$('.btn_pimary').on('save', function(){
    reset();
    console.log("hi");
});
});

   