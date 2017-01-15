import $ from "../../vendor/jquery.min";
import {Component} from "../../vendor/noManure";
import {renderAllAndPush} from "../../vendor/renderers";
require("./editArticle.css")
var simplegit = require("simple-git")(app.getPath("documents") + "/frtlzer/wfs/");
const Quill = require("quill");
var template = require("./editArticle.html");
class editArticle extends Component {
    constructor(){
        super("editArticle");
        this.template = template;
    }
    render(){
        this.toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block', 'image'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],

            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            ['clean']                                         // remove formatting button
        ];
        this.articlePath = app.getPath("documents") + "/frtlzer/wfs/src/components/" + this.props.componentName + "/" + this.props.componentName + ".json"; 
        return new  Promise((resolve) => {
            fs.readFile(this.articlePath, 'utf-8', (err, data) => {
                if(err){
                    console.log(err)
                }else{
                    this.articleData = JSON.parse(data);
                    this.data = this.articleData;
                    resolve(super.render());
                }
            })
        })

        
        return super.render()
    }
    addListeners(){
        if(this.articleData.published){
            $("#published").prop("checked", true);
        };
        let editor = new Quill("#editor", {
            modules: {
                toolbar: this.toolbarOptions
            },
            theme: "snow"
        });
        $(".ql-editor").html(this.articleData.text);
        $("#back").click(() => {
            this.appInstance.renderComponent("componentOverview");
        });
        $("#save").click(() => {
            this.articleData.title = $("#article-title").val();
            this.articleData.date = $("#article-date").val();
            this.articleData.text = $(".ql-editor").html();
            this.articleData.published = $("#published").is(":checked");
            console.log(this.articleData);
            fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", 'utf-8', (err, data) => {
                console.log(data);
                let articles = JSON.parse(data);
                let articleIndex = articles.articles.findIndex((arti) => {
                    return arti.componentName === this.props.componentName;
                });
                articles.articles[articleIndex].published = this.articleData.published;
                fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", JSON.stringify(articles), (err) => {
                    fs.writeFile(this.articlePath, JSON.stringify(this.articleData), (err) => {
                        renderAllAndPush("edit article " + articles.articles[articleIndex].title).then(() => {
                            this.appInstance.renderComponent("componentOverview");
                        })
                    })
                })
            })
        })
    }
}
export var editArticleComponent = new editArticle();

