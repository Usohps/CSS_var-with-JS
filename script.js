const controllers= document.querySelectorAll(".controls input")

function handleupdate(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix) 
}
controllers.forEach(controllers => controllers.addEventListener("change",handleupdate))