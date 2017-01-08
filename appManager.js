import {mainMenuComponent} from "./components/mainMenu/mainMenu";
import {componentOverviewComponent} from "./components/componentOverview/componentOverview";
import {createComponentComponent} from "./components/createComponent/createComponent";
import {editArticleComponent} from "./components/editArticle/editArticle";
export function registerComponents(appInstance){
    appInstance.registerComponent(mainMenuComponent);
    appInstance.registerComponent(componentOverviewComponent);
    appInstance.registerComponent(createComponentComponent);
    appInstance.registerComponent(editArticleComponent);
}