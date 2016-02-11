sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, ResourceModel) {
  "use strict";

  return Controller.extend("sm.multiflow.controller.App", {

    onInit: function() {
      var i18nModel = new ResourceModel({
        bundleName: "sm.multiflow.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");
    }

  });
});
