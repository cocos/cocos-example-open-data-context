const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({type: cc.Node})
    subContextNode: cc.Node = null;

    _tweening = false;
    _viewVisible = true;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.updateViewVisible, this);
    }

    onDestroy () {
        this.node.off(cc.Node.EventType.TOUCH_END, this.updateViewVisible, this);
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
        let size = cc.view.getVisibleSize();
        cc.tween(this.subContextNode).by(.5, {
            y: size.height,
        }).call(() => {
            this._viewVisible = false;
            this._tweening = false;
        }).start();
    }

    showView () {
        if (this._tweening || this._viewVisible) {
            return;
        }
        this._tweening = true;
        let size = cc.view.getVisibleSize();
        cc.tween(this.subContextNode).by(.5, {
            y: -size.height,
        }).call(() => {
            this._viewVisible = true;
            this._tweening = false;
        }).start();
    }
}
