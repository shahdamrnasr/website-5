// confirm("your already registered on our website")






var orginal = document.getElementById("orginal")
var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var target1 = document.getElementById("target1")
var target2 = document.getElementById("target2")








box1.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box1"))  // دول اللي بحفط فيهم
box2.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box2"))
box3.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box3"))
box4.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box4"))
box5.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box5"))
box6.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box6"))
box7.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box7"))
box8.addEventListener("dragstart" , (e)=> e.dataTransfer.setData("text" , "box8"))




target1.addEventListener("dragover" , (e) => e.preventDefault())  // د بيقك المسك
target2.addEventListener("dragover" , (e) => e.preventDefault())
// target3.addEventListener("dragover" , (e) => e.preventDefault())



target1.addEventListener("drop" , (e) =>{  // د بيعمل الافلات
    // target1.appendChild(box1)
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    target1.appendChild(element)
})


target2.addEventListener("drop" , (e) =>{  // د بيعمل الافلات
    // target1.appendChild(box1)
    var id = e.dataTransfer.getData("text")
    var element = document.getElementById(id)
    target2.appendChild(element)
})




box1.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box1)
})

box2.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box2)
})
box3.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box3)
})
box4.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box4)
})
box5.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box5)
})
box6.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box6)
})
box7.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box7)
})
box8.addEventListener("dblclick" , ()=>{  // د بيرجعو تاني
    orginal.appendChild(box8)
})