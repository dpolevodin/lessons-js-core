const animationClass = {
    changeClass: (animationType) => {
        const avatar = document.getElementById('avatar')
        const buttons = document.querySelectorAll('button')
        console.log(avatar)
        avatar.classList.add(`avatar-animation-${animationType}`)
        
        for (item of buttons) {
            item.setAttribute('disabled', 'disabled')
        }

        setTimeout(() => {
            avatar.classList.remove(`avatar-animation-${animationType}`)
            for (item of buttons) {
                item.removeAttribute('disabled')
            }
        }, 2000);
    }
}

