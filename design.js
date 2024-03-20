var p1_score = 0;
var p2_score = 0;
var p1_arr = [];
var p2_arr = [];
var count=0;
function checknum()
{
    if(count!=5)
    {
        var p1num=(Math.ceil(Math.random() *100));
        var p2num=(Math.ceil(Math.random()*100));
        console.log(p1num+" "+p2num);
        p1_arr.push(p1num);
        p2_arr.push(p2num);

        if(p1num % 2 == 0)
        {
            p1_score++;
            document.getElementById("p1_s").textContent=p1_score;
        }
        if(p2num % 2 == 0)
        {
            p2_score++;
            document.getElementById("p2_s").textContent=p2_score;
        }
        updatecircle();
        count++;

    }
    else
    {
        if(p1_score > p2_score)
        {
            document.getElementById("re").textContent="Player 1 wins !!!";
        }
        else if(p1_score < p2_score)
        {
            document.getElementById("re").textContent="Player 2 wins !!!";
        }
        else
        {
            document.getElementById("re").textContent="Match Draw !!!";
        }

    }
    function updatecircle()
    {
        var p1Circle = document.getElementById("player1").children;
        console.log(p1Circle);
        for(let i=0;i<p1_arr.length;i++)
        {
            if(p1_arr[i]%2==0)
                p1Circle[i].style.backgroundColor = "green";
            else
                p1Circle[i].style.backgroundColor = "red";
        }
    
    
        var p2Circle = document.getElementById("player2").children;
        console.log(p2Circle);
        for(let i=0;i<p2_arr.length;i++)
        {
            if(p2_arr[i]%2==0)
                p2Circle[i].style.backgroundColor = "green";
            else
                p2Circle[i].style.backgroundColor = "red";
        }
    
    }
}
