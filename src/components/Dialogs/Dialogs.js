import React from "react";
import c from './Dialogs.module.css'

const Dialogs = () => {
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            <div className={c.dialog + ' '+ c.active}>
               Sergey
            </div>
            <div className={c.dialog}>
                Marat
            </div>
            <div className={c.dialog}>
                Julia
            </div>
            <div className={c.dialog}>
                Sveta
            </div>
            <div className={c.dialog}>
                Egor
            </div>
        </div>
        <div className={c.messages}>
            <div className={c.message}>
                Hello world
            </div>
            <div className={c.message}>
                Hi friend
            </div>
            <div className={c.message}>
                Very big!
            </div>
        </div>

    </div>
    );
}

export default Dialogs;