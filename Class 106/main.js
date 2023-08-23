function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/FyyohSKrM/model.json', modelReady);
    document.getElementById("Ear").style.display = none;
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(eroor)
    }
    else
    {
        console.log(results)
        rn_r = Math.floor(Math.random() * 255) + 1;
        rn_g = Math.floor(Math.random() * 255) + 1;
        rn_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I cant hear - - - - - -" + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Missed ny - - - - - -" + (results[0].confidence * 100).toFixed(16) + "%";

        document.getElementById("result_label").style.color = "rgb(" + rn_r + "," + rn_b + "," + rn_g + ")";
        document.getElementById("result_accuracy").style.color = "rgb(" + rn_r + "," + rn_b + "," + rn_g + ")";

        if (results[0].label == "Background Noise")
        {
            document.getElementById("Animals").innerHTML =                
                "<img src = 'Lion.gif' id = 'Lion' width = '700' height = '600'>"
        }
        else if (results[0].label == "Snake")
        {
            document.getElementById("Animals").innerHTML = 

                "<img src = 'Snake.gif' id = 'Snake' width = '400' height = '450'>"
        }
        else if (results[0].label == "Elephant Trump")
        {
            document.getElementById("Animals").innerHTML = 
                "<img src = 'Elephant.gif' id = 'Elephant'>"
        }
    }
    
}