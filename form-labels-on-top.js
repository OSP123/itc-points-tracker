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
    for (var i=1; i<=3; i++){        
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
function kstargetFunction(input){    
    var player = input.data("player");
    var secondary = input.data("secondary");    
    var value = input.val();
    for (var i=1; i<=3; i++){        
        var target = $(".target.player-"+player+".secondary-"+secondary+".round-"+i)        
        target.text("Target: "+value);
        target.show();
    }
}

function deathtargetFunction(input){
    var player = input.data("player");
    var secondary = input.data("secondary");
    var label = input.data("label");
    var value = input.val();    
    for (var i=1; i<=3; i++){        
        var target = $(".secondary.player-"+player+".secondary-"+secondary+".round-"+i)        
        target.find(".label-"+label).text(value+" destroyed")
    }
}

function updateLabels(value, player, secondary){
    $(".checkbox-text").val("");
    $(".checkbox-text").attr("placeholder","");
    $(".checkbox-text").hide();
    $(".target.player-"+player+".secondary-"+secondary).hide();
    var labels = new Array(5);
    for (var i=1;i<=3;i++){
        for (var j=1;j<=4;j++){
            labels[j] =  $(".player-"+player+".secondary-"+secondary+".round-"+i).children(".label-"+j)
        }
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
                        element.text("2 wounds")
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
