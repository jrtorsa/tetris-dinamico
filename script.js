const selectingColor = () => {
  const color = document.getElementById("colors").value;
  return color;
};

addEventListener('click', e => {
    const color = document.getElementById("colors").value;
    if(color === 'blue'){
        e.target.style.backgroundColor = 'blue'
     }
    if(color === 'yellow'){
        e.target.style.backgroundColor = 'yellow'
     }
    if(color === 'orange'){
        e.target.style.backgroundColor = 'orange'
     }
    if(color === 'green'){
        e.target.style.backgroundColor = 'green'
     }
    if(color === 'pink'){
        e.target.style.backgroundColor = 'pink'
     }  
})
