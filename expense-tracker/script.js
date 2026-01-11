const expenses = []
let exp = document.getElementById("price");
let item = document.getElementById("item");
let table = document.querySelector("#table tbody")

let totalRevenue = 0;

const addExpense = function(){
    let itm = item.value;
    let price = exp.value;
    if (itm === ""){
        alert("please enter item name")
    }else if (price <= 0){
        alert("invalid price")
    }else{
        const obj = {
            sn: expenses.length > 0 ? expenses[expenses.length - 1].sn+1 : 1,
            item: itm,
            price: Number(price),
        }

        totalRevenue+=obj.price;

            let tr = document.createElement("tr");
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let td4 = document.createElement('td')

            let btn = document.createElement('button')


            td2.textContent = obj.item;
            td1.textContent = obj.sn;
            td3.textContent = obj.price;
            btn.textContent = "Delete";

            btn.addEventListener(("click"),(e)=>{
                // alert(e);
                let elem = e.target;
                let  trToRemove = elem.parentNode.parentNode;
                let cost = Number(trToRemove.children[2].textContent);
                trToRemove.remove();
                totalRevenue -=cost;
                document.getElementById("totalRev").textContent = totalRevenue;
                
            })
            td4.appendChild(btn);
            tr.appendChild(td1);
            tr.appendChild(td2);

            if (obj.price >= 10000){
                td3.style.color = "red";
                td3.style.fontWeight = "bold"
            }
            tr.appendChild(td3);
            tr.appendChild(td4);

            table.appendChild(tr);
            document.getElementById("totalRev").textContent = totalRevenue;
            expenses.push(obj);
       
    }
}