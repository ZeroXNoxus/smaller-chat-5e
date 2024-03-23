function changeMode(val, name){
    if(val == true){
        $('#sidebar .chat-sidebar').addClass(name);
    }
}
Hooks.once('init', () => {
    changeMode(true, 'smaller-chat-5e');
});