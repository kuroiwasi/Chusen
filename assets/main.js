let dataArea;
let resultArea;
let waitingTime;
let running = false;

window.onload = () => {
    dataArea = document.getElementById("data");
    resultArea = document.getElementById("result");
    waitingTime = document.getElementById("waitingTime");
    let buttonGroup = document.getElementById("datasetButtonGroup");
    for (let key in DATA)
    {
        let button = document.createElement("button");
        button.setAttribute("onclick", "SetData(DATA."+key+")");
        button.innerHTML = key;
        buttonGroup.appendChild(button);
    }
};

function SetData(data)
{
    dataArea.innerHTML = data;
}

function Next()
{
    if(!running)
    {
        running = true;
        Clear();
        resultArea.classList.add("spinner");
        setTimeout( () => {
            resultArea.classList.remove("spinner");
            let data = dataArea.innerHTML.split(",");
            let index = parseInt(Math.random()*(data.length),10);
            resultArea.innerHTML = data[index];
            if(document.getElementById("onlyOnce").checked) {
                data.splice(index, 1);
                dataArea.innerHTML = data.join();
            }
            running = false;
        }, waitingTime.value);
    }
}

function Clear()
{
    resultArea.innerHTML = "";
}