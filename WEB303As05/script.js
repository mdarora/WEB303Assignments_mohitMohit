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

    }


});


