    const set= document.querySelector('button#set')
    const Reset= document.querySelector('button#reset')
    const startORpause= document.querySelector('button#sorp')
    const time= document.querySelectorAll('.time div')
    const timeName= document.querySelectorAll('.timer div span')
    const input= document.querySelectorAll('input')
    const runValue=document.querySelectorAll('.time p') 
    // const spans = document.querySelectorAll('.time div span')


    set.addEventListener('click',e=>{
        input.forEach(i=>{
            i.classList.toggle('edit')
            i.toggleAttribute('disabled')
            // spans.forEach(span=>span.classList.toggle('visible'))
            if(!i.hasAttribute('disabled')){
                i.value=''
            } else startORpause.focus()
        })
        if (input[0].hasAttribute('disabled')){
            for (i=0; i<input.length; i++){
                if(input[i].value.length==0||input[i].value==0){
                    input[i].value='00'
                }
                runValue[i].textContent= input[i].value.padStart(2,'0')
            }
        }
        if(input[0].value.length==0){
            input[0].focus()
        }
    })

   input.forEach(i=>{
        i.onfocus=()=>{
            if(!i.hasAttribute('disabled')){
                i.value=''
            }
        }
   })

    function moveon(num){
        const target = input[num]
        let ilength= target.value.length
        let nextInputIndex = input[num+1]
        let noIndex = input[4]

        if(ilength<2){
            target.addEventListener('keypress',e=>{
                if (e.key === "Enter"){
                    if (target==input[3]){
                        set.focus()
                    }
                    nextInputIndex.focus()
                }else removeEventListener('keypress', undefined)
            })
        }
        if (ilength==2 && nextInputIndex!=noIndex){
            console.log('yipeeeeeee')
            nextInputIndex.focus()
        } else if(ilength==2 && nextInputIndex==noIndex){

        set.focus()            
        }
        return
    }

    function vibrateThings(element){
        let interval= setInterval(()=>{
            element.classList.toggle('vibrator')
        },100)
        setTimeout(()=>clearInterval(interval),600) 
    }

    startORpause.addEventListener('click',e=>{

        
        const start = document.querySelector('#start')
        const pause = document.querySelector('#pause')

            let dayValue = runValue[0].textContent*86400000
            let hourValue = runValue[1].textContent*3600000
            let minuteValue = runValue[2].textContent*60000
            let secondValue = runValue[3].textContent*1000
            const allValue = dayValue+hourValue+minuteValue+secondValue 
            const present = new Date().getTime()
            const future = new Date(present + allValue)
            //future value may be the possible source of glitch 
            
            if(allValue!=0){    
                startORpause.classList.toggle('running')
                start.classList.toggle('fadeout')
                pause.classList.toggle('opacity')
                pause.classList.toggle('fadein')

            let counter = setInterval(()=>{ 
                const now = new Date()
                const countDownTime = future.getTime() - now.getTime()
                const seconds = 1000;
                const minutes = seconds*60 ;
                const hours = minutes* 60;
                const days = hours *24; 
            
                const day =Math.floor(countDownTime/days)
                const hour =Math.floor((countDownTime%days)/hours)
                const minute =Math.floor((countDownTime%hours)/minutes)
                const second =Math.floor((countDownTime%minutes)/seconds) ;
                
                if (countDownTime!=0 && !startORpause.classList.contains('running')){
                    clearInterval(counter)
                    second ++
                }
                
                runValue[0].textContent=day.toString().padStart(2,'0')
                runValue[1].textContent=hour.toString().padStart(2,'0')
                runValue[2].textContent=minute.toString().padStart(2,'0')
                runValue[3].textContent=second.toString().padStart(2,'0')

                if (minute<=0 && second <= 30){
                    time[3].classList.add('redeffect')
                    runValue[3].classList.add('redeffecttext')
                    timeName[3].classList.add('redeffecttext')
                }

                if (countDownTime<=1000){
                    clearInterval(counter)
                    startORpause.classList.toggle('running')
                    start.classList.toggle('fadeout')
                    pause.classList.toggle('opacity')
                    pause.classList.toggle('fadein')
                    time[3].classList.remove('redeffect')
                    runValue[3].classList.remove('redeffecttext')
                    timeName[3].classList.remove('redeffecttext')
                }
                
            },1000)
            } else {
               set.focus()
               vibrateThings(set)
            }
       
    })

    Reset.addEventListener('click', (e)=>{
        if(startORpause.classList.contains('running')){
            vibrateThings(startORpause)
        } else {
            runValue[0].textContent='00'
            runValue[1].textContent='00'
            runValue[2].textContent='00'
            runValue[3].textContent='00'
        }
    })

    