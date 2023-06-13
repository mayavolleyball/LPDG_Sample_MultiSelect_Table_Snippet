sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.TableMultiselectSnippet", {
            onInit: function () {

            },
            onBack:function()
            {
                // @ts-ignore
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("HomeView");
            }
            
        });
    });
