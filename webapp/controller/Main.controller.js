sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter"
], function(Controller, MessageToast, Filter) {
	"use strict";

	return Controller.extend("zemployeeDb.controller.Main", {
		onInit: function () { 
			var message = "onInit";
			MessageToast.show( message );
		},
		onPress1: function (oEvent) { 
			MessageToast.show( oEvent.getSource().getId() + "dButtonDownown" );
		},
		onPress2: function (oEvent) { 
			MessageToast.show( oEvent.getSource().getId() + "down2" );
		},
		onSearch: function (oEvent) {
            var aFilters = [];
            var sQuery = oEvent.getSource().getValue();
            if (sQuery && sQuery.length > 0) {
                var filter = new Filter("emplLName", sap.ui.model.FilterOperator.Contains, sQuery);
                aFilters.push(filter);
            }
           
            var oList = this.byId("idEmployeeTable");
            var oBinding = oList.getBinding("items");
            oBinding.filter(aFilters, "Application");
        }
	});
});