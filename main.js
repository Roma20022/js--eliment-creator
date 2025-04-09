class CreateElement{
  constructor( tag, className, content){
    this.tag= tag
    this.className = className
    this.content = content
  }
  CreateNewElement(){
    const newEliment = document.createElement(this.tag)
    newEliment.classList.add(this.className)
    newEliment.textContent= this.content
    document.body.append(newEliment)
  }
}
const a = new CreateElement('p',"ghfd","новый текст")
a.CreateNewElement()