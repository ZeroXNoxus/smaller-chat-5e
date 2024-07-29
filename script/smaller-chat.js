function changeMode(val, name){
    if(val == true){
        $('body.vtt').addClass(name);
    }
}
Hooks.once('init', () => {
    changeMode(true, 'zetas-smaller-chat-5e');
});