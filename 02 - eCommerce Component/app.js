const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]


window.addEventListener("click", (e)=>{
    const btn = e.target;
    const btnClass = btn.classList[0];
    if(btnClass == 'add'){
        btn.classList.replace("add","in-cart");
        btn.innerHTML = "<img src='images/check.svg' alt='Check' />";
        btn.innerHTML += "In Cart";
    }else if(btnClass == 'in-cart'){
        btn.classList.replace("in-cart","add");
        btn.firstChild.remove();
        btn.innerText = "Add to Cart";
    }else if(btnClass == 'increase' || btnClass == 'decrease'){
        let count = btn.parentElement.children[1];
        count.innerText = parseInt(count.innerText) + (btnClass=='increase' ? 1 : -1);
        if(count.innerText > 0){
            btn.closest("li").querySelector('.quantity').innerText = count.innerText;
            btn.closest("li").querySelector('.subtotal').innerText = `$${(Number(btn.closest("li").querySelector(".price").innerText.replace("$","")*count.innerText)).toFixed(2)}`;
        }else {
            btn.closest("li").remove();
        }
    }
});