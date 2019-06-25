/**
 * Created by ab on 2019-06-24.
 */

//old
// clickCreateItem : function(component, event, helper) {
//         var isFormValid = component.find("campingItemForm").reduce(function(isValid, inputCmp){
//             inputCmp.showHelpMessageIfInvalid();
//             return isValid && inputCmp.get("v.validity").valid;
//         });
//
//         if (isFormValid) {
//             var newCampingItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
//             console.log(JSON.parse(JSON.stringify(newCampingItem)), JSON.stringify(newCampingItem));
//             var campingItems = JSON.parse(JSON.stringify(component.get("v.items")));
//             campingItems.push(newCampingItem);
//             component.set("v.items",campingItems);
//             component.set("v.newItem", {'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name':'', 'sobjectType': 'Camping_Item__c'});
//             component.set("v.newItem",{'sobjectType':'Camping_Item__c',
//                 'Name': '',
//                 'Quantity__c': 0,
//                 'Price__c': 0,
//                 'Packed__c': false});
//         }
//     },

({
    clickCreateItem : function(component, event, helper) {
        var validCamping = component.find('campingItemForm').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validCamping){
            // Create the new expense
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
            helper.createItem(component, newItem);
        }
    },

    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getItems");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    }
})