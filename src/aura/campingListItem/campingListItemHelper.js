/**
 * Created by ab on 2019-06-24.
 */
({


    // createExpense: function(component, expense) {
    //     var theExpenses = component.get("v.expenses");
    //
    //     // Copy the expense to a new object
    //     // THIS IS A DISGUSTING, TEMPORARY HACK
    //     var newExpense = JSON.parse(JSON.stringify(expense));
    //
    //     theExpenses.push(newExpense);
    //     component.set("v.expenses", theExpenses);
    // }

    createCamping: function(component, expense) {
        var listCampings = component.get("v.items");
        console.log(listCampings ='listCampings');
        var newCampings = JSON.parse(JSON.stringify(expense));
        console.log('newCampings '+newCampings);
        listCampings.push(newCampings);
        component.set('v.items', listCampings);
        console.log(listCamings);
    }




})