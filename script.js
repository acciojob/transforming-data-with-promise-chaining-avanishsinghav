document.getElementById("btn").addEventListener("click", function () {
    let inputValue = parseFloat(document.getElementById("ip").value);
    let outputDiv = document.getElementById("output");

    if (isNaN(inputValue)) {
        outputDiv.innerHTML = "Please enter a valid number";
        return;
    }

    outputDiv.innerHTML = "";

    // Initial promise
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${inputValue}`;
            resolve(inputValue);
        }, 2000);
    })
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            let result = num * 2;
            outputDiv.innerHTML = `Result: ${result}`;
            resolve(result);
        }, 2000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            let result = num - 3;
            outputDiv.innerHTML = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            let result = num / 2;
            outputDiv.innerHTML = `Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .then((num) => new Promise((resolve) => {
        setTimeout(() => {
            let result = num + 10;
            outputDiv.innerHTML = `Final Result: ${result}`;
            resolve(result);
        }, 1000);
    }))
    .catch((error) => {
        outputDiv.innerHTML = `Error: ${error}`;
    });
});
