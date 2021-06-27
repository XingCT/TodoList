let data = [
    {
        "message":"把冰箱發霉的檸檬拿去丟",
        "complete":"no"
    },{
        "message":"打電話叫媽媽匯款給我",
        "complete":"done"
    },{
        "message":"整理電腦資料夾",
        "complete":"no"
    },{
        "message":"繳電費水費瓦斯費",
        "complete":"done"
    },{
        "message":"刪訊息",
        "complete":"no"
    },{
        "message":"約vicky禮拜三泡溫泉",
        "complete":"no"
    },{
        "message":"約ada禮拜四吃晚餐",
        "complete":"no"
    }
];
// Variable
const enter = document.querySelector('.enter');
const save = document.querySelector('.save');
const filter = document.querySelector('.filter');
const list = document.querySelector('.list');
const del = document.querySelector('.del');
const check = document.querySelector('.check');
const total = document.querySelector('.total');
const clear = document.querySelector('.clear');

// print data
function renderData(){
    let str = '';
    data.forEach(function(item,index){
        str += `
        <li class=${item.complete}>
            <span class="check" data-check="${index}"></span>
            <p>${item.message}</p>
            <span class="del" data-del="${index}">×</span>
        </li>
        `
    })
    list.innerHTML = str;
    // print total
    let num = 0;
    data.forEach(function(item){
        if(item.complete == "no"){
            num++;
        }
    })
    total.innerHTML = `${num} 個待完成項目`
}
renderData();
// update data
save.addEventListener('click',function(e){
    if(enter.value == ''){
        alert("請輸入代辦事項");
        return;
    }
    obj = {"complete":"no"};
    obj.message = enter.value;
    data.push(obj);
    renderData();
    enter.value = '';
})
// make a choice
filter.addEventListener('click', function(e){
    let str = '';
    data.forEach(function(item, index){
        if(e.target.getAttribute("class") == item.complete){
            str += `
            <li class=${item.complete}>
                <span class="check" data-check="${index}"></span>
                <p>${item.message}</p>
                <span class="del" data-del="${index}">×</span>
            </li>
            `
        }
        list.innerHTML = str;
        // all
        if(e.target.getAttribute("class") == "all"){
            renderData();
        }
    })
})
// data function
list.addEventListener('click',function(e){
    //  data delete
    if(e.target.getAttribute("class") == "del"){
        let num = e.target.getAttribute("data-del");
        data.splice(num, 1);
        renderData();
    }
    // data check
    if(e.target.getAttribute("class") == "check"){
        let num = e.target.getAttribute("data-check");
        if(data[num].complete == "no"){
            data[num].complete = "done";
        }else{
            data[num].complete = "no";
        }
        renderData();
    }
})
// delete
clear.addEventListener('click',function(e){
    let obj = [];
    data.forEach(function(item,index){
        if(item.complete !== "done"){
            obj.push(item);
        }
    })
    data = obj;
    renderData();
})