
let section = document.querySelector('section')
console.log(section);

let item =Array.from( section.children)
console.log(item);

item.forEach(e =>{
    let title = e.firstElementChild
    // console.log(title);
    title.addEventListener('click', () => {
        let sibling = title.nextElementSibling
        sibling.classList.toggle('active')
        console.log(sibling);
        
    })  
})
