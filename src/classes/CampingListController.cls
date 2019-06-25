/**
 * Created by ab on 2019-06-25.
 */

public with sharing class CampingListController {

    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
        return [SELECT Id, Name, Price__c, Packed__c, Quantity__c FROM Camping_Item__c];
    }

    @AuraEnabled
    public static Camping_Item__c saveItem(Camping_Item__c CampingItem) {
        // Perform isUpdateable() checking first, then
        upsert CampingItem;
        return CampingItem;
    }

}