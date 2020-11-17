$(document).ready(function(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      
    $("body").on("click", ".myButtons", function()
        {
            var num = getRandomInt(4);
            console.log(num);
            for ( var i = 0; i < num; i++)
            {
                $("body").append("<button id="+num+" class='myButtons'>Click Me!</button>");
            }
            
            $(this).css("background-color", "green")
            console.log($(this))
        }
    )
})

