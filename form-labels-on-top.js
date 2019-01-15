var scores = [0,0];

$(":checkbox").on("change", function(){
    console.log($(this).data("player"))
    if (this.checked){
        scores[parseInt($(this).data("player"))-1]++
    } else {
        scores[parseInt($(this).data("player"))-1]--
    }
    $("#scores").html("Score: "+scores[0]+" - "+scores[1])
})

$("select").on("change", function(){
    var player = $(this).data("player");
    var secondary = $(this).data("secondary");
    var value = $(this).val();
    var text=$(this).children(':selected').html();
    updateSpan(player, secondary, text);
    requestChoices(value, player, secondary, $(this).parent());
    updateLabels(value, player, secondary)
})

function updateSpan(player, secondary, text){
    for (var i=1; i<=6; i++){        
        $(".player-"+player+".secondary-"+secondary+".round-"+i).children("span").html(text)
    }
}

function requestChoices(value, player, secondary, parent){
    parent.find("div").remove();    
    switch(value){
        case "headhunter":
            break;
        case "kingslayer":
            var div = $("<div>")
            var label = $("<label>")
            label.text("Target character")
            var input = $("<input>")
            input.addClass("kstarget");
            input.attr("data-player",player);
            input.attr("data-secondary",secondary);
            input.attr("type","text");
            div.append("<br>", label, input);
            parent.append(div);
            $(input).on("input", function(){kstargetFunction($(this))})
            break;
        case "markedForDeath":
            for (var i=1; i<=4; i++){
                var div = $("<div>")
                var label = $("<label>")
                label.text("Target "+i)
                var input = $("<input>")
                input.addClass("deathtarget")
                input.attr("data-label", i)
                input.attr("data-player", player)
                input.attr("data-secondary", secondary)                
                input.attr("type","text")
                div.append("<br>", label, input)
                parent.append(div)
                $(input).on("input", function(){deathtargetFunction($(this))})
            }
            break;
        case "bigGameHunter":
            break;
        case "titanSlayer":
            break;
        case "reaper":
            for (var i=1; i<=6; i++){
                var counter = $("<input>");
                counter.val("0")
                counter.attr("type","number");
                counter.attr("step","1");
                counter.attr("id","counter-player-"+player+"-round-"+i);
                counter.css("width","50%")
                var target = $(".target.player-"+player+".secondary-"+secondary+".round-"+i);
                target.text("Models destroyed: ");
                target.append("<br>")
                target.append(counter);
                var plus = $("<button>");
                plus.text("+");
                plus.addClass("plus");                
                plus.attr("data-player", player)
                plus.attr("data-round", i)
                $(plus).on("click", function(){reaperFunction($(this), "plus")});
                target.append(plus);                
                var minus = $("<button>");
                minus.text("-");
                minus.addClass("minus");
                minus.attr("data-player", player)
                minus.attr("data-round", i)
                $(minus).on("click", function(){reaperFunction($(this), "minus")});
                target.append(minus);
            }
            break;
        case "recon":
            break;
        case "behindEnemyLines":
            break;
        case "butchersBill":
            break;
        case "groundControl":
            break;
        case"oldSchool":
            break;
    }
}

function reaperFunction(input, direction){
    event.preventDefault();
    console.log(input)
    var player = input.data("player")
    var round = input.data("round")
    console.log(player)
    console.log(round)
    var target = $("#counter-player-"+player+"-round-"+round)
    var oldval = parseInt(target.val())
    if (direction == "plus"){
        newval = oldval + 1;
    } else {
        newval = oldval - 1;
    }
    target.val(newval)
}

function kstargetFunction(input){    
    var player = input.data("player");
    var secondary = input.data("secondary");    
    var value = input.val();
        target.show();
}

function deathtargetFunction(input){
    var player = input.data("player");
    var secondary = input.data("secondary");
    var label = input.data("label");
    var value = input.val();    
    for (var i=1; i<=6; i++){        
        var target = $(".secondary.player-"+player+".secondary-"+secondary+".round-"+i);
        target.find(".label-"+label).text(value+" destroyed")
    }
}

function updateLabels(value, player, secondary){
    $(".checkbox-text").val("");
    $(".checkbox-text").attr("placeholder","");
    $(".checkbox-text").hide();
    $(".target.player-"+player+".secondary-"+secondary).hide();
    var labels = new Array(5);
    for (var i=1;i<=6;i++){
        for (var j=1;j<=4;j++){
            labels[j] =  $(".player-"+player+".secondary-"+secondary+".round-"+i).children(".label-"+j)
        }
        var target = $(".target.player-"+player+".secondary-"+secondary+".round-"+i);
        switch(value){
            case "headhunter":
                labels.forEach(function(element, i){
                    if (element){
                        element.text("Enemy destroyed "+i)
                        element.siblings(".checkbox-text").show();
                        element.siblings(".checkbox-text").attr("placeholder","Enemy")
                    }
                })
                break;
            case "kingslayer":
                labels.forEach(function(element){
                    if(element){
                        element.text("2 or 4 wounds")
                    }
                })
                break;
            case "markedForDeath":
                labels.forEach(function(element){
                    if(element){
                        element.text("Target destroyed")
                    }
                })
                break;
            case "bigGameHunter":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("Enemy destroyed "+i);
                        element.siblings(".checkbox-text").show();
                        element.siblings(".checkbox-text").attr("placeholder","Monster/Vehicle")
                    }
                })
                break;
            case "titanSlayer":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("8 wounds");
                        element.siblings(".checkbox-text").show();
                        element.siblings(".checkbox-text").attr("placeholder","Titanic")
                    }
                })
                break;
            case "reaper":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("20 models");                  
                    }
                })
                target.show();
                console.log(target)
                break;
            case "recon":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("1 round");                        
                    }
                })
                break;
            case "behindEnemyLines":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("Unit in enemy Deployment");
                        element.siblings(".checkbox-text").show();
                        element.siblings(".checkbox-text").attr("placeholder","Unit")
                    }
                })
                break;
            case "butchersBill":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("2+ Enemies destroyed");
                    }
                })
                break;
            case "groundControl":
                labels.forEach(function(element, i){
                    if(element){
                        element.text("Objective held x1");
                    }
                })
                break;
            case"oldSchool":
                labels[1].text(" An enemy unit is destroyed in the first Battle Round")
                labels[2].text("The enemy Warlord is destroyed at game’s end.")
                labels[3].text("Have one of your models within your opponent’s deployment zone at the end of the game.")
                labels[4].text("An enemy unit is destroyed in the last Battle Round played.")
            break;
        }
    }
}

$(window).scroll(function() {
if ($(document).scrollTop() > 600) {
    $("footer").show("slow");
} else if ($(document).scrollTop() < 100){
    $("footer").hide("slow");
}
});

$(".toggle").on("click", function(){
    var round = $(this).data("round")
    $(".round-"+round).toggle();
    var temp = $(this).text();
    var arrow =$(this).data("arrow")
    $(this).text(arrow);
    $(this).data("arrow",temp)
})
