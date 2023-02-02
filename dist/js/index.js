
let get = (tag) => document.querySelector(`#${tag}`);
let form = get('bookingForm'); // form 表單
form.addEventListener('change', showOptions);
// function submitOrder(event) {
//     event.preventDefault(); //必須取消預設行為
//     let component = event.target.id; 
//     let display = get(component); // 取該節點的 DOM
//     let showInput = get(`${component}_input`); // 取 Input節點的 DOM
//     let options = [...this.elements]; // form 表單下的所有物件存成陣列
//     // 取出點選的元素
//     let chooseTarget = options.filter((e) => e.checked);
//     if (chooseTarget) {
//         for(let item of chooseTarget){
//             // 先選好需要的元素
//             switch (item.id) { 
//                 case 'mobile':
//                     showInput.style.display = 'block';
//                     break;
//                 case 'carrier2':
//                     showInput.style.display = 'block';
//                     break;
//                 case 'carrier3':
//                     showInput.style.display = 'block';
//                     break;
//             }
//         }
//     } else {
//         console.log(options);
//     }
// }
const donate = document.querySelector("#donate");
const donate_Input = document.querySelector("#donate_input");
const carrier2 = document.querySelector("#carrier2");
const carrier2_Input = document.querySelector("#carrier2_input");
const carrier3 = document.querySelector("#carrier3");
const carrier3_Input = document.querySelector("#carrier3_input");
function showInput() {
    document.addEventListener("change", () => {
        if (donate.checked) {
            donate_Input.classList.remove('d-none')
        } else {
            donate_Input.classList.add('d-none')
        }
        if (carrier2.checked) {
            carrier2_Input.classList.remove('d-none')
        } else {
            carrier2_Input.classList.add('d-none')
        }
        if (carrier3.checked) {
            carrier3_Input.classList.remove('d-none')
        } else {
            carrier3_Input.classList.add('d-none')
        }
    })
}
function showOptions() {
    let options = [...this.elements]; // form 表單下的所有物件存成陣列
    // 取出點選的元素
    let chooseTarget = options.filter((e) => e.checked);
    chooseTarget.forEach(item=>{
        item.checked = true;
    })
    check(chooseTarget);
}
function show(name) {
    document.querySelector(name).parentNode.classList.remove('d-none')
}
function hide(name) {
    document.querySelector(name).parentNode.classList.add('d-none')
}
function resetB2B() {
    // chooseTarget = []
    hide("#email");
    hide("#mobile");
    hide("#donate");
    show("#username");
    show("#officename");
    show("#address");
    hide("#officeTax");
    document.querySelector("#option2").classList.add('d-none');
    // document.querySelector("#paper").checked = false;
}
function resetB2C() {
    show("#mobile");
    show("#donate");
    hide("#email");
    hide("#officeTax");
}
function removeRequire(name) {
    if (document.querySelector(name).required = true) {
        const Require = document.querySelectorAll(".controlRequire");
        Require.forEach((item) => {
            document.querySelector(name).removeAttribute('required')
            item.classList.add("d-none");
        })
    }
}
function addRequire(name) {
    if (document.querySelector(name).required !== true) {
        const Require = document.querySelectorAll(".controlRequire");
        Require.forEach((item) => {
            console.log(item);
            item.classList.remove("d-none");
        })
    }
}
function check(chooseTarget) {
    console.log(chooseTarget);
    switch (true) {
        case (chooseTarget[0].id ==='office'):
            document.querySelector("#option1").classList.add('d-none')
            if (chooseTarget.length == 1) {
                console.log("office");
                show("#officename")
                show("#address")
                show("#officeTax")
                removeRequire("#officename");
                removeRequire("#address");
            }else {
                resetB2B()
            }
            break;
        case (chooseTarget[0].id ==='personal'):
            document.querySelector("#option1").classList.remove('d-none');
            resetB2C();
            console.log("personal");
            if (chooseTarget.length == 1) {
                break;
            }
            if (chooseTarget[1].id === 'mobile') {
               console.log("personal＆mobile");
                document.querySelector("#option2").classList.remove('d-none');
                hide("#officename");
                hide("#officeTax");
                show("#username");
                show("#address");
                removeRequire("#username");
                removeRequire("#address");
            } else if (chooseTarget[1].id === 'donate') {
                document.querySelector("#option2").classList.add('d-none');
                show("#username");
                show("#address");
                removeRequire("#username");
                removeRequire("#address");
            }
            break;
        default:
            console.log("no match");
            break;
    };
}

function init() {
    showInput();
    removeRequire("#username");
}
init()