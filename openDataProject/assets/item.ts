const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    
    @property(cc.Label)
    buttonLabel: cc.Label = null;
    
    tipLabel: cc.Label = null;

    onLoad () {
        this.buttonLabel.string = this.node.name;
        this.node.on(cc.Node.EventType.TOUCH_START, this.udpateLabel, this);
    }
    
    onDestroy () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.udpateLabel, this);
    }

    udpateLabel () {
        this.tipLabel.string = `${this.node.name} clicked`;
    }
}
