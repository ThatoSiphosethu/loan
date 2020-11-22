$(document).ready(function ()
    {



            function loanCalculator() {

                var amount = $("#amount").val();
                amount = parseFloat(amount);

                var apr = $("#apr").val();
                apr = parseFloat(apr);

                var score = $("#score").val();
                score = parseFloat(score);

                var history = $("#history").val();
                history = parseFloat(history);

                var loan = (amount * (apr / 100) / 12).toFixed(2);


                if (amount >= 40000 && score >= 600)
                {
                    alert ("Your loan application is approved")
                }

                else if (amount >= 40000 && score < 600 && history > 12)
                {
                    alert ("Your loan application is approved")
                }

                else if (amount >= 40000 && score < 600 && history < 12)
                {
                    alert ("Your loan is denied")
                }

                else if (amount < 40000 && score < 600)
                {
                    alert ("Your loan is denied")
                }

                else if (amount < 40000 && score < 600 && history > 12)
                {
                    alert ("Your loan application is approved")
                }

                else {
                    alert ("Your loan is denied")
                }
                $("#loan").text(loan.toFixed(2));

                $("p").show();


            }


            $("form").validate({
                submitHandler: loanCalculator,
                rules: myRules,
                messages: myMessages
            })
    });