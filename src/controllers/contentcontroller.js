class Tasks {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export class ContentController {
    
}

// the creating of the Tasks class will depend solely
// on the information given by the modal pop-up
// and from there it will feed the arguments
// for the object to be created
// once created, it will be appended to the 'tasks' array
// essentially the tasks array will be an array of objects