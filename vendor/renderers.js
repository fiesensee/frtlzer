const Mustache = require("mustache");
const projectPath = app.getPath("documents") + "/frtlzer/wfs/";
const simpleGit = require("simple-git")(app.getPath("documents") + "/frtlzer/wfs/");


export function renderAllAndPush(pushMessage){
    return new Promise((resolve) => {
        renderComponents().then(() => {
            renderBlogFiles().then(() => {
                simpleGit.add("./*")
                    .commit(pushMessage)
                    .push("origin", "develop");
                    resolve();
            })
        })
    })
}

export function renderComponents() {
    return new Promise((resolve) => {
        renderRegistrations().then(() => {
            renderRoutes().then(() => {
                resolve();
            });
        });
    })  
}

function renderRegistrations() {
    return new Promise((resolve) => {
        console.log("rendering component registrations");
        fs.readFile(projectPath + "configs/components.json", 'utf-8', (err, data) => {
            let componentData = JSON.parse(data);
            let componentsTemplate = `{{#components}}
import { {{componentName}}Component } from "./components/{{componentName}}/{{componentName}}";
{{/components}}
export function registerComponents(appInstance){
    {{#components}}
    appInstance.registerComponent({{componentName}}Component);
    {{/components}}
}`;
            let components = Mustache.render(componentsTemplate, componentData);
            fs.writeFile(projectPath + "src/appManager.js", components, () => {
                resolve();
            });
        })
    })
}

function renderRoutes() {
    return new Promise((resolve) => {
        console.log("rendering routes");
        fs.readFile(projectPath + "configs/routes.json", 'utf-8', (err, data) => {
            let routesData = JSON.parse(data);
            console.log(routesData);
            let routePartial = `{ "name": "{{name}}", "path": "{{{path}}}", "children":[
    {{#children}}
    {{> routePartial}}
    {{/children}}
] },`;
            let routesTemplate = `export const routes = [
    {{#routes}}
    {{> routePartial}}
    {{/routes}}
]`;
            let routes = Mustache.render(routesTemplate, routesData, {"routePartial": routePartial});
            console.log(routes);
            fs.writeFile(projectPath + "src/routes.js", routes,() => {
                resolve();
            });
        })
    })
}

export function renderBlogFiles() {
    return new Promise((resolve) => {
        fs.readFile(projectPath + "configs/articles.json", 'utf-8', (err, data) => {
            let articles = JSON.parse(data);
            renderArticles(articles).then(() => {
                renderBlogHtml(articles.articles, 0).then(() => {
                    resolve()
                });
            });
        })
    })
}

const blogHtmlTemplate = `<div class="blog-container">
<div class="blog-header">
    <div class="header-nav">
        <h3 class="nav-button" id="home">Heim</h3>
        <h3 class="nav-button">A</h3>
        <h3 class="nav-button">B</h3>
        <h3 class="nav-button">Über</h3>
    </div>
    <div class="blog-logo">
        <h2>K</h2>
    </div>
</div>
<div class="blog-content">
    <h3 class="date">{{date}}</h3>
    <h1 class="content-title">{{title}}</h1>
    <div class="blog-text">
        {{{text}}}
    </div>
</div>
<div class="blog-next">
</div>
</div>`;

function renderBlogHtml(articles, index){
    return new Promise((resolve) => {
        console.log("rendering blog article: " + articles[index].title);
        let article = articles[index];
        let articleData = fs.readFileSync(projectPath + "src/components/" + article.componentName + "/" + article.componentName + ".json");
        let blogHtml = Mustache.render(blogHtmlTemplate, JSON.parse(articleData));
        fs.writeFile(projectPath + "src/components/" + article.componentName + "/" + article.componentName + ".html", blogHtml, (err) => {
            if(index == articles.length - 1){
                resolve();
            } else {
                resolve(renderBlogHtml(articles, index + 1));
            }
        })
    })
}

function renderArticles(articles) {
    return new Promise((resolve) => {
        console.log("rendering blog articles");
        let articlesTemplate = `export const articles = {
    "articles": [
        {{#articles}}
        { "componentName": "{{componentName}}", "componentLink": "{{componentLink}}",  "title": "{{title}}", "category": "{{category}}", "published": {{published}} },
        {{/articles}}
    ]
}`;
        let articlesText = Mustache.render(articlesTemplate, articles);
        fs.writeFile(projectPath + "src/articles.js", articlesText, (err) => {
            resolve();
        })
    })
}