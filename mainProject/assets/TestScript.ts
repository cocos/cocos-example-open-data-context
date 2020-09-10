const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    subContextNode: cc.Node = null;

    @property(cc.SubContextView)
    subContextComp: cc.SubContextView = null;

    _tweening = false;
    _viewVisible = true;

    onLoad () {
        let env = window.wx || window.tt || window.swan;
        if (env) {
            console.log('Message posted');
            env.getOpenDataContext().postMessage({
                value: 'MESSAGE FROM MAIN PROJECT',
            });
        }
    }
    
    onToggle (toggleComp) {
        this.subContextNode.active = toggleComp.isChecked;
    }
}
