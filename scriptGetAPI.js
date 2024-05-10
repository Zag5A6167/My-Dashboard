$(document).ready(function(){
    $("#catfacts-api").click(function () {  
    
        fetch("https://catfact.ninja/fact")
            .then(response => response.json())
            .then(data => {
                alert(data.fact)
            })
    })

    $("#bored-api").click(function () {  
    
        fetch("https://www.boredapi.com/api/activity")
            .then(response => response.json())
            .then(data => {
                alert(data.activity)
            })
    })
})