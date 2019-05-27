window.onload = initfunction;

//variables
var f;
var fromCurrency;

var t;
var toCurrency;

//display the current date 
function initfunction()
{
    var todaysDate = new Date();
    document.getElementById('currentDate').innerHTML = todaysDate;
}

//obtain the selection from the drop down menu (select) from the fromOptions
function getFromCurrencySelection()
{
    f = document.getElementById('fromOptions');
    fromCurrency = f.options[f.selectedIndex].value;
}

//obtain the selection from the drop down menu (select) from the toOptions
function getToCurrencySelection()
{
    t = document.getElementById('toOptions');
    toCurrency = t.options[t.selectedIndex].value; 
}

/*convert whatever value the user entered in the fromAmount and display in the toAmount.
Calculation is dependent on the drop down menu selection*/
function convertFromAmountValue(val)
{
    //variable for the toAmount textfield
    var toAmount = parseFloat(0);

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    If fromCurrency=1 (Euro) convert it with the toCurrency. Display result in the toAmount field*/
    if(fromCurrency == "1")
    {
        switch(toCurrency)
        {
            case "1":
                toAmount = val * 1;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.00;
                break;

            case "2":
                toAmount = val * 1.13;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.13;
                break;
            case "3":
                toAmount = val * 1.74;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.74;
                break;
            case "4":
                toAmount = val * 250.94;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=250.94;
                break;
            case "5":
                toAmount = val * 2.99;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=2.99;
                break;
        }
    }    

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the toAmount field*/
    if(fromCurrency == "2")
    {
        switch(toCurrency)
        {
            case "1":
                toAmount = val * 0.88;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.88;
                break;
    
            case "2":
                toAmount = val * 1;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.00;
                break;
            case "3":
                toAmount = val * 0.77;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.77;
                break;
            case "4":
                toAmount = val * 110.58;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=110.58;
                break;
            case "5":
                toAmount = val * 1.32;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.32;
                break;
        }

    }
    
    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the toAmount field*/
    if(fromCurrency == "3")
    {
        switch(toCurrency)
        {
            case "1":
                toAmount = val * 1.15;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.15;
                break;
    
            case "2":
                toAmount = val * 1.31;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.31;
                break;
            case "3":
                toAmount = val * 1;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.00;
                break;
            case "4":
                toAmount = val * 144.51;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=144.51;
                break;
            case "5":
                toAmount = val * 1.72;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.72;
                break;
        }

    }

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the toAmount field*/
    if(fromCurrency == "4")
    {
        switch(toCurrency)
        {
            case "1":
                toAmount = val * 0.0080;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.0080;
                break;
    
            case "2":
                toAmount = val * 0.0090;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.0090;
                break;
            case "3":
                toAmount = val * 0.0069;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=.0069;
                break;
            case "4":
                toAmount = val * 1;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.00;
                break;
            case "5":
                toAmount = val * 0.012;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.0120;
                break;
        }

    }

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the toAmount field*/
    if(fromCurrency == "5")
    {
        switch(toCurrency)
        {
            case "1":
                toAmount = val * 0.67;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.67;
                break;
    
            case "2":
                toAmount = val * 0.76;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.76;
                break;
            case "3":
                toAmount = val * 0.58;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=0.58;
                break;
            case "4":
                toAmount = val * 84.02;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=84.02;
                break;
            case "5":
                toAmount = val * 1;
                document.getElementById('toAmount').value=toAmount.toFixed(2);
                document.getElementById('currencyRate').value=1.00;
                break;
        }
    } 
}


/*convert whatever value the user entered in the toAmount and display in the fromAmount.
Calculation is dependent on the drop down menu selection. Basically reverse above function*/
function convertToAmountValue(val)
{
    //variable for the fromAmount textfield
    var fromAmount = parseFloat(0);

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the fromAmount field*/
    if(toCurrency == "1")
    {
        switch(fromCurrency)
        {
            case "1":
                fromAmount = val * 1;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;

            case "2":
                fromAmount = val * 1.13;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "3":
                fromAmount = val * 1.74;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "4":
                fromAmount = val * 250.94;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "5":
                fromAmount = val * 2.99;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
        }
    }    

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the fromAmount field*/
    if(toCurrency == "2")
    {
        switch(fromCurrency)
        {
            case "1":
                fromAmount = val * 0.88;
                document.getElementById('fromAmount').value=romAmount.toFixed(2);
                break;
    
            case "2":
                fromAmount = val * 1;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "3":
                fromAmount = val * 0.77;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "4":
                fromAmount = val * 110.58;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "5":
                fromAmount = val * 1.32;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
        }

    }
    
    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the fromAmount field*/
    if(toCurrency == "3")
    {
        switch(fromCurrency)
        {
            case "1":
                fromAmount = val * 1.15;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
    
            case "2":
                fromAmount = val * 1.31;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "3":
                fromAmount = val * 1;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "4":
                fromAmount = val * 144.51;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "5":
                fromAmount = val * 1.72;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
        }

    }

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the fromAmount field*/
    if(toCurrency == "4")
    {
        switch(fromCurrency)
        {
            case "1":
                fromAmount = val * 0.0080;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
    
            case "2":
                fromAmount = val * 0.0090;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "3":
                fromAmount = val * 0.0069;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "4":
                fromAmount = val * 1;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "5":
                fromAmount = val * 0.012;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
        }

    }

    /*value 1=Euro, 2=US dollar, 3=Pound Sterling, 4=Japanese Yen, 5=Canadian dollar. 
    Display result in the fromAmount field*/
    if(toCurrency == "5")
    {
        switch(fromCurrency)
        {
            case "1":
                fromAmount = val * 0.67;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
    
            case "2":
                fromAmount = val * 0.76;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "3":
                fromAmount = val * 0.58;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "4":
                fromAmount = val * 84.02;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
            case "5":
                fromAmount = val * 1;
                document.getElementById('fromAmount').value=fromAmount.toFixed(2);
                break;
        }
    } 
}


