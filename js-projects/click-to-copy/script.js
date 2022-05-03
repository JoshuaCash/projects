const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');



const copyText = (e) => {
    e.preventDefault();

    coupon.select();
    coupon.setSelectionRange(0, 99999999999);
    document.execCommand('Copy');

    btn.textContent = 'Copied!';
    setTimeout(() => {
        btn.textContent = 'Copy'
    }, 3000)
};

btn.addEventListener('click', copyText);