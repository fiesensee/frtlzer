var Mustache = require("mustache");
export function generateComponent(component){
    return new Promise((resolve) => {
        console.log("generating component js");
        console.log(component);
        let path = app.getPath("documents") + "/frtlzer/wfs/src/components/" + component.componentName; 
        fs.mkdir(path);
        let jsTemplate = `import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
require("./{{componentName}}.css")
var template = require("./{{componentName}}.html");
class {{componentName}} extends Component {
    constructor(){
        super("{{componentName}}");
        this.template = template;
        this.route = {{componentLink}};
    }
    render(){
        return super.render()
    }
    addListeners(){
        $("#home").click(() => {
            this.appInstance.renderComponent("home");
        });
    }
}
export var {{componentName}}Component = new {{componentName}}();`
        fs.writeFile(path + "/" + component.componentName + ".js", Mustache.render(jsTemplate, component), (err) => {
            resolve();
        })
    })
}

export function generateBlogFiles(componentName, blogData){
    return new Promise((resolve) => {
        generateBlogCss(componentName).then(() => {
            resolve();
        })
    })
}

export function generateBlogCss(componentName){
    return new Promise((resolve) => {
        console.log("generating blog css");
        let path = app.getPath("documents") + "/frtlzer/wfs/src/components/" + componentName; 
        let cssTemplate = `.blog-container {
    width: 100vw;
    height: 100vh;
}

.blog-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 6rem;
    
}

.header-nav {
    display: inherit;
    text-align: center;
}

.header-nav > * {
    cursor: pointer;
}

.header-nav > h3 {
    padding-top: 3rem;
    width: 5rem;
    margin-top: 0;
    border-top: 3px solid white;
    transition: all 0.3s;
}

.blog-logo {
    padding-top: 3rem;
}

.blog-logo > h2 {
    margin-top: 0px;
}

.header-nav > h3:hover {
    border-top: 3px solid #cb450f;
}

.blog-content {
    margin-right: 25%;
    margin-left: 15%;
    text-align: right;
}

.date{
    text-align: left;
}

.content-title {
    font-size: 60px;
}

.blog-text {
    margin-left: 20%;
    margin-right: 20%;
    font-size: 20px;
}`
        fs.writeFile(path + "/" + componentName + ".css", cssTemplate, (err) => {
            resolve();
        })
    })
}