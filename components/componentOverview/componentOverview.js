import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
require("./componentOverview.css")
var template = require("./componentOverview.html");
class componentOverview extends Component {
    constructor(){
        super("componentOverview");
        this.template = template;
    }
    render(){
        return new Promise((resolve) => {
            this.confPath = app.getPath("documents") + "/frtlzer/wfs/configs/";
            let componentData = fs.readFileSync(this.confPath + "components.json", 'utf-8');
            this.components = JSON.parse(componentData).components;
            this.data = {"components":[]};
            for(var i = 0; i < this.components.length; i++){
                this.data.components.push(this.components[i]);
                this.data.components[i].isBlog = false;
                if(this.components[i].template === "blogEntry"){
                    this.data.components[i].isBlog = true;
                }
            }
            resolve(super.render())
        })
    }
    addListeners(){
        $(".delete").click((e) => {
            //remove from components and save to file
            let componentIndex = this.components.findIndex((comp) => {
                return comp.componentName === $(e.currentTarget).parent().attr("id");
            })
            this.components.splice(componentIndex, 1);
            fs.writeFile(this.confPath + "components.json", JSON.stringify(this.components), (err) => {
                this.appInstance.renderComponent("componentOverview");
            })
        })
        $(".edit").click((e) => {
            //find in components and render editArticle
            let component = this.components.find((comp) => {
                return comp.componentName === $(e.currentTarget).parent().attr("id");
            })
            let props = {"componentName": component.componentName};
            this.appInstance.renderComponent("editArticle", props);
        })
        $("#newComponent").click(() => {
            this.appInstance.renderComponent("createComponent");
        })
    }
}
export var componentOverviewComponent = new componentOverview();

