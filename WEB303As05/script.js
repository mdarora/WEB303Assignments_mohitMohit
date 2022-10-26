/*
    Assignment 05
    Mohit (0795486)
*/

$(document).ready(function () {
    class ContentItem{
        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category){
            if (this.id !== id && !name && !description && !category){
                return;
            } else {
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString(){
            const nameEl = document.createElement('h2');
            nameEl.textContent = this.name;
            
            const descEl = document.createElement('p');
            descEl.textContent = this.description;
            
            const catEl = document.createElement('div');
            catEl.textContent = this.category;

            const wrapperEl = document.createElement('div');
            wrapperEl.classList.add('content-item-wrapper');
            wrapperEl.id = `content-item-${this.id}`;
            wrapperEl.append(nameEl, descEl, catEl);  
            
            return wrapperEl;
        }

    }


});


