import { _decorator, Component, Node, tween, SubContextView, view, Vec3, Tween, ToggleComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {
    @property(Node)
    subContextNode: Node = null;

    onLoad () {
        let env = window.wx || window.tt || window.swan;
        if (env) {
            console.log('Message posted');
            env.getOpenDataContext().postMessage({
                value: 'MESSAGE FROM MAIN PROJECT',
            });
        }
    }

    onToggle(toggle: ToggleComponent) {
        this.subContextNode.active = toggle.isChecked;
    }
}
