const moduleList = [
    'module-credits'
];
const body = 'body.vtt';

function moduleSupport(name){
    game.modules.get(name) ? $(body).addClass(name+'-enabled') : '';
}
function changeMode(val, name){
    if(val == true){ 
        $(body).addClass(name);
        for(let i = 0; i < moduleList.length; i++){
            moduleSupport(moduleList[i]);
        }
    };
}
Hooks.once('init', () => {
    changeMode(true, 'zetas-smaller-chat-5e');
});