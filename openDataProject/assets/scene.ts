// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let env = window.wx || window.tt || window.swan;
env && env.onMessage(res => {
    if (!res.fromEngine) {
        console.log('Message recieved: ', res.value);
    }
});

const {ccclass, property} = cc._decorator;
import itemComponent from './item';

@ccclass
export default class NewClass extends cc.Component {

    @property({type: cc.Label})
    tipLabel: cc.Label = null;

    @property({type: cc.Prefab})
    itemPrefab: cc.Prefab = null;

    @property({type: cc.Node})
    scrollViewContent: cc.Node = null;

    onLoad () {
            this.spawnItems();
    }

    spawnItems () {
        for (let i = 0; i < 10; ++i) {
            let item = cc.instantiate(this.itemPrefab);
            item.name = `item_${i}`;
            item.getComponent(itemComponent).tipLabel = this.tipLabel;
            this.scrollViewContent.addChild(item);
        }
    }   
}
