import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {renderAllAndPush} from "../../vendor/renderers";
import {deleteRoute} from "../../vendor/helper";
require("./componentOverview.css")
var template = require("./componentOverview.html");
class componentOverview extends Component {
    constructor(){
        super("componentOverview");
        this.template = template;
    }
    getArticleForComponent(componentName){
        let article = this.articles.find((arti) => {
            return arti.componentName === componentName;
        })
        return article;
    }
    render(){
        return new Promise((resolve) => {
            this.confPath = app.getPath("documents") + "/frtlzer/wfs/configs/";
            let componentData = fs.readFileSync(this.confPath + "components.json", 'utf-8');
            let articleData = fs.readFileSync(this.confPath + "articles.json", 'utf-8');
            this.articles = JSON.parse(articleData).articles;
            this.components = JSON.parse(componentData).components;
            this.data = {"components":[]};
            for(var i = 0; i < this.components.length; i++){
                this.data.components.push(this.components[i]);
                let article = this.getArticleForComponent(this.components[i].componentName);
                console.log(article);
                if(article){
                    this.data.components[i].title = article.title;
                } else {
                    this.data.components[i].title = this.components[i].componentName;
                }
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
            let deletedComp = this.components.splice(componentIndex, 1);
            let articleIndex = this.articles.findIndex((arti) => {
                return arti.componentName === $(e.currentTarget).parent().attr("id");
            })
            this.articles.splice(articleIndex, 1);
            fs.writeFile(this.confPath + "components.json", JSON.stringify({"components": this.components}), (err) => {
                fs.writeFile(this.confPath + "articles.json", JSON.stringify({"articles": this.articles}), (err) => {
                    fs.rmdir(app.getPath("documents") + "/frtlzer/wfs/src/components/" + deletedComp[0].componentName, (err) => {
                        console.log(err);
                        deleteRoute(deletedComp).then(() => {
                            renderAllAndPush("delete component " + deletedComp[0].componentName).then(() => {
                                this.appInstance.renderComponent("componentOverview");
                            });
                        })
                    })
                })
            })

        });
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

