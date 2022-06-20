    const set= document.querySelector('button#set')
    const stop= document.querySelector('p#stop')
    const Reset= document.querySelector('p#reset')
    const startORpause= document.querySelector('p#sorp')
    const time= document.querySelector('.time div')
    const timeName= document.querySelector('.timer div span')
    const input= document.querySelectorAll('input')

    set.addEventListener('click',e=>{

        input.forEach(i=>{
            i.classList.toggle('edit')
            i.toggleAttribute('disabled')
            i.onfocus=()=>{
                console.log('hippooooooo')
            }
        })
        input[0].focus()
    })

    function moveon(num){

        const target = input[num]
        let ivalue= target.value.length
        let nextInputIndex = input[num+1]
        let noIndex = input[4]
        if (ivalue==2 && nextInputIndex!=noIndex){
            console.log('yipeeeeeee')
            nextInputIndex.focus()
        } else if(ivalue==2 && nextInputIndex==noIndex){
            set.focus()
        }
        return
        
    }

    startORpause.addEventListener('click',e=>{

        let dayValue = input[0].value
        let hourValue = input[1].value
        let minuteValue = input[2].value
        let secondValue = input[3].value

        const date= new Date()
        const newday= date.getDay
    })