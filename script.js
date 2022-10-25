
const table = document.querySelector('table')

const makeDisplay=data=>{
   data.map(user=>{
      const tr=document.createElement('tr')
      table.appendChild(tr)
      tr.classList.add('main')


      const tdP = document.createElement('td')
      tdP.textContent='+'
      tr.appendChild(tdP)
      
      
      const trHide=document.createElement('tr')
      trHide.classList.add('hide')
      const tdHide = document.createElement('td')
      tdHide.textContent=user.last_name
      trHide.appendChild(tdHide)
      table.appendChild(trHide)

      tdP.addEventListener('click',()=>{
          trHide.classList.toggle('hide')
          console.log(user)
       })
 
 
     const tdName = document.createElement('td')
     tdName.textContent=user.first_name
     tr.appendChild(tdName)
     
    const tdPhone = document.createElement('td')
    tdPhone.textContent=user.email
    tr.appendChild(tdPhone)
 
 
  })
}


 const request = async () =>{
    const url='https://reqres.in/api/users?page=2'
    const res = await fetch(url)
    const makejson = await res.json()
    const data = makejson.data
    makeDisplay(data)

   }

 request()



