/**
 * Created by ab on 2019-06-23.
 */
({

    // packItem: function (component, event, helper) {
    //
    //     var s =  component.get("v.item.Packed__c");
    //
    //     if(s == false || s == undefined){
    //         component.set('v.item.Packed__c', true);
    //         console.log('Checked');
    //         // event.getSource().set('c.packItem', false);
    //         // var l = component.find('btn1').get('v.disabled');
    //         // console.log(l);
    //         // component.set(l, true);
    //         // console.log(l);
    //         // component.set('v.disabled', true);
    //
    //         // component.set('v.btnVisibility', true);
    //
    //         // component.set('v.btn', true);
    //
    //     }
    //
    // },

    //   var newCampingItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
    //             console.log(JSON.parse(JSON.stringify(newCampingItem)), JSON.stringify(newCampingItem));
    //             var campingItems = JSON.parse(JSON.stringify(component.get("v.items")));
    //             campingItems.push(newCampingItem);
    //             component.set("v.items",campingItems);
    //             component.set("v.newItem", {'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name':'', 'sobjectType': 'Camping_Item__c'});
    //         }
    // 	}
    // })

    // clickCreateItem: function (component, event, helper) {
    //     var newCampingItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
    //     var campingItems = JSON.parse(JSON.stringify(component.get("v.items")));
    //     console.log('list item from controller' + newCampingItem);
    //     var quantity = component.get('v.newItem.Quantity__c');
    //     if (quantity >= 1) {
    //         campingItems.push(newCampingItem);
    //         component.set("v.items",campingItems);
    //         console.log(component.get("v.items",campingItems));
    //         component.set("v.newItem", {'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name':'', 'sobjectType': 'Camping_Item__c'});
    //
    //     } else console.log('quantiti < 0');
    //
    // }

    // clickCreateItem : function(component, event, helper) {
    //     var isFormValid = component.find("campingItemForm").reduce(function(isValid, inputCmp){
    //         inputCmp.showHelpMessageIfInvalid();
    //         return isValid && inputCmp.get("v.validity").valid;
    //     });
    //
    //     if (isFormValid) {
    //         var newCampingItem = JSON.parse(JSON.stringify(component.get("v.newItem")));
    //         console.log(JSON.parse(JSON.stringify(newCampingItem)), JSON.stringify(newCampingItem));
    //         var campingItems = JSON.parse(JSON.stringify(component.get("v.items")));
    //         campingItems.push(newCampingItem);
    //         component.set("v.items",campingItems);
    //         component.set("v.newItem", {'Price__c': 0, 'Packed__c': false, 'Quantity__c': 0, 'Name':'', 'sobjectType': 'Camping_Item__c'});
    //     }
    // }

    packItem : function(component, event, helper) {
        component.set("v.item.Packed__c",true);

        event.getSource().set("v.disabled",true);
    }

})