function GetProducts() {
    let basket = JSON.parse(localStorage.getItem('basket'));

    let item = '';
    basket.forEach(pr => {

        let x = ''
        let a = pr.Price;

        for(i=0 ;i < a.length-4; i++){
            x += a[i];
        }
        let total = parseFloat(x) * parseFloat(pr.Count)
        

        item += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td>
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name}</td>
                <td>
                <input min="1" class="inp" type="number" value=${pr.Count}>
                </td>
                <td> ${pr.Price}</td>
                <td> ${total}</td>
            </tr>
        `   
    })
    document.getElementById('body').innerHTML = item;


    
}

GetProducts();

let baskets = JSON.parse(localStorage.getItem('basket'));

let inputs = document.querySelectorAll('.inp')
inputs.forEach(inp=>{
    inp.onchange=function(e){
       price = e.target.parentElement.parentElement.children[4].innerText;
       total = e.target.parentElement.parentElement.children[5];
       total.innerText=e.target.value * parseFloat(price)
    }
})
