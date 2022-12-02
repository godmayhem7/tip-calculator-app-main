function calculate(x, bill,amountOfPerson){
   let hundred = 100
   let calc = (bill*x/hundred)/amountOfPerson
   return calc
}

  let btnLength = document.querySelectorAll(".per").length

  for (let i=0;i<btnLength; i++){
      document.querySelectorAll(".per")[i].addEventListener("click",function(){

        let bill = document.querySelectorAll(".input")[0].value
  
        let amountOfPerson = document.querySelectorAll(".input")[1].value

         if (this===document.querySelectorAll(".per")[0]){
          document.querySelectorAll("h1")[0].innerHTML="$" + calculate(5, bill, amountOfPerson)
          document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(5, bill, amountOfPerson)
        }else if (this===document.querySelectorAll(".per")[1]){
          document.querySelectorAll("h1")[0].innerHTML="$" + calculate(10, bill, amountOfPerson)
          document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(10, bill, amountOfPerson)
        }else if (this===document.querySelectorAll(".per")[2]){
          document.querySelectorAll("h1")[0].innerHTML="$" + calculate(15, bill, amountOfPerson)
          document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(15, bill, amountOfPerson)
        }else if (this===document.querySelectorAll(".per")[3]){
          document.querySelectorAll("h1")[0].innerHTML="$" + calculate(25, bill, amountOfPerson)
          document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(25, bill, amountOfPerson)
        }else if (this===document.querySelectorAll(".per")[4]){
          document.querySelectorAll("h1")[0].innerHTML="$" + calculate(50, bill, amountOfPerson)
          document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(50, bill, amountOfPerson)
        }else{
          return null
        }
      })
  }

  document.querySelector(".custom").addEventListener("keypress",(e)=>{



   if (e.key==="Enter"){
    let bill = document.querySelectorAll(".input")[0].value
    let amountOfPerson = document.querySelectorAll(".input")[1].value
    let custom = document.querySelector(".custom").value
    document.querySelectorAll("h1")[0].innerHTML="$" + calculate(custom, bill, amountOfPerson)
    document.querySelectorAll("h1")[1].innerHTML="$" + 7.6*calculate(custom, bill, amountOfPerson)
   }else{
    return null
   }

  })


  document.querySelector(".reset").addEventListener("click",()=>{
    document.querySelectorAll(".input")[1].value=null
    document.querySelectorAll(".input")[0].value=null
    document.querySelector(".custom").value=null
    document.querySelectorAll("h1")[0].innerHTML="$0.00"
    document.querySelectorAll("h1")[1].innerHTML="$0.00"
  })