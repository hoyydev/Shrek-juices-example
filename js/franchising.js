// var post= document.getElementById("post");
// post.addEventListener("click", function(){
//     var commentBoxValue= document.getElementById("comment-box").value;
 
//     var li = document.createElement("li");
//     var text = document.createTextNode(commentBoxValue);
//     li.appendChild(text);
//     document.getElementById("unordered").appendChild(li);
 
// });

function render(data){
    var html = "<div class ='comentBox d-flex '><div class ='leftPanelImg '><img class='w-50 rounded-circle' src ='/img/baner-icon/07D132B4-BB34-4BD8-8F26-5EC38035539E.png'/></div> <div class = 'rightPanel'><h5>"+data.name+"</h5><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div> ";
    $('#unordered').append(html);
}


$(document).ready(function(){ 

    var coment = [
        {
            "name": "Jonhny Dang", "Date": "10 Apr, 2023", "body": "A beutyfull"
        }
        ];

    for(var i=0 ; i<coment.length; i++){
        render(coment[i]);
    }

    $('.btn-submit').click(function(){
        var add0bj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#comment-box').val()
        };
        console.log(add0bj);
        coment.push(add0bj);
        render(add0bj);
        $('#name').val('');
        $('#date').val('dd/mm/yy');
        $('#comment-box').val('');
    });
});