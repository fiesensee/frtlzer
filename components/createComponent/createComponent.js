import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {addBlogEntry, getComponentName} from "../../vendor/helper";
require("./createComponent.css")
var template = require("./createComponent.html");
class createComponent extends Component {
    constructor(){
        super("createComponent");
        this.template = template;
    }
    render(){
        return super.render()
    }
    addListeners(){
        $("#template").change(() => {
            $(".template-settings").hide();
            let template = $("#template").children().filter(":selected").val();
            $("." + template + "-settings").show();
        })
        $("#createFromInputs").click(() => {
            let newComponent = {
                "componentLink": $("#componentName").val(),
                "componentName": getComponentName($("#componentName").val())
            }
            if($("#template").val() === "blog-entry"){
                newComponent.title = $("#blog-title").val();
                newComponent.date = $("#blog-date").val();
                newComponent.category = $("#blog-category").val();
                newComponent.published = false;
                let props = {"componentName": newComponent.componentName};
                addBlogEntry(newComponent).then(() => {
                    this.appInstance.renderComponent("editArticle", props);
                });
            }
        })
        $("#back").click(() => {
            this.appInstance.renderComponent("componentOverview");
        })
    }
}
export var createComponentComponent = new createComponent();

