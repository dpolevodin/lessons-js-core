const animationClass = {
    darkThemeIsActive: false,
    changeTheme: () => {
        if (!this.darkThemeIsActive) {
            document.documentElement.style.setProperty('--background-theme', 'linear-gradient(0deg, rgba(0,0,0,1) 38%, rgba(7,18,15,1) 62%, rgba(20,50,43,1) 71%, rgba(17,59,55,1) 85%, rgba(36,51,61,0.7) 100%)');
            document.documentElement.style.setProperty('--elements-color-theme', '#FFF')
            this.darkThemeIsActive = true
        } else {
            document.documentElement.style.setProperty('--background-theme', 'linear-gradient(15deg, rgba(0,255,250,0.1) 0%, rgba(217,255,142,0.2) 37%, rgba(214,255,154,0.3) 57%, rgba(0,184,63,0.3) 91%)');
            document.documentElement.style.setProperty('--elements-color-theme', '#000')
            this.darkThemeIsActive = false
        }
    },
    darkThemeIsActive: false,
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