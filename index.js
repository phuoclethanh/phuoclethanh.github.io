$(document).ready(function(){

    // Delare variale of time filter - searching
    var today = new Date(),
      pasthour = new Date(today.getTime()-3600*1000),
      past24hours = new Date(today.getTime()-24*3600*1000),
      pastweek = new Date(today.getTime()-7*24*3600*1000),
      pastmonth = new Date(today.getTime()-30*24*3600*1000),
      pastyear = new Date(today.getTime()-365*24*3600*1000);
    
    // Delare variable of form/to parameter - searching 
    var dateTimeTo = formatTime(today),
        dateTimeFrom = "None";

    var language = "Any";

    // When input filed change then value is saved for 'form' parameter
    $("#time").change(function(){
     if ($(this)[0].value == 0) {
        dateTimeFrom = "None";
     } else if((this)[0].value == 1){
        dateTimeFrom = formatTime(pasthour);
     } 
     else if($(this)[0].value == 2){
        dateTimeFrom = formatTime(past24hours);
     } else if($(this)[0].value == 3){
        dateTimeFrom = formatTime(pastweek);
     } else if($(this)[0].value == 4){
        dateTimeFrom = formatTime(pastmonth);
     } else {
        dateTimeFrom = formatTime(pastyear);
     }
    }); 

    // When input filed change then value is saved for 'lang' parameter
    $("#language").change(function(){
    if ($(this)[0].value == 0) {
        language = "Any";
    } else if((this)[0].value == 1){
        language = "de";
    } 
    else if($(this)[0].value == 2){
        language = "en";
    } else if($(this)[0].value == 3){
        language = "es";
    } else if($(this)[0].value == 4){
        language = "it";
    } else {
        language = "ja";
    }
    }); 
    
    // Create function to format time inorder to assign 'from/to' parameter
    function formatTime(d) {
        let date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        let time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        return date+'T'+time+'Z';
     }
    
    // Style for anitial status
    $(".loader").css("display","none");
    $("#time").hide();
    $("#language").hide();
    $(".loader").css("display","block"); 

    // Click button icon Search to show Search field
    $("#search").click(function(){
        $(".fieldsearch").show("slow");
    });

    // Click close icon to hide Search field
    $("#close").click(function(){     
        $(".fieldsearch").hide("fast");
        //Reset value of select field
        $('#time').prop('selectedIndex',0);
        $('#language').prop('selectedIndex',0);
        //Clear value of input field
        $("#fsearch").val("");
        //Hide Time and Language filter
        $("#time").hide("slow");
        $("#language").hide("slow");
    });
    
    // Click button Tool to show Time and Language filter
    $("#btn-tools").click(function(){
        $("#time").toggle("slow");
        $("#language").toggle("slow");
    });

    //Call function to show Top Headlines when page load
    showTopHeadlines();

    // Call function to show Top Headlines when click header
    $("#logo").click(() => {
        $("main").html("");
        showTopHeadlines();
    });
    
    // Create function to show Top Head lines
    function showTopHeadlines() {

        $(".fieldsearch").hide();
        $(".loader").css("display","block"); 

        fetch('https://gnews.io/api/v4/top-headlines?&token=88093f2a806d94f9d15254c83c6b8449')
        .then(function (response) {      
            return response.json();
        })
        .then(function (data) {    
            data.articles.forEach(function(val){
                let image = val.image;
                let title = val.title;
                let url = val.url;
                let time = val.publishedAt;
                let content = val.content;
        
                $("main").append("<article><div class=\"picture\"><a href=\"" +
                url + "\" target=\"_blank\">"+"<img src=\"" + image +
                "\"></a></div><div class=\"content\"><a href=\"" + url + "\" target=\"_blank\">" + title +
                "</a><span>" + time + "</span><p>" + content + "</p></div></article>");     
            }
            )
            $(".loader").fadeOut(2000);
        });
    }
    
    // Click button Search to search data.
    $("#btn-search").click(function(){

        // Alert when value of field input empty
        if ($("#fsearch").val() == "") {
            alert("Please enter value into input field!");       
        } else {
            let keywords = $("#fsearch").val();
            let url = "https://gnews.io/api/v4/search?q=" + "\"" + keywords + "\"" + "&lang=" +
             language + "&from=" + dateTimeFrom + "&to="+ dateTimeTo +
              "&token=88093f2a806d94f9d15254c83c6b8449";

            // Log url into console log
            console.log(url);

            $(".fieldsearch").hide();
            $(".loader").css("display","block"); 

            // Search data follow keywords and filter time and language 
            fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.totalArticles == 0) {
                    $("main").html("<p>Nothing in this result. Try to search again!</p>"); 
                    $(".loader").fadeOut(2000);  
                } else if(data.errors != undefined){
                    alert("Error:" + data.errors.q);
                }
                 else {
                    $("main").html(""); 
                    // console.log(); 
                    data.articles.forEach(function(val){
                    
                        let image = val.image;
                        let title = val.title;
                        let url = val.url;
                        let time = val.publishedAt;
                        let content = val.content;
                
                        $("main").append("<article><div class=\"picture\"><a href=\"" +
                        url + "\" target=\"_blank\">"+"<img src=\"" + image +
                        "\"></a></div><div class=\"content\"><a href=\"" + url + "\" target=\"_blank\">" + title +
                        "</a><span>" + time + "</span><p>" + content + "</p></div></article>");          
                    })
                    $(".loader").fadeOut(2000);
                }   
            });
        }
        //Clear value of input field
        $("#fsearch").val("");

         //Reset value of select field
         $('#time').prop('selectedIndex',0);
         $('#language').prop('selectedIndex',0);

        //Hide Time and Language filter
        $("#time").hide("slow");
        $("#language").hide("slow");
    });
});