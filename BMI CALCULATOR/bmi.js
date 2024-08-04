const form=document.querySelector('form')
form.addEventListener('submit',function (e) {
    e.preventDefault();


    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.getElementById("weight").value)
    const results = (document.querySelector('#results'))

    if (height === '' || isNaN(height) || height < 0) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if (weight === '' || isNaN(weight) || weight < 0) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show the reults
        results.innerHTML = `<span> Your Bmi is : ${bmi} </span>`;
    }
})