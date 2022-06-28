    const set= document.querySelector('button#set')
    const stop= document.querySelector('p#stop')
    const Reset= document.querySelector('p#reset')
    const startORpause= document.querySelector('p#sorp')
    const time= document.querySelector('.time div')
    const timeName= document.querySelector('.timer div span')
    const input= document.querySelectorAll('input')
    const runValue=document.querySelectorAll('.time p') 


    set.addEventListener('click',e=>{
        input.forEach(i=>{
            i.classList.toggle('edit')
            i.toggleAttribute('disabled')
            if(!i.hasAttribute('disabled')){
                i.value=''
            }
        })
        if (input[0].hasAttribute('disabled')){
            for (i=0; i<input.length; i++){
                if(input[i].value.length==0||input[i].value==0){
                    input[i].value='00'
                }
                if(input[i].value>0 && input[i].value.length<2){

                }
                runValue[i].textContent= input[i].value.padStart(2,'0')
            }
        }
        if(input[0].value.length==0){
            input[0].focus()
        }
    })

    function moveon(num){

        const target = input[num]
        let ivalue= target.value.length
        let nextInputIndex = input[num+1]
        let noIndex = input[4]

        if(ivalue<2){
            target.addEventListener('keypress',e=>{
                if (e.key === "Enter"){
                    nextInputIndex.focus()
                }else removeEventListener('keypress', undefined)
            })
        }
        if (ivalue==2 && nextInputIndex!=noIndex){
            console.log('yipeeeeeee')
            nextInputIndex.focus()
        } else if(ivalue==2 && nextInputIndex==noIndex){

            input.forEach(box=>{
                if(box.length==0){
                    console.log('yipaaaaaaa')
                }})
            set.focus()            
        }
        return
        
    }



    startORpause.addEventListener('click',e=>{

       

        // let dayValue = input[0].value
        // let hourValue = input[1].value
        // let minuteValue = input[2].value
        // let secondValue = input[3].value

       

        const date= new Date()
        
    })