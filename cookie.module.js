import './cookie.vendor.js';

const cookies = () => {
    const cookieElement = document.querySelector('.cookie');
    const acceptCookie = document.querySelector('.cookie__accept');

    acceptCookie.addEventListener('click', () => {
        cookieElement.style.display = 'none';
    })

    const cookies = () => {
        if (!Cookies.get('hide-cookie')) {
            setTimeout(() => {
                cookieElement.style.display = 'flex';
            }, 1000);
        }

        Cookies.set('hide-cookie', 'true', {
            expires: 30
        });
    }

    cookies();
}

export default cookies;


