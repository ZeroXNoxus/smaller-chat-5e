function changeMode(val, name){
    if(val == true){
        $('body.vtt').addClass(name);
    }
}
Hooks.once('init', () => {
    changeMode(true, 'smaller-chat-5e');
});