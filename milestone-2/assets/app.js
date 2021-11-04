    * {
        box - sizing: border - box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100 vh;
        background - image: linear - gradient(to bottom, #009688 0px, # 009688 80 px, #DCDBD2 80 px, #DCDBD2 100 % );
        font - family: 'Roboto',
        sans - serif;
    }

    header {
        height: 80 px;
        background - color: #009688;

}





/* utility */



.flex {

    display: flex;

}





/* ;;;;;;; */



.window {

    max-width: 1000px;

    height: 90vh;

    background-color: honeydew;

    margin: auto;

    margin-top: 20px;

}





/* colonna di sinistra */



aside {

    background-color: # f1f1f1;
        height: 100 % ;
        width: 33.33333333 % ;
    }

    .asideHeader {
        height: 60 px;
        background - color: #EAEAEA;
        align - items: center;
        justify - content: space - between;
    }

    .search {
        background - color: #F3EEEA;
    }

    .avatar {
        align - items: center;
    }

    .avatar > img {
        width: 50 px;
        border - radius: 50 % ;
    }

    .interaction {
        margin - right: 1 rem;
        font - size: 1.3 rem;
        color: rgb(173, 173, 173);
        align - items: center;
    }

    .interaction i {
        margin: 0 0.5 rem;
    }


    /* sezione messaggio notifiche */

    .connectionError {
        height: 70 px;
        background - color: #8EDAFC;

    align-items: center;

}



.connectionError p {

    font-size: 15px;

}



.connectionError a {

    font-size: 13px;

    color: gray;

}



.iconBell {