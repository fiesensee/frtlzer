import {generateComponent, generateBlogFiles} from "./generators";
import {renderAllAndPush} from "./renderers";

export function addBlogEntry(blogEntry){
    //blogentry needs componentName, title, date, category(maybe have a default) and published(should be false)
    return new Promise((resolve) => {
        addComponent(blogEntry, "blogEntry").then(() => {
            //add blog to articles.json
            console.log("reading articles.json");
            fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", 'utf-8', (err, articleData) => {
                let articles = JSON.parse(articleData);
                articles.articles.push(blogEntry);
                console.log("writing articles.json");
                fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/articles.json", JSON.stringify(articles));
            });
            //write the specific article.json data
            let newBlogData = {"title": blogEntry.title, "date": blogEntry.date, "text": ""}
            console.log("writing component.json");
            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/src/components/" + blogEntry.componentName + "/" + blogEntry.componentName + ".json", JSON.stringify(newBlogData), (err) => {
                console.log(err);
                generateBlogFiles(blogEntry.componentName, newBlogData).then(() => {
                    renderAllAndPush("adding blog entry " + blogEntry.componentName).then(resolve());
                });
            });
        })
    })
}

export function addComponent(component, template="blank"){
    return new Promise((resolve) => {
        //add component to components.json
        console.log("reading components.json");
        fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/components.json", 'utf-8', (err, componentData) => {
            let components = JSON.parse(componentData);
            components.components.push({"componentName":component.componentName, "template": template})
            console.log("writing components.json");
            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/components.json", JSON.stringify(components));
        })
        //add route to routes.json
        console.log("reading routes.json");
        fs.readFile(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", 'utf-8', (err, routeData) => {
            let routes = JSON.parse(routeData)
            let route = component.componentLink.split(".");
            setPath(route, routes.routes, 0);
            console.log("writing routes.json");
            fs.writeFile(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", JSON.stringify(routes));
        })
        //create empty component skeleton
        generateComponent(component).then(() => {
            resolve();
        });
    })

}

function setPath(newRoute, routes, level){
    let targetRouteIndex = routes.findIndex((route) => {
        return route.name === newRoute[level];
    });
    if(targetRouteIndex !== -1){     
        return setPath(newRoute, routes[targetRouteIndex].children, level + 1);
    }else{
        if(level === newRoute.length - 1){
            let newEndpoint = {
                "name": newRoute[newRoute.length - 1], "path": "/" + newRoute[newRoute.length - 1], children:[] 
            };
            routes.push(newEndpoint)
            return 0;
        }else{
            let newNode = {
                "name": newRoute[level], "path": "/" + newRoute[level], children:[]
            };
            routes.push(newNode);
            return setPath(newRoute, routes[routes.length - 1].children, level + 1)
        }
    }    
}

export function getComponentName(componentLink){
    return replaceAndCamelCase(replaceAndCamelCase(componentLink, "/"), "-");
}

export function getComponentRoute(componentLink){
    return componentLink.replace(/\//g, ".");
}

function replaceAndCamelCase(text, token){
    let textParts = text.split(token);
    for(var i = 0; i < textParts.length; i++){
        textParts[i] = textParts[i].charAt(0).toUpperCase() + textParts[i].slice(1)
    }
    return textParts.join("");
}

export function deleteRoute(component){
    let linkParts = component.componentLink.split(".");
    let routeIndices = [];
    let routes = fs.readFileSync(app.getPath("documents") + "/frtlzer/wfs/configs/routes.json", 'utf-8');
    // for(var i = 0; i < linkParts.length; i++){
    //     let routeIndex = routes.findIndex((route) => {
    //         return route.name === linkParts[i];
    //     })
    //     routeIndices.push(routeIndex);
    // let routePart = routes[routeIndices[0]];
    // for(var i = 0; i < routeIndices.length; i++){
    //     for(var j = 0; i < linkParts.length; j++){

    //     }
    // }
}