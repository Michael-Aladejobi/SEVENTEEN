let count = 0

function addToCart(){
    count = count + 1
    document.querySelector('#cart-count').textContent = count
    alert("Hi There! \nYou've added " + count + " item(s) to cart!")
}
