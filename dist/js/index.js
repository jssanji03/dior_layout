
let get = (tag) => document.querySelector(`#${tag}`);
let form = get('bookingForm'); // form 表單
form.addEventListener('change', showOptions);
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
    console.log(chooseTarget);
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
    hide("#mobile");
    hide("#donate");
    hide("#username");
    show("#officename");
    show("#address");
    hide("#officeTax");
    document.querySelector("#option2").classList.add('d-none');
}
function resetB2C() {
    show("#mobile");
    show("#donate");
    hide("#officeTax");
    removeRequire("#address");
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
            document.querySelector("#option1").classList.add('d-none');
            console.log("office");
            hide("#username");
            if (chooseTarget.length == 1) {
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