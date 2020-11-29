sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		 createEmployeeModel: function () {
            var oData = [
                {
                    "emplId": 0,
                    "emplName": "James",
                    "emplLName": "Lauren",
                    "emplBDay": "01/01/2000",
                    "emplPhoneNum": "+12345",
                    "emplWorkPlace": "A01",
                    "emplDepartment": "HR Department",
                    "emplAddres": "London, Street 1"
                },
                {
                    "emplId": 1,
                    "emplName": "John",
                    "emplLName": "Schiphol",
                    "emplBDay": "01/01/2001",
                    "emplPhoneNum": "+12346",
                    "emplWorkPlace": "C02",
                    "emplDepartment": "IT Department",
                    "emplAddres": "Bruges, Street 2"
                },
                {
                    "emplId": 2,
                    "emplName": "Sandy",
                    "emplLName": "Reed",
                    "emplBDay": "01/01/2002",
                    "emplPhoneNum": "+12348",
                    "emplWorkPlace": "B841",
                    "emplDepartment": "PR Department",
                    "emplAddres": "Geneva, Street 3"
                },
                {
                    "emplId": 3,
                    "emplName": "Iggy",
                    "emplLName": "Pop",
                    "emplBDay": "01/01/2004",
                    "emplPhoneNum": "+166668",
                    "emplWorkPlace": "A83",
                    "emplDepartment": "Logistic Department",
                    "emplAddres": "Miami, Street 3"
                },
                {
                    "emplId": 4,
                    "emplName": "Lou",
                    "emplLName": "Reed",
                    "emplBDay": "01/01/2003",
                    "emplPhoneNum": "+882348",
                    "emplWorkPlace": "Q773",
                    "emplDepartment": "Press Department",
                    "emplAddres": "New York, Street 4"
                }
                ];
                var oModel = new JSONModel(oData);
                return oModel;
        }
	};
});