<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <button onclick="calculateDiscount('price',10)">Discount</button>
    <script>

    function calculateDiscount(price , discount){

        try{

            if(typeof price != "number" || typeof discount != "number")
        {

            throw new Error("Price and discount should be in nos ")

        }
            let finalprice = price -(price*discount /100);
            console.log("final price is :" , finalprice);
        }
        catch(error)
        {document.write("Calculation error :", error.message)}


    }
    </script>
</body>
</html>



<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<style>
    .box{
        width:100px;
        height: 100px;
        background-color: aqua;
    }
</style>
</head>
<body>

<h2>This is a heading</h2>

<p id="first">This is a paragraph.</p>
<p id="second">This is another paragraph.</p>
<p id="third">This is another paragraph.</p>


<button id="btn_hide">Hide</button>
<button id="fadding_effect"> Fade</button>
<button id="Box"> Box animation</button>

<div class="box">some content</div>

<script src="script.js"></script>

</body>
</html>



Script.js


// $(document).ready(function(){
//   $("#btn_hide").click(function(){
   
//     $("#second").toggle(2000, function()
// {
//     console.log("Toggle done or finished");
// }
// );
//   });
// });


// $(document).ready(function(){
//   $("#fadding_effect").click(function(){
   
//    // $("#third").fadeOut();
//     $("#third").fadeTo("slow",0.5);
//   });
// });


// $(document).ready(function(){
//   $("#Box").click(function(){
   
//    // $("#third").fadeOut();
//     $(".box").animate({

//         width : "+=200px",
//         height : "200px",
//         fontSize : "20px"
//     },"slow")
//   });
// });

$("body").keydown(function(event){
  if(event.which == 65)
  {
      $("#second").hide(2000,function(){console.log("Task Completed ")});

  }

   if(event.which == 68)
  {
      $("#second").show(2000,function(){console.log("Task Completed ")});

  }
   
console.log(event.which);
});






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        async function fetchUserAsync()       
        {
            console.log("Fetching all users data")
          const response =  await fetch("https://jsonplaceholder.typicode.com/users")
           const data =  await response.json()
            console.log("users data" , data);
        }

        fetchUserAsync()
        console.log("Meanwhile , the rest of the app execution will be running")

    </script>
</body>
</html>

