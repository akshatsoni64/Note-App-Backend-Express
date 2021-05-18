const Note = require('../../model/Note');

class NoteController {

    constructor() {        
    }

    get_items(request, response) {
        console.log("\nFetching Notes");
        Note.find()
            .then((notes) => response.send(notes))
            .catch((err) => console.log(err));
    }

    get_item(request, response) {
        Note.findOne({
            "_id": request.params.id
        })
            .then((note) => response.send(note))
    }

    post_items(request, response) {
        console.log("Adding Note");
        const newNote = new Note({
            title: request.body.title,
            labels: request.body.labels,
            text: request.body.text
        });
        
        newNote
        .save()
        .then(note => {
            response.json(note);
        });
    }

    update_item(request, response){
        var new_data = {}
        
        if(request.body.title != null){ new_data['title'] = request.body.title }
        if(request.body.sec_text != null){ new_data['sec_text'] = request.body.sec_text }
        if(request.body.text != null){ new_data['text'] = request.body.text }

        Note.findOneAndUpdate({
                "_id": request.params.id
            },
            {
                $set: new_data
            },
            {},
            function(err, newNote){
                if(err){
                    console.log(err);
                }
                else{
                    response.send(newNote);
                }
            }
        );
    }

    delete_item(request, response){
        console.log(request.params);
        Note.findById(request.params.id)
        .then(item => item.remove()
            .then(() => response.status(204).json({ success: true }))
        )
        .catch(err => response.status(404).json({ success: false }));
    }
}

module.exports =  NoteController;