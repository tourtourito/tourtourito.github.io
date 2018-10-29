function greet() {
    window.alert("Hello everyone ! ");
}


function init() {
    document.getElementById("first").src = "flower2.png"; // Of course you can choose other file than flower2
    // Of course you can choose other file than flower2
    document.getElementById("container").getElementsByTagName("img")[0].src = "flower1.png";
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[2].src = "flower1.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[4].src = "flower1.png";

    
         //images[5].src="flower2.png";
    document.getElementById("inner").innerHTML="Arthur your are the best!";

    let image = document.createElement("img");

    document.getElementById("new_element").appendChild(image).src="flower2.png";

    //TASK 5//
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
        let color = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = color[i];// fill with proper code
    }
    //TASK 6//

    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower2.png"){
                event.target.src = "flower1.png";
            }
                else {
                event.target.src = "flower2.png";
            }

        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);


   // file:///C:/Users/User/web3_example/flower1.png

}