let buttons = document.querySelectorAll('.btn');
// console.log(buttons);


// Create Product Storage
if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}

for(let btn of buttons) {
    btn.onclick = function(e) {
        e.preventDefault();
        let prId = e.target.parentElement.parentElement.id;
        let prName = e.target.previousElementSibling.previousElementSibling.innerText;
        let prPrice = e.target.previousElementSibling.innerText;
        let prImage = e.target.parentElement.previousElementSibling.src
        
        let basket = JSON.parse(localStorage.getItem('basket'));

        let existProd = basket.find(pr => pr.Id === prId);
        // console.log(existProd);

        if(existProd == undefined) {
            basket.push({
                Id: prId,
                Name: prName,
                Price: prPrice,
                Image: prImage,
                Count: 1
            })
        }
        else{
            existProd.Count +=1
        }

        localStorage.setItem('basket',JSON.stringify(basket));
        document.getElementById('toaster').style.opacity = '1'
        setTimeout(() => {
            document.getElementById('toaster').style.opacity = '0'
        }, 1000);
        CountProduct();
    }
}



function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}

CountProduct();