import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
require("./mainMenu.css")
var template = require("./mainMenu.html");
class mainMenu extends Component {
    constructor(){
        super("mainMenu");
        this.template = template;
    }
    render(){
        return super.render()
    }
    addListeners(){
        $("#showComponents").click(() => {
            this.appInstance.renderComponent("componentOverview");
        })
    }
}

export var mainMenuComponent = new mainMenu();

