import { _decorator, Component, Node, tween, SubContextView, view, Vec3, Tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Typescript')
export class Typescript extends Component {
    @property(Node)
    subContextNode: Node = null;

    @property(SubContextView)
    subContextComp: SubContextView = null;

    _tweening = false;
    _viewVisible = true;

    _showAction: Tween = null;
    _hideAction: Tween = null;

    onLoad () {
        let size = view.getVisibleSize();
        this._showAction = tween(this.subContextNode).by(.5, {
            position: new Vec3(0, size.height, 0),
        }).call(() => {
            this._viewVisible = false;
            this._tweening = false;
            this.subContextComp.enabled = false;
        });
        this._hideAction = tween(this.subContextNode).by(.5, {
            position: new Vec3(0, -size.height, 0),
        }).call(() => {
            this._viewVisible = true;
            this._tweening = false;
            this.subContextComp.enabled = true;
        });
        this.node.on(Node.EventType.TOUCH_END, this.updateViewVisible, this);
    }

    onDestroy () {
        this.node.off(Node.EventType.TOUCH_END, this.updateViewVisible, this);
    }

    updateViewVisible () {
        if (this._viewVisible) {
            this.hideView();
        }
        else {
            this.showView();
        }
    }

    hideView () {
        if (this._tweening || !this._viewVisible) {
            return;
        }
        this._tweening = true;
        this._showAction.start();
    }

    showView () {
        if (this._tweening || this._viewVisible) {
            return;
        }
        this._tweening = true;
        this._hideAction.start();        
    }
}
