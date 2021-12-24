const Form = function(){
    this.arrDays = [];

    this.settings = {
        needToDo: 6,
        countDays: 5
    };

    this.DOM = {
        arrDays: null,
        formSettings: null
    };

    this.load();
    this.getDOM();
    this.initDOM();
    this.checkDisable();
}

window.addEventListener("load", () => {
    new Form();
})

Form.prototype.getDOM = function(){
    let handler = event => {
        event.preventDefault();
        this.settings.needToDo = parseInt(this.DOM.formSettings.querySelector('select[name="amount-subjects"]').value);
        this.settings.countDays = parseInt(this.DOM.formSettings.querySelector('select[name="amount-day"]').value);
        this.arrDays = new Array(this.settings.countDays).fill(0).map(_ => []);
        this.save();
        this.initDOM();
    }
    this.DOM.arrDays = document.querySelector(".week");
    this.DOM.formSettings = document.querySelector("#settings");
    this.DOM.formSettings.addEventListener("submit", handler);
};

Form.prototype.initDOM = function(){
    this.DOM.formSettings.querySelector('select[name="amount-subjects"]').value = this.settings.needToDo;
    this.DOM.formSettings.querySelector('select[name="amount-day"]').value = this.settings.countDays;
    this.DOM.arrDays.innerHTML = "";
    this.arrDays.forEach((dayItem, index) => {
        let thisDay = document.createElement("div");
        thisDay.className = 'day';
        thisDay.innerHTML = `
            <div class="day-name">
                ${["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"][index]}
            </div>
            <form data-day="${index}">
                <input placeholder="Текст задания" type="text" name="text">
            </form>
            <div class="day-list">
                
            </div>
        `;
        dayItem.forEach((actionItem, index) => {
            thisDay.querySelector(".day-list").appendChild(this.createActionNode(index, actionItem));
        });
        thisDay.querySelector("form").addEventListener("submit", this.add.bind(this));
        this.DOM.arrDays.appendChild(thisDay);
    });
};

Form.prototype.createActionNode = function(index, content){
    let action = document.createElement("div");
    action.className = "day-item";
    action.innerHTML = `
        <div class="day-item__index">   </div>
        <div class="day-item__content"></div>
    `;
    action.querySelector('.day-item__index').appendChild(document.createTextNode(++index));
    action.querySelector('.day-item__content').appendChild(document.createTextNode(content));

    return action;
}

Form.prototype.load = function(){
    this.settings = JSON.parse(localStorage.getItem('settings')) || this.settings;
    this.arrDays = JSON.parse(localStorage.getItem('week')) || this.arrDays;
};

Form.prototype.save = function(){
    localStorage.setItem('settings', JSON.stringify(this.settings));
    localStorage.setItem('week', JSON.stringify(this.arrDays));
};

Form.prototype.add = function(event){
    event.preventDefault();
    let thisDay = parseInt(event.target.dataset.day);
    let text = event.target.querySelector("input").value;
    if(text.replace(/ /g, '') === ''){
        return;
    }
    this.arrDays[thisDay].push(text);
    this.DOM.arrDays.querySelectorAll('.day')[thisDay].appendChild(this.createActionNode(this.arrDays[thisDay].length - 1, text));
    this.checkDisable();
    this.save();
    event.target.querySelector('input').value = "";
    event.target.querySelector('input').blur();
};

Form.prototype.checkDisable = function(){
    this.arrDays.forEach((weekItem, index) => {
        if(weekItem.length === this.settings.needToDo){
            this.DOM.arrDay.querySelectorAll('.day')[index].querySelector('input').disabled = true;
        }
    });
};