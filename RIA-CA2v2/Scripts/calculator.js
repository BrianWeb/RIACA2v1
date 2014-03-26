//JQuery button click listener://
$(document).ready(
                    function()
                    {
                        $("#buttonCalculate").click(function () 
                        {
                            var no1 = Number($('#inputFirstNumber'));
                            var no2 = Number($('#inputSecondNumber'));

                            //  calculations
                            var varAdditionTotal = (no1 + no2);
                            var varSubtractionTotal = (no1 - no2);
                            var varMultiplicationTotal = (no1 * no2);
                            var varDivisionTotal = (no1 / no2); 

                            //printing the result back on forms
                            //  document.formCalculator.inputAddition.value = varAdditionTotal;

                            $('#additionTotal') = varAdditionTotal;
                               additionTotal.value == varAdditionTotal;
                               subtractionTotal.text = varSubtractionTotal;
                            document.formCalculator.outputMultiply.value = varMultiplicationTotal;
                            document.formCalculator.outputDivision.value = varDivisionTotal;

                            alert(varAdditionTotal);

                        });
    
});


          


           
      //  };
        

 //});


