import {App} from "./vendor/noManure";
var $ = require("./vendor/jquery.min");
window.jQuery = $;
window.$ = $;
var kube = require("./vendor/kube.min");
import {registerComponents} from "./appManager";



var appInstance = new App("app");
registerComponents(appInstance);

//try to create base folder
console.log("making frtlzer folder");
fs.mkdir(app.getPath("documents") + "/frtlzer", (err) => {
    console.log(err);
    var simpleGit = require("simple-git")(app.getPath("documents") + "/frtlzer");
    //if not already there, it's the first run, so set config
    if(!err){
        let emptyConfig = {"gitAuth": {"user": "", "password": ""}}
        fs.writeFile(app.getPath("documents") + "/frtlzer/config.json", JSON.stringify(emptyConfig))
    }else{
        fs.readFile(app.getPath("documents") + "/frtlzer/config.json", 'utf-8', (err, data) => {
            let configs = JSON.parse(data);
            if(!err){
                //check if already cloned the repo, if not clone, else pull
                fs.readdir(app.getPath("documents") + "/frtlzer/wfs/", (err, files) => {
                    if(err){
                        simpleGit.clone("https://" + configs.gitAuth.user + ":" + configs.gitAuth.password + "@github.com/fiesensee/wfs.git", app.getPath("documents") + "/frtlzer/wfs/");
                    }else{
                        simpleGit = require("simple-git")(app.getPath("documents") + "/frtlzer/wfs/")
                        simpleGit.pull();
                    }
                })
            }
        })
    }
})

appInstance.renderComponent("mainMenu");