// Main javascript for the website

function main() {
    // Attach collapsibles to their siblings
    let collapsibles = document.getElementsByClassName('collapsible');
    for (let collapsible of collapsibles) {
        collapsible.addEventListener(
            'click',
            function() {
                this.classList.toggle('active');
                let content = this.nextElementSibling;
                if (getComputedStyle(content).opacity === '1') {
                    this.innerHTML = this.innerHTML.replace('▽ ', '▶ ');
                    content.style.animation = 'contentdisappear 0.25s';
                    content.style.opacity = '0';
                    content.style.height = '0';
                    content.style.padding = '0';
                } else if (getComputedStyle(content).opacity == '0') {
                    this.innerHTML = this.innerHTML.replace('▶ ', '▽ ');
                    content.style.animation = 'contentappear 0.25s';
                    content.style.opacity = '1';
                    content.style.height = '100%';
                    content.style.padding = 'var(--padding)';
                }
            }
        );
    }
}

