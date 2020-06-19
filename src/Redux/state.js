let store = {
    _state : {
        dialogsPage : {
            messages : [
                {text:'HI'},
                {text:'Yo'},
                {text:'Bay'}
            ],
            dialogs : [
                {id:1, name:'Sergey'},
                {id:2, name:'Oleg'},
                {id:3, name:'Masha'}
            ]
        },
        contentPage : {
            post : [
                {id:0, message:'Hi! How are you? bay!', likesCount:1},
                {id:1, message:'Alena very good!!!', likesCount:2}
            ]
        },
        newTextPost: {
            text:'New Post'
        },
    },
    getState () {
        return this._state;
    },

    addPost (postText) {
        let postElement = {
            id:2,
            message:postText,
            likesCount:5
        }
        this._state.contentPage.post.push(postElement);
        this._state.newTextPost.text='';
        this.renderTree(this._state);
    },

    newPostText (postText) {
        this._state.newTextPost.text=postText;
        this.renderTree(this._state);
    },

     renderTree () {
        console.log('hi');
    },

    subscribe (observer)  {
        this.renderTree=observer;
    }
}

export default store;


