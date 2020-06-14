let renderTree =()=> {
    console.log('hi');
}

let state = {
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
   }
}
export const addPost = (postText) => {
    let postElement = {
        id:2,
        message:postText,
        likesCount:5
    }
    state.contentPage.post.push(postElement);
    state.newTextPost.text='';
    renderTree(state);
}
export const newPostText = (postText) => {
    state.newTextPost.text=postText;
    renderTree(state);
}

export const subscribe = (observer) => {
    renderTree=observer;
}

export default state;


