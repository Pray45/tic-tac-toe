let btns = document.querySelectorAll(".btn")
let resetButton = document.querySelectorAll(".reset")
let pnl = document.querySelector(".wonpnl")
let inrtxt = document.querySelector(".inrtxt")
let scorO = document.querySelector(".scorO")
let scorX = document.querySelector(".scorX")
let turn = true
const win = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],]

btns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if(turn)
        {
            btn.innerText = 'X'
            turn = false
            btn.disabled = 'true'
        }
        else{
            btn.innerText = 'O'
            turn = true
            btn.disabled = 'true'
        }

        resetButton.addEventListener("click" , () => {
            btn.innerText = ""
        })

        wining()
        
    })
})


const wining = () =>{
    for(let ptn of win){
        let pt1 = btns[ptn[0]].innerText;
        let pt2 = btns[ptn[1]].innerText;
        let pt3 = btns[ptn[2]].innerText;

        if( pt1 != "" && pt2 != "" && pt3 != ""){
            if(pt1 === pt2 && pt2 === pt3)
            {
                pnl.style.display = 'flex'
                inrtxt.innerText = `Noice ${pt1} Won`
            }
        }
    }
}



