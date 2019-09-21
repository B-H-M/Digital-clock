
const clock = document.querySelector(".clock");


const tick = () =>{
  
    const now = new Date();
  
    
  //   console.log(typeof now)
    
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
//     const d = now.getDay();
//     const mo = now.getMonth();
//     const y = now.getFullYear();
    
    const html = ` 
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span> `;

    clock.innerHTML = html;
//       console.log(`sec: ${s}, Min: ${m}, 
//       Hr: ${h}, Day: ${d}, mon: ${m}, Yr: ${y}`);
    
  };
  
   setInterval(tick, 1000);
